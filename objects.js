const person = {
    name: "Brad",
    age: 29,
    address: "1 Boca Coda Drive",
}

// console.log("person is called: ",person.name)
// console.log(`person in called: `,person["name"])

// console.log(`my name is ${person.name} and I'm this old: ${person.age}`)

// const name = person.name
// const age = person.age
const {name,age} = person

console.log(`my name is ${name} and I'm this old: ${age}`)