// function doublearr(arr){
//    let b= arr.map((ele)=>{
//         return ele*=2;
//     })
//     return b;
// }
// console.log(doublearr([1,2,3]))

// function filtereven(arr){
//     return arr.filter(e=>e%2==0)
// }
// console.log(filtereven([1,2,3,4,5,6]))


// function sumreduce(arr){
//    let b= arr.reduce((acc,cumm)=>{
//         return acc+cumm;
//     })
//     return b;
// }
// console.log(sumreduce([1,2,3]))

// function upper(arr){

//     let b=arr.map((ele)=>{
//         return ele.toUpperCase()
//     })
//     return b;
// }
// console.log(upper(["hello",'azeem']))

// function getname(arr){
//     return arr.map(ele=>ele.name)
// }
// console.log(getname([
//     { name: "Azeem", age: 24 },
//     { name: "Shreyas", age: 23 }
//   ]
//   ))


// function filterage(arr){
//     return arr.filter(e=>e.age>22? true: false)
// }
// console.log(filterage([
//         { name: "Azeem", age: 24 },
//         { name: "Shreyas", age: 20 },
//         { name: "aaa", age: 22},
//         { name: "aada", age: 21 },
        
//       ]))

// function howtimes(arr){
//     return arr.reduce((acc,curr)=>{
//         acc[curr]=(acc[curr] || 0)+1
//         return acc;
//     },{})
// }
// console.log(howtimes(["apple", "banana", "apple", "orange", "banana", "apple"]))
// function removedub(arr){
//     let c=[]
//     let b=arr.reduce((acc,cumm)=>{
//         if(acc!==cumm){
//             return c.push(cumm)
//         }
//     })
//     return c;
// }
// console.log(removedub([1, 2, 2, 3, 4, 4, 5]))

const user = {
    name: "Azeem",
    show() {

        console.log(this.name);
    }
    
    
  };
  
  setTimeout(user.show(), 1000);
  