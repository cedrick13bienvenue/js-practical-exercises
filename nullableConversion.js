// Nullable conversion
// you are given an object with properties that may contain null or undefined values.
// Your task is to implement a function called convertNullableValues that checks if any of the properties in the object contains null or undefined.
// If a property is null convert it to zero and if a property is undefined convert it to an empty string. Return the modified object.

const convertNullableValues = function (object) {
  for (let key in object) {
    if (object[key] === null) {
      object[key] = 0;
    } else if (object[key] === undefined) {
      object[key] = "";
    }
  }

  return object;
};

const sampleObject = {
  name: "Alice",
  age: null,
  email: undefined,
  city: "Kigali",
};

const updatedObject = convertNullableValues(sampleObject);
console.log(updatedObject);

// OR

function convertNullableValues(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (value === null) obj[key] = 0;
    else if (value === undefined) obj[key] = "";
  });
  return obj;
}

// OR

function convertNullableValues(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      value === null ? 0 : value === undefined ? "" : value,
    ])
  );
}

// OR

function convertNullableValues(obj) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === null) obj[key] = 0;
    else if (obj[key] === undefined) obj[key] = "";
  }
  return obj;
}
