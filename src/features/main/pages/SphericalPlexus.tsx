import { useEffect, useRef, useState } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  projectedX: number;
  projectedY: number;
  connections: number[];
}

export function SphericalPlexus() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const [points, setPoints] = useState<Point3D[]>([]);
  const rotationRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0, isDown: false });
  const autoRotateRef = useRef(true);

  // Generate points on sphere surface using Fibonacci spiral
  const generateSpherePoints = (count: number, radius: number): Point3D[] => {
    const points: Point3D[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < count; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      points.push({
        x,
        y,
        z,
        projectedX: 0,
        projectedY: 0,
        connections: [],
      });
    }

    return points;
  };

  // Calculate connections between nearby points
  const calculateConnections = (points: Point3D[], maxDistance: number) => {
    points.forEach((point, i) => {
      point.connections = [];
      points.forEach((otherPoint, j) => {
        if (i !== j) {
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const dz = point.z - otherPoint.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < maxDistance) {
            point.connections.push(j);
          }
        }
      });
    });
  };

  // Project 3D points to 2D screen coordinates
  const project3DTo2D = (
    point: Point3D,
    canvas: HTMLCanvasElement,
    distance: number,
  ) => {
    const scale = distance / (distance + point.z);
    return {
      x: point.x * scale + canvas.width / 2,
      y: point.y * scale + canvas.height / 2,
      scale: scale,
    };
  };

  // Rotate point around X and Y axes
  const rotatePoint = (point: Point3D, rotX: number, rotY: number): Point3D => {
    // Rotate around Y axis
    let x = point.x * Math.cos(rotY) - point.z * Math.sin(rotY);
    let z = point.x * Math.sin(rotY) + point.z * Math.cos(rotY);
    let y = point.y;

    // Rotate around X axis
    const newY = y * Math.cos(rotX) - z * Math.sin(rotX);
    const newZ = y * Math.sin(rotX) + z * Math.cos(rotX);

    return { ...point, x, y: newY, z: newZ };
  };

  // Mouse event handlers
  const handleMouseDown = (e: MouseEvent) => {
    mouseRef.current.isDown = true;
    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;
    autoRotateRef.current = false;
  };

  const handleMouseUp = () => {
    mouseRef.current.isDown = false;
    setTimeout(() => {
      autoRotateRef.current = true;
    }, 2000);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!mouseRef.current.isDown) return;

    const deltaX = e.clientX - mouseRef.current.x;
    const deltaY = e.clientY - mouseRef.current.y;

    rotationRef.current.y += deltaX * 0.01;
    rotationRef.current.x += deltaY * 0.01;

    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas completely (no fade effect)
    ctx.fillStyle = "#371F7D";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update rotation (auto-rotate when not interacting)
    if (autoRotateRef.current) {
      rotationRef.current.x += 0.003;
      rotationRef.current.y += 0.005;
    }

    // Rotate and project points
    const rotatedPoints = points.map((point) => {
      const rotated = rotatePoint(
        point,
        rotationRef.current.x,
        rotationRef.current.y,
      );
      const projected = project3DTo2D(rotated, canvas, 500);

      return {
        ...rotated,
        projectedX: projected.x,
        projectedY: projected.y,
        scale: projected.scale,
      };
    });

    // Sort points by z-depth for proper rendering
    const sortedPoints = rotatedPoints
      .map((point, index) => ({ ...point, originalIndex: index }))
      .sort((a, b) => b.z - a.z);

    // Draw connections
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 0.5;

    sortedPoints.forEach((point) => {
      if (point.z > -300) {
        point.connections.forEach((connectionIndex) => {
          const connectedPoint = rotatedPoints[connectionIndex];

          if (connectedPoint && connectedPoint.z > -300) {
            const avgZ = (point.z + connectedPoint.z) / 2;
            const opacity = Math.max(0, Math.min(1, (300 - avgZ) / 600)) * 0.15;

            if (opacity > 0.01) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
              ctx.beginPath();
              ctx.moveTo(point.projectedX, point.projectedY);
              ctx.lineTo(connectedPoint.projectedX, connectedPoint.projectedY);
              ctx.stroke();
            }
          }
        });
      }
    });

    // Helper function to interpolate between two colors
    const interpolateColor = (
      color1: string,
      color2: string,
      factor: number,
    ) => {
      // Parse hex colors
      const hex1 = color1.replace("#", "");
      const hex2 = color2.replace("#", "");

      const r1 = parseInt(hex1.substr(0, 2), 16);
      const g1 = parseInt(hex1.substr(2, 2), 16);
      const b1 = parseInt(hex1.substr(4, 2), 16);

      const r2 = parseInt(hex2.substr(0, 2), 16);
      const g2 = parseInt(hex2.substr(2, 2), 16);
      const b2 = parseInt(hex2.substr(4, 2), 16);

      const r = Math.round(r1 + (r2 - r1) * factor);
      const g = Math.round(g1 + (g2 - g1) * factor);
      const b = Math.round(b1 + (b2 - b1) * factor);

      return { r, g, b };
    };

    // Draw points with color gradient based on depth
    sortedPoints.forEach((point) => {
      if (point.z > -300) {
        const size = Math.max(0.5, point.scale * 2.5);
        // Fix depth-based opacity - closer points (higher z) should be brighter
        const depthFactor = Math.max(0, Math.min(1, (point.z + 300) / 600));
        const opacity = depthFactor * 0.9;

        if (opacity > 0.01) {
          // Color interpolation: #BC96FF (purple) for far, #FF4365 (red/pink) for near
          const colorBlend = interpolateColor(
            "#BC96FF",
            "#FF4365",
            depthFactor,
          );

          ctx.fillStyle = `rgba(${colorBlend.r}, ${colorBlend.g}, ${colorBlend.b}, ${opacity})`;
          ctx.beginPath();
          ctx.arc(point.projectedX, point.projectedY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  // Initialize points and start animation
  useEffect(() => {
    const spherePoints = generateSpherePoints(120, 150);
    calculateConnections(spherePoints, 85);
    setPoints(spherePoints);
  }, []);

  // Start animation when points are ready
  useEffect(() => {
    if (points.length > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [points]);

  // Handle canvas resize and mouse events
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ background: "#371F7D" }}
    />
  );
}
