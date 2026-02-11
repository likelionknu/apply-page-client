// GoogleLogin.ts
const GoogleLogin = () => {
  const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const REDIRECT_URI = "http://localhost:5173";

  const googleAuthUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    "client_id=" +
    CLIENT_ID +
    "&" +
    "redirect_uri=" +
    encodeURIComponent(REDIRECT_URI) +
    "&" +
    "response_type=code&" +
    "scope=email profile openid&" +
    "access_type=offline&" +
    "prompt=select_account";

  window.location.href = googleAuthUrl;
};

export default GoogleLogin;
