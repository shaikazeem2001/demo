// class Car {                 // CLASS → blueprint
//     constructor(model){     // CONSTRUCTOR → creates object
//         this.model = model;
//     }

const { error } = require("console");
const { setInterval } = require("timers/promises");

//     drive(){                // method
//         console.log(`${this.model} is driving`);
//     }
// }

// let c1 = new Car("BMW");    // OBJECT / INSTANCE



// class bank{
//     #balance=0;
//     getdetails(amount){
//         this.#balance+=amount;
//         return this.#balance
//     }
//     getbalance(){
//         return `$ ${this.#balance}`
//     }
// };
// let p1=new bank()
// console.log(p1.getbalance())

// class person{
//     constructor(name,age){
//         this._name=name;
//         this._age=age
//     };
//     get ageofperson(){
//         return `${this._age} is the actual age`
//     }

//     set ageofperson(value){
//         if(value<0){
//             console.log("Age must be positive!");
//             return;
//         };
//         this._age=value
//     }
// };
// let p=new person('azeem',24);
// p.ageofperson=-34;
// console.log(p.ageofperson)

// class Account {
//     #balance = 0; // truly private
  
//     get balance() {
//       return this.#balance;
//     }
  
//     set balance(amount) {
//       if (amount < 0) throw new Error("Balance cannot be negative");
//       this.#balance = amount;
//     }
//   }
  
//   const a = new Account();
//   a.balance = -200;
//   console.log(a.balance);
  
// function Person(name, age) {

//     if (age < 0) {
//         throw new Error("Age cannot be negative");
//     }

//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function() {
//     return `Hello, my name is ${this.name}`;
// };

// try {
//     let p1 = new Person('Azeem',24);
//     console.log(p1.greet());

//     let p2 = new Person('Tabish', -10); // ❌ This will throw error
//     console.log(p2.greet());

// } catch(err) {
//     console.log("Error:", err.message);
// }

// class BankAccount {
//     constructor(balance = 0) {
       
//         this._balance = balance;
//       }
//       get balance(){
//         return this._balance

//       }
//       set balance(amount){
//         if(amount<0){
//             return 'balance cant be negetive'
//         }
//         this._balance=amount
//       }
//       deposit(amount){
//         if(amount<0){
//             return 'deposit cant be neegtive'
//         }
//         this._balance+=amount
//         return this._balance
//       }
//       withdraw(amount){
//         if(amount<0){
//             return 'withdraw cant be negetive'
//         }
//         this._balance-=amount
//         return this._balance;
//       }
//    }
// let p1=new BankAccount();
// console.log(p1.balance)
// console.log(p1.deposit(100));
// console.log(p1.withdraw(50))



// Task 2
class Shape {
    area(){
        return 0;
    }
}


class Circle extends Shape {
    constructor(r){
        super()
        this.r=r;
    }
    area(r){
        return 180*r*r;
    }
}

class Rectangle extends Shape {
    constructor(l,b){
        super()
        this.l=l;
        this.b=b;
    }
    area(l,b){
        return l*b;
    }
}
let shape=new Shape();
console.log(shape.area());
let circle=new Circle();
console.log(circle.area(2))
let rec=new Rectangle();
console.log(rec.area(2,3))