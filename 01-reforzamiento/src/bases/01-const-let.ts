const firstName: string = 'Román'
const lastName: string = 'Santillán'

console.log({ firstName, lastName });

// firstName = 10; Ts error

const containsLetterH: boolean = lastName.includes('l')
console.log('Lastname Inclues "l": ', containsLetterH);

let diceValue = 5
diceValue = 3

console.log({ diceValue });