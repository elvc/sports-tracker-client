

export default {
  post: (url, data) => new Promise((resolve, reject) => {
    $.ajax({
      url,
      dataType: 'json',
      type: 'POST',
      data,
      xhrFields: { withCredentials: true },
      success: (result) => {
        resolve(result);
      },
      error: (error) => {
        reject(error);
      }
    });
  }),
  get: url => new Promise((resolve, reject) => {
    $.ajax({
      url,
      type: 'GET',
      xhrFields: { withCredentials: true },
      success: (result) => {
        resolve(result);
      },
      error: (error) => {
        reject(error);
      }
    });
  })
};
