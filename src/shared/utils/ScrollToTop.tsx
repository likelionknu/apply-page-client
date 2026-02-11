import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(): null {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (
      typeof window !== "undefined" &&
      "history" in window &&
      "scrollRestoration" in window.history
    ) {
      (
        window.history as History & {
          scrollRestoration?: "auto" | "manual";
        }
      ).scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
