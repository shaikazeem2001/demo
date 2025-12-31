// function fizzBuzz(n){
//     for(let i = 1; i <= n; i++){
//       if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//       } else if(i % 3 === 0){
//         console.log("Fizz");
//       } else if(i % 5 === 0){
//         console.log("Buzz");
//       } else {
//         console.log(i);
//       }
//     }
//   }
  
//   fizzBuzz(100);
  
// function secondmax(arr){
//     let largest=-Infinity
//     let secondlargest=-Infinity
//    for(num of arr){
//     if(num>largest){
//         secondlargest=largest
//         largest=num;
//     }
    
//    }
// return secondlargest;
// }
// console.log(secondmax([10,20,3]))

// function stringanagrams(str1,str2){
    
//     let string1=str1.toLowerCase().split('').sort().join()
//     let string2=str2.toLowerCase().split('').sort().join()
//     if(string1==string2){
//         return true
//     }
//     else{
//         return false;
//     }
// }
// console.log(stringanagrams('hello','ello'))


// function checkfrequency(arr){
//     let res={}
//     for(let i of arr){
//         res[i]=(res[i] || 0)+1
//     }
//     return res;
// }
// console.log(checkfrequency(["a","a","b"]))


// function flatarr(arr){
//     let flat=arr.flat(Infinity);
//     return flat
// }
// console.log(flatarr([[1,2],2,3,4,[1,[234,54]]]))


// function facct(n){
//     let res=1
//     for (let i = 1; i <=n; i++) {
//         res=res*i
//     }
//     return res;
// }
// console.log(facct(5))

// function longestWord(sentence) {
//     let words = sentence.split(" ");
//     let longest = "";
  
//     for (let word of words) {
//       if (word.length > longest.length) {
//         longest = word;
//       }
//     }
//     return longest;
//   }
  
//   console.log(longestWord("I love programming"));

  
//   function uppercase(arr) {
//     return arr.map(str => str.toUpperCase());
//   }
  
//   console.log(uppercase(["apple", "banana"]));
//   // ["APPLE", "BANANA"]
  