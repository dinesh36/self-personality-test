export const sleep = (timeout = 3000) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(null);
  }, timeout);
});
