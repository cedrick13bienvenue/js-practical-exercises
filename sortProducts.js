// Sort products
// You are given an array of product objects, each containing a name (string) and a price (number).
//Your task is to implement a function called sortProducts that sorts the products based on their prices in ascending order.

const sortProducts = function (products) {
  return products.sort((x, y) => x.price - y.price);
};

console.log(
  sortProducts([
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 },
    { name: "Monitor", price: 300 },
  ])
);

// OR
function sortProducts(products) {
  function compareByPrice(a, b) {
    return a.price - b.price;
  }
  return products.sort(compareByPrice);
}
// OR
function sortProducts(products) {
  return [...products].sort((a, b) => a.price - b.price);
}
