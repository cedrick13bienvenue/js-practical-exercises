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

async function fetchBoth() {
  const [user, todos] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1").then((r) => r.json()),
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((r) => r.json()),
  ]);
  console.log(user.name, todos.title);
}
fetchBoth();

// 4. Handle async errors using try/catch

async function getPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/invalid");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}
getPost();
