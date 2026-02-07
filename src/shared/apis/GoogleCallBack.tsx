import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (!code) {
      navigate("/main");
      return;
    }

    const encodedCode = encodeURIComponent(code);

    fetch(
      `${import.meta.env.VITE_BASE_API_URL}/v1/auth/login?code=${encodedCode}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      },
    )
      .then((res) => {
        if (!res.ok) throw new Error("login failed");
        return res.json();
      })
      .then((res) => {
        console.log("로그인 성공", res);
        navigate("/main");
      })
      .catch((err) => {
        console.error(err);
        navigate("/main");
      });
  }, [navigate]);

  return <div>구글 로그인 처리 중...</div>;
};

export default GoogleCallback;
