import LoadingPage from "@shared/pages/LoadingPage";
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
        const { access_token, refresh_token, name, is_new_user } = res.data;

        sessionStorage.setItem("accessToken", access_token);
        sessionStorage.setItem("refreshToken", refresh_token);
        sessionStorage.setItem("userName", name);

        if (is_new_user) {
          navigate("/additional");
        } else {
          navigate("/main");
        }
      })
      .catch((err) => {
        console.error(err);
        navigate("/main");
      });
  }, [navigate]);

  return <LoadingPage />;
};

export default GoogleCallback;
