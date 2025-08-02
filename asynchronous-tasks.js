// 1. Convert a callback-based function into a promise-based one
// Given
function getData(callback) {
  setTimeout(() => callback("data received"), 1000);
}

// Convert this to return a promise
function getDataPromise() {
  return new Promise((resolve) => {
    getData((data) => resolve(data));
  });
}

getDataPromise().then(console.log); // "data received"
