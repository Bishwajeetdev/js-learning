// Problem: Create an array containing different types of teas.
let teas =["Green Tea", "black Tea","Oolong Tea", "Herbal Tea", "White Tea"];
// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");
//Problem: Remove "Oolong Tea" from the list of teas.
teas.splice(teas.indexOf("Oolong Tea"), 1);

// Problem: Filter the list to only include teas that are caffeinated.
 let caffeinatedTeas = teas.filter((tea) =>  {
return   tea  !== "Herbal Tea"

}); 

// console.log(caffeinatedTeas)

// Problem: Sort the list of teas in alphabetical order.

teas.sort(() => 1) // Sorts the array in alphabetical order ;
// console.log(teas)
// Problem: Use a for loop to print each type of tea in the array.

for(let i = 0; i < teas.length; i++){
    // console.log(teas[i])
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding"Herbal Tea").

// Problem: Use a for loop to create a new array with all tea names in uppercase.
for(let i = 0; i < teas.length; i++){
   let upperCase = teas[i] = teas[i].toUpperCase();
   console.log(upperCase)

}

// Problem: Use a for loop to find the tea name with the most characters.

// Problem: Use a for loop to reverse the order of teas in the array.