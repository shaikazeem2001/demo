// function Vehicle(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
// }

const { error } = require("console");

// // Car inherits from Vehicle
// function Car(brand, speed, fuelType) {
//     Vehicle.call(this, brand, speed);
//     this.fuelType = fuelType;
// }

// // ElectricCar inherits from Car
// function ElectricCar(brand, speed, fuelType, batteryLife) {
//     Car.call(this, brand, speed, fuelType);
//     this.batteryLife = batteryLife;
// }

// // ----- PROTOTYPE INHERITANCE -----
// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// ElectricCar.prototype = Object.create(Car.prototype);
// ElectricCar.prototype.constructor = ElectricCar;

// // ----- METHODS -----
// Vehicle.prototype.info = function () {
//     console.log(`Brand: ${this.brand}, Speed: ${this.speed} km/hr`);
// };

// Car.prototype.drive = function () {
//     console.log(`${this.brand} car is driving using ${this.fuelType}`);
// };

// ElectricCar.prototype.charge = function () {
//     console.log(`Battery remaining: ${this.batteryLife}`);
// };

// // ----- CREATE OBJECT -----
// let myTesla = new ElectricCar("BMW", 200, "Diesel", "20%");

// myTesla.info();
// myTesla.drive();
// myTesla.charge();


// function animal(speak){
//     this.speak=speak;
// }
// function dog(speak,bark){
//     animal.call(this,speak,bark)
//     this.bark=bark
// };
// dog.prototype=Object.create(animal.prototype);
// dog.prototype.constructor=dog;

// dog.prototype.canspeak=function(){
//     return ` animal ${this.speak}, ${this.bark} `
// }
// let x=new dog('speaking','woof');
// console.log(x.canspeak())


// function Person(name, age) {
//     if (age < 0) {
//         console.log("Invalid age! Person not created.");
//         return null; // Prevent object creation
//     }
//     return {
//         name,
//         age,
//         greet() {
//             return `Hello, my name is ${this.name}`;
//         }
//     };
// }

// let x = Person("Azeem", -20); // Invalid → returns null
// let y = Person("Hafeez", 18);

// console.log(x?.greet()); // undefined (safe)
// console.log(y?.greet());  // Hello, my name is Hafeez
