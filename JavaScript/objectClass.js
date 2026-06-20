// class 1 {
//     constructor(fName, lName){
//         this.fName =fName;
//         this.lName = lName;
//     }
//     getFullName =function (){
//         return`${this.fName} ${this.lName}`;
//     }
// }

// const p1 = new person ("Piyush","Garg")
// const p2 = new person ("Vishal","Singh")

// console.log(p1.getFullName());
// console.log(p2.getFullName());




// let obj1 ={
// fName:"piyush",
// lName:"",
// getFullName: function (){
//     if(this.lName !== undefined)
//         return this.fName ;
// },
// }

// let obj2 ={
//     fName: "Anirudh",
//     lName: "Jwala"
// }

// obj2.__proto__ = obj1
// obj1.__proto__ = null


// console.log(obj1)

// const a ={
//     x:20
// }
// const b = {
//     y:25
// }

// // Object.setPrototypeOf(b,a)
// b.__proto__= a
// a.__proto__= null

// console.log(b.x)


function person (name,age){
this.name = name;
this.age= age;
}

const p1 = new person("reshab",30)
const p2 = new person("Vishal",20)

console.log(p1)

class person1{
    constructor(fname,lname){
this.fname=fname;
this.lname=lname;
    }


}

const p3 =new person1 ("chandan","deo")
console.log(p3)