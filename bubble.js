// let arr = [2,1,7,4,8]
[1,2,7,4,8]
[a,b] = [b,a]

const happy = function(arr){
    for(let i=0;i<=arr.length;i++){
      if(arr[i]>arr[i+1]){
        let swap = arr[i]
         arr[i]=arr[i+1]
        arr[i+1]=swap
      }
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
    }
return arr
}

console.log(happy([2,1,7,1,8]))

