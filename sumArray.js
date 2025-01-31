{/*Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

 */}

 function sumArray(arr){
    if (!arr || arr.length <= 1) return 0;
    let sum=0
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    for(let x=0;x<arr.length;x++){
        sum+=arr[x]
    }
    return sum - max - min
 }
 //OR 
 
 function sumArray(arr){
    if (!arr || arr.length <= 1) return 0;
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    return arr.reduce((x,y)=> x + y , 0) - max - min
 }
 