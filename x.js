// function reverseastring(str){
  
//     let rev='';
//     for(let i=str.length-1;i>=0;i--){
        
//         rev+=str[i];
//     }
// return rev;
// };
// console.log(reverseastring('hello'));


// function checknumber(num){
//     if(num%2==0){
//         console.log('even')
//     }
//     else if (num==0){
//         console.log('not even not odd')
//     }
//     else{
//         console.log('odd')
//     }
// }
// console.log(checknumber(2))

// function sumofnum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum;
// }
// console.log(sumofnum([1,3,4]))

// function countvowels(str){
//     let vowels=['a','e','i','o','u'];
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i].toLowerCase())){
//             count+=1
//         }
//     }
//     return count
// }

// console.log(countvowels('hello'))

// function findmax(arr){
//     let max=arr[0];

//     for(let i=0;i<arr.length;i++){
        
//         if(arr[i]>max){
//             max=arr[i]
//         }

//     }
//     return max
// }
// console.log(findmax([-2,-55]))


// function checkpal(str){
    
//    let rev=''

//    for (let i = str.length-1; i>=0; i--) {
//     rev+=str[i]
     
//    }
//    return rev==str
    
// }
// console.log(checkpal('azeem'))

// function randomnum(){
    
//         let x=Math.floor(Math.random()*100)
//         return x;
// }
// console.log(randomnum())

// function removedub(arr){
//     let res=[];
// arr.forEach(element => {
//    if(!res.includes(element)){
//     res.push(element);
//    }
// });
// return res;
// };
// console.log(removedub([1,2,3,3,3,4,5]))

// function countstr(str){
//    let res={}
//     for(let char of str){
//          res[char]=(res[char] || 0)+1
//     }
//     return res;
    
    
// }
// console.log(countstr('hello'))

