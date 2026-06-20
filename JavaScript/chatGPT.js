// LEVEL 1 (Basics – must be strong)
// 1.
let arr1 = [1, 2, 3, 4];
// 👉 Print all elements using for
for(let i =0; i < arr1.length; i++){
    // console.log(arr1[i])
}


// 2.
// 👉 Print all elements using for...of
for(num of arr1){
    // console.log(num)
}


// 3.
// 👉 Find the sum of all elements

let sum = arr1.reduce((acc,curr) => (acc + curr),0)
// console.log(sum)

// 4.
// 👉 Find the largest number

let numbers= [5,45,88,78,100,124,55,44,12,99]

let maxNumber = Math.max(...numbers)

// console.log(maxNumber)



// 5.
// 👉 Find the smallest number
let minNumber = Math.min(...numbers)

// console.log(minNumber)

// 6.
// 👉 Count how many elements are even

let evenNumbers =numbers.filter((item) => item%2 === 0)
// console.log(evenNumbers)

// 7.
// 👉 Reverse the array (without using .reverse())

let reversed = []
for(let i= numbers.length -1;i>=0;i--){
    reversed.push(numbers[i])
}
// console.log(reversed)
// 8.
// 👉 Create a new array with all elements multiplied by 2

const multiNumber = numbers.map((num)=> num *2)
// console.log(multiNumber)


// 🟡 LEVEL 2 (Array Methods)
// 9. map()
// let nums = [1, 2, 3];
// 👉 Convert to squares → [1, 4, 9]

// const squares = nums.map((num)=> num*num)

// console.log(squares)

// 10. filter()
// let nums = [10, 25, 30, 5];
// 👉 Get numbers greater than 20
// const filterNums= nums.filter((num)=> num>=20)
// console.log(filterNums)

// 11. forEach()
// let names = ["Ram", "Shyam"];
// // 👉 Print: "Hello Ram", "Hello Shyam"

// names.forEach(element => {
//     console.log(`Hello ${element}, Hello ${element}`)
    
// });



// 12. includes()
// 👉 Check if "apple" exists in:
// ["banana", "apple", "mango"]
let fruits =["banana", "apple", "mango"]

let fruitCheck = fruits.includes("apple")
// console.log(fruitCheck)

// 13. indexOf()
// 👉 Find index of "mango"

let indexofFruits = fruits.indexOf("mango")
// console.log(indexofFruits)

// 14. find()
let nums = [5, 12, 8, 20];
// 👉 Find first number > 10

let findNums = nums.find((num) => num>10)
// console.log(findNums)

// 15. some()
// 👉 Check if any number is even

let someNums = nums.some((num)=>num%2==0)
console.log(someNums)

// 16. every()
// 👉 Check if all numbers are positive

let everuNums =nums.every((num) => num>0)
console.log(everuNums)


// 🟠 LEVEL 3 (Real Logic)
// 17.
// 👉 Remove duplicates:
// [1, 2, 2, 3, 4, 4]

// 18.
// 👉 Count how many times each element appears:
// ["a", "b", "a", "c", "b", "a"]

// 19.
// 👉 Find second largest number

// 20.
// 👉 Merge two arrays without duplicates

// 21.
// 👉 Flatten:
// [1, [2, 3], [4, 5]]
// 👉 Output: [1, 2, 3, 4, 5]


// 🔴 LEVEL 4 (Interview Level 🔥)
// 22.
// let users = [  {name: "A", age: 17},  {name: "B", age: 22},  {name: "C", age: 19}];
// 👉 Get names of users with age ≥ 18

// 23.
// 👉 Sort numbers ascending without using .sort()

// 24.
// 👉 Find missing number:
// [1, 2, 4, 5]
// 👉 Missing = 3

// 25.
// 👉 Group by even & odd:
// [1,2,3,4,5]
// 👉 Output:
// {  even: [2,4],  odd: [1,3,5]}
