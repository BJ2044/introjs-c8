// const fruits = [

//     "Bananas",
//     "Berry",
//     "Apple",
//     "Mango",
//     "Guanabana",
// ]
// console.log("My fruits are:", fruits)
// console.log("The first fruit is:", fruits[0])
// console.log("The second fruit is:", fruits[1])

// return the fruit at position X from the array
// function getFruit(index) {
//     return fruits[index];
// }

// console.log(`I have ${fruits.length} fruits in my list`)
// console.log(getFruit(0))
// console.log(getFruit(1))
// console.log(getFruit(2))
// console.log(getFruit(3))


// let playersNumbers = [12,33,44,55,33,99]

// console.log(playersNumbers[0]+ playersNumbers[2])


let students = [
{
   name: "bob",
   age: 24
},
{
   name: "jennifer",
   age: 32
},
{
   name: "lily",
   age: 55
},
    
];

// const firstStudent = students[0]

// console.log(firstStudent.name)
// console.log(students[1])

const {name,age} = students[0]
// console.log(`First student's name is: ${name} and they are ${age} years old`)

const sentence = "Hello Boca Code"
// console.log(sentence.length)
const arrayOfLetters = sentence.split("")
// console.log(arrayOfLetters)
const arrayOfWords = sentence.split(" ")
// console.log(arrayOfWords)
// console.log(`There are ${arrayOfWords.length} number of words`)

let fruits = ["Bananas","Berry","Apple","Mango","Guanabana"];

// console.log(fruits)
// fruits.push("Grapes")
// console.log(fruits)
// const oldFruit = fruits.pop() // Removes from the end (right)
// console.log(oldFruit)
// console.log(fruits)

// const oldFruit2 = fruits.shift() // Removes from the front (first or left)
// console.log(oldFruit2)
// console.log(fruits)

// fruits.unshift("kiwi") // Adds value to the beginning (first or left)
// fruits.unshift("fig")
// console.log(fruits)

// fruits = ["tomatoes",...fruits,"dragon fruit"] // spreadys array into a list
// console.log(fruits)

// console.log(fruits.indexOf("Mango"))

console.log(` my fruits are: ${fruits.join("👍🏾 ")}`)