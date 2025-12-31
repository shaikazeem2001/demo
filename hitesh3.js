// // class x{
// //     constructor(name,grade){
// //         this.name=name;
// //         this.grade=grade
// //     };
// // info(){
// //     return `Name:${this.name}, Grade:${this.grade}`
// // }
// // }
// // let a=new x('azeem','3.5');
// // console.log(a.info())

// // class device{
// //     constructor(device){
// //         this.device=device
// //     }
// //      call(){
// //         return `iam a ${this.device} device`
// //      }

// // }
// // class phone extends device{
// //     constructor(device,msg){
// //         super(device)
// //         this.msg=msg
// //     }
// //      call(){
// //         return `${this.device} from ${this.msg}`
// //      }

// // }
// // let d=new device('apple')
// // console.log(d.call())
// // let c=new phone('lava','calling');
// // console.log(c.call())

// // function Person(name){
// //     this.name = name;
// // }
// // Person.prototype.greet=function() {
    
// //         return `Hello ${this.name}`;   
// // }
// // let p = new Person("Azeem");
// // console.log(p.greet()); 



// //section2



// class animal{
//     makesound(){
//         return 'animal sound'
//     }

// }
// class dog extends animal{
//     makesound(){
//         return 'woof'
//     }
// }
// let a=new animal();
// console.log(a.makesound());
// let d=new dog();
// console.log(d.makesound())

// class laptop{
//     constructor(brand,ram){
//         this.brand=brand;
//         this.ram=ram
//     }
//     info(){
//         return `brand:${this.brand},ram:${this.ram}`
//     }
// }
// class gaminiglap{
//     constructor(gpu){
//         this.gpu=gpu;
//     }
//     info(){
//         return `${this.gpu}`
//     }
// }
// let g=new gaminiglap('430');
// console.log(g.info())


//section3

class user{
constructor(password,char){
    this.char=char;
    this.password=password
}

    #password;

    get info(){
        return '***hidden**'
    }
    set info(char){
        if(char<6){
            return `at least 6 characters`
        }
        this.#password=char
    }
};
let u=new user('noojnboof');
console.log(u.info)