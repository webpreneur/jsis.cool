export const randomId = () =>
  new Date().getTime().toString().concat(performance.now().toString());
