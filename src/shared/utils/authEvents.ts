export const AUTH_CHANGED_EVENT = "auth:changed";

export const readAuthSnapshot = () => ({
  isLogin: Boolean(sessionStorage.getItem("accessToken")),
  userName: sessionStorage.getItem("userName"),
});

export const emitAuthChanged = () => {
  window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
};
