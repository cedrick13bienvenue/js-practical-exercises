{/*
Object key transformation

Your task is to implement a JavaScript function called transformKeys that takes an object as input and returns a new object with the keys transformed according to the provided transformation function.

The transformKeys function should iterate through the keys of the input object and apply the transformation function to each key. The transformation function should take the original key as input and return the new key.

Example:
```
const inputObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const transformFunction = (key) => key.toUpperCase();
const transformedObject = transformKeys(inputObject, transformFunction);
console.log(transformedObject);
// should return { FIRSTNAME: "John", LASTNAME: "Doe", AGE: 30 }
```
*/
}

function transformKeys(obj, transformFn) {

    const result = {}; 

    for (const [key, value] of Object.entries(obj)) {
        const newKey = transformFn(key); 
        
        result[newKey] = value; 
    }
    return result; 
}
