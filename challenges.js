function isDrinkingAge(currentYear,birthYear){
    const age = (currentYear - birthYear)
    if (age >= 21) {
        console.log('Shot O Clock!')
    } else {console.log('Tough luck buddy!')}

    
} 

isDrinkingAge(2022,2011)

function calculateAreaOfTriangle(base,height) {
    const area = (base * height) / 2;
    return area;
}

// create an example

const base = 10
const height = 5

calculateAreaOfTriangle(10,5)
