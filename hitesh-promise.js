// const { error } = require("console");

// function p(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let success=true;
//         if(success){
//             resolve('data fetched');
            
//         }
//         else{
//             reject('error occured')
//         }
//         }, 3000);
//     })
// };
// let result=p()
// result
// .then((data)=>console.log(data))
// .catch((error)=>console.error(error))
// console.log(result)


const Person={
    name:'azeem',
    greet(){
        console.log(`my name is ${this.name}`)
    }
};
Person.greet();
let newperson=Person.greet;
let actualperson=Person.greet.bind({name:'shaik'});
actualperson()