let fruits = ["apple", "banana", "mango"];

for(let i=0; i< fruits.length; i++){
    // console.log("this is using for loop "+fruits[i])
}

for(let item of fruits){
    // console.log("this is using for...of loop "+item)
}


let numbers = [1, 2, 3, 4, 5];

numbers.push(6); // Adds 6 to the end of the array
// console.log("Numbers after push: " + numbers); // [1, 2, 3, 4, 5, 6]

numbers.unshift(0); // Adds 0 to the beginning of the array
// console.log("Numbers after unshift: " + numbers); // [0, 1, 2, 3, 4, 5, 6]

numbers.pop()
// console.log("using pop method: " + numbers)

numbers.shift()
// console.log("using shift method: " + numbers)



let numbers2 = [10, 20, 30, 40, 50];

const mapped = numbers2.map((x) => x * 2);
// console.log("using map method: " + mapped)

let ages = [17,12,25, 30,18,8, 35, 40, 45];

let filtered = ages.filter((age) => age >=18);
// console.log(filtered);

let colors = ["red", "green", "blue", "yellow"];

colors.forEach(element => {
    // console.log(element);
});


const users = [
    {name: "A", age: 15},
  {name: "C", age: 18}  ,
  {name: "B", age: 22}
];  

const found = users.find((num) => num.age >= 18);
// console.log("using find method: " + found.age)

let items =["pen", "pencil", "book", "notebook"];

// console.log(`${items.includes("book")}`)

// Add 10% tax to each price using map() 

let prices = [100, 200, 300];

let pricesWithTax = prices.map(price => parseFloat((price * 1.10).toFixed(2)));
// console.log("Prices with tax: " + pricesWithTax); // [110.00, 220.00, 330.00]




// methods that return new array

let houseAnimals = ['cow', 'goat', 'ox', 'buffalo', 'horse', 'donkey',  'dog', 'cat','peacock', 'parrot', 'pigeon', 'hen', 'duck', 'bee']

// let make birds group
// slice 
const birds =  houseAnimals.slice(8)
const myHouseAnimals = houseAnimals.slice(0,4) //['cow', 'goat', 'ox', 'buffalo']

console.log(birds) // [ "peacock", "parrot", "pigeon", "hen", "duck", "bee" ]
// original array still same 
// console.log(houseAnimals)
