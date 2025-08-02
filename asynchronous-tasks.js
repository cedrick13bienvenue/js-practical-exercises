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

// 2. Create a custom delay(ms) function

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start");
  await delay(1000);
  console.log("1 second later");
}
run();

// 3. Write an async function that fetches two APIs in parallel
