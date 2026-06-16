// function printChai(){
//     console.log("hello Chai")
// }

// function bringBrush(kitne){
//     console.log(`hanji, aa gya ${kitne} brush`)
// }

// function addTwo(num1,num2){
//     return num1+num2
// }


// printChai()

// bringBrush(4)

// addTwo(1,1)
// console.log(addTwo(1,1))

//  let arr = [1,2,3,4,5];

//  arr.at(-1)

//  console.log( arr.at(-1))


let scores = [10, 20, 30];

// Update the last item to 100
scores[scores.length - 1] = 100;

// console.log(scores); // [10, 20, 100]


let fruits = ["Apple", "Banana", "Cherry"];

fruits.length = 2
// console.log(fruits)



let snacks = ["Chips", "Cookies", "Pretzels"];

for(let i = 0; i < snacks.length; i++){
    // console.log(`checking slots ${i} = ${snacks[i]}`    )

}


let marks = [85, 92, 78, 90, 88];   

for(let i =0 ; i< marks.length; i++){
    marks[i] =marks[i]+5
}
// console.log(marks)


let fruits2 = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

for(let item of fruits2){
    // console.log(`i founs a ${item}`)
}


let colors = ["Red", "Green", "Blue", "Yellow"];

for(let index in colors){
    console.log(`slot number in ${index}`)
    console.log(`slot content is ${colors[index]}`)
}