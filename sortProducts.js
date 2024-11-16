const sortProducts = function(obj){
return obj.sort((a,b)=>a.price-b.price);
   }
   
const objj = [
    {
        name: "hh",
        price: 12
},
{
    name: "hh",
    price: 1
},
{
    name: "hh",
    price: 5
}
]
console.log(sortProducts(objj))

