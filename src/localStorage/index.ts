export const setLsUserToken = (value: string) => {
  window.localStorage.setItem(process.env.REACT_APP_KEY_TOKEN ?? "", value);
};

export const getLsUserToken = () => {
  return window.localStorage.getItem(process.env.REACT_APP_KEY_TOKEN ?? "");
};

export const clearLs = () => {
  window.localStorage.clear();
};
