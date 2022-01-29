export const set = (key, value) => {
  if (!!key && !!value) {
    localStorage.setItem(key, value);
  }
};
export const get = (key) => {
  if (!!key) {
    return localStorage.getItem(key);
  }
};
