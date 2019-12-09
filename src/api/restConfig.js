export const request = url => {
  return fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
      if (data.Message) {
        return Promise.reject(data.Message);
      }
      return Promise.resolve(data);
    });
};
