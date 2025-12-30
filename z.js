// function a(){
//     let count=0;
//     return function(){
//         count++
//         console.log(count)
//         return count;
//     }   
// }
// let c=a()
// c()
// c()

// function add(n){

//     return function (x){
//         return n+x;
//     }
// }
// let a=add(5);
// console.log(a(1))

// function orintnum(n){
// let count=0;
//     for (let i = 1; i <=n; i++) {
//         setTimeout(() => {
//             count++;
//             console.log(count)
//         }, i*1000);
        
//     }
    
// }
// orintnum(5)

//currying
// function sum(a){
//     return function (b){
//        return  function (c){
//         return a+b+c;
//         }
//     }

// }
// console.log(sum(1)(2)(3))


// function add(a){
//     return function(b){
//       if(b !== undefined){
//         return add(a + b);
//       }
//       return a;
//     }

//   }
// console.log(add(1)(2)(2)(3)())  

// function curry(fn) {
//     return function curried(...args) {
//       if (args.length >= fn.length) {
//         return fn(...args);
//       } else {
//         return function (...nextArgs) {
//           return curried(...args, ...nextArgs);
//         };
//       }
//     };
//   }
  
// function total(a,b){
//    return a*b;
// }
// let c=curry(total)
// console.log(c(1)(2))