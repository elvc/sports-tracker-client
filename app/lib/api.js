

export default {
  post: (url, data) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        dataType: 'json',
        type: 'POST',
        data: data,
        xhrFields: { withCredentials: true },
        success: (result) => {
          resolve(result);
        },
        error: (error) => {
          reject(error);
        }
      });
    })
  },
    get: (url) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
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
  }
}