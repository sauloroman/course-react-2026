const myArray = [1, 2, 3, 4, true, '', {}]
console.log(myArray);

const numbers: number[] = [10, 20, 30, 40]
numbers.push(100)
// numbers.push('Hola')

for (const number of numbers) {
    console.log(`My number is ${number * 8.99}`);
}

const evenNumbers = [0, 2, 4, 6, 8]

// const evenNumbers2 = evenNumbers
// const evenNumbers2 = [...evenNumbers]
const evenNumbers2 = structuredClone(evenNumbers)

evenNumbers.push(10)

console.log({ evenNumbers, evenNumbers2 });

//! No recomendado
const mixedArray: (string | number)[] = [9, 8, 'Hola']
console.log(mixedArray);
