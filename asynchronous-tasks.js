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

// 5. Retry a failed async operation up to 3 times
async function retryFetch(url, retries = 3) {
  while (retries > 0) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed");
      return await res.json();
    } catch (e) {
      retries--;
      if (retries === 0) throw e;
    }
  }
}

retryFetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(console.log)
  .catch(console.error);

// 6. Create a timeout wrapper for any async function

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), ms)
    ),
  ]);
}

withTimeout(fetch("https://jsonplaceholder.typicode.com/posts/1"), 500)
  .then((r) => r.json())
  .then(console.log)
  .catch(console.error);

// 7. Sequentially process an array with async/await

const items = [1, 2, 3];

async function processItem(item) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Processed:", item);
      resolve();
    }, 500)
  );
}

async function processAll(items) {
  for (const item of items) {
    await processItem(item);
  }
}

processAll(items);

// 8. Throttle async requests (one at a time)

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
];

async function fetchSequential(urls) {
  for (const url of urls) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.title);
  }
}

fetchSequential(urls);
