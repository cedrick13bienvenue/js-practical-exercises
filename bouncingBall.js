{
  /*A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled). */
}

function bouncingBall(h, bounce, window) {
  // your code here
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  let x = 1;
  let y = h * bounce;
  while (y > window) {
    x += 2;
    y *= bounce;
  }
  return x;
}

// OR

function bouncingBall(h, bounce, window) {
  // Check if the conditions are valid
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let seenCount = 1; // First fall is always seen
  let bounceHeight = h * bounce;

  while (bounceHeight > window) {
    seenCount += 2; // One up and one down past the window
    bounceHeight *= bounce;
  }

  return seenCount;
}

// OR
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let seenCount = 1;
  for (let height = h * bounce; height > window; height *= bounce) {
    seenCount += 2;
  }

  return seenCount;
}

// OR

function bouncingBall(h, bounce, window, seen = 1) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  const nextHeight = h * bounce;
  return nextHeight > window
    ? bouncingBall(nextHeight, bounce, window, seen + 2)
    : seen;
}
// OR

function bouncingBall(h, bounce, window) {
  if (!(h > 0 && 0 < bounce && bounce < 1 && window < h)) return -1;

  let count = 1;
  let height = h * bounce;

  while (height > window && (count += 2)) {
    height *= bounce;
  }

  return count;
}

// OR

function bouncingBall(h, bounce, window) {
  let validHeight = h > 0;
  let validBounce = bounce > 0 && bounce < 1;
  let validWindow = window < h;

  if (!validHeight || !validBounce || !validWindow) {
    return -1;
  }

  let count = 1;
  let currentHeight = h * bounce;

  while (currentHeight > window) {
    count += 2;
    currentHeight *= bounce;
  }

  return count;
}

// OR

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let count = 0;
  let currentHeight = h;

  while (currentHeight > window) {
    count++; // Seen falling
    currentHeight *= bounce;
    if (currentHeight > window) {
      count++; // Seen bouncing up
    }
  }

  return count;
}

// OR

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  function countBounces(height) {
    if (height <= window) return 0;
    const newHeight = height * bounce;
    return 2 + countBounces(newHeight);
  }

  return 1 + countBounces(h * bounce); // First fall is seen once
}

// OR

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let count = 0;
  let height = h;

  do {
    count++; // fall
    height *= bounce;
    if (height > window) {
      count++; // bounce up
    }
  } while (height > window);

  return count;
}

// OR

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  const bounces = [];
  let height = h * bounce;

  while (height > window) {
    bounces.push(height);
    height *= bounce;
  }

  return 1 + bounces.length * 2;
}

// OR

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let n = 0;
  let height = h;

  while (height * bounce > window) {
    height *= bounce;
    n++;
  }

  return n * 2 + 1;
}
