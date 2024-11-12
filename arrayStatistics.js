/* Array statistics
You are given an array of numbers. Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

The returned object should have the following properties:
sum: The sum of all numbers in the array.
average: The average of all numbers in the array (rounded to two decimal places).
min: The minimum value in the array.
max: The maximum value in the array.

Example:
arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }
 */

const arrayStats = function(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        
    }
    const average = sum/arr.length
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    return {
      sum,
      average,
      max,
      min,
    }
}
console.log(arrayStats([1,2,3,4,5]))
 //OR

 const sumArr = function(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        
    }
    const average = sum/arr.length
    let max = arr[0]
    let min = arr[0]
    for(let i=1;i<=arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return {
      sum,
      average,
      max,
      min,
    }
}
console.log(sumArr([1,2,3,4,5]))