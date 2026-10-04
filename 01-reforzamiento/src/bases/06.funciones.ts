// Function declaration

function great(name: string): string {
    return `Hello ${name} :)`
}

const message = great('Goku');
console.log({ message });

// Function expression

const sum = function (num1: number, num2: number): number {
    if (!num1 || !num2) throw new Error('No valid numbers')
    return num1 + num2
}

console.log(sum(5, 6));

// Arrow Function
const factorial = (num: number): any => {
    if (num === 1 || num === 0) return 1
    return num * factorial(num - 1)
}

console.log(factorial(5));

type user = {
    uid: string,
    username: string
}

function getUser(): user {
    return {
        uid: 'ABC-123',
        username: 'El_Papi23'
    }
}

const getUser2 = (): user => ({
    uid: 'ABX-234',
    username: 'Maravilla_23'
})

const user = getUser()
const user2 = getUser2()

console.log(user);
console.log(user2);

(() => {
    console.log('Hola Mundo');
})()

const myNumbers: number[] = [1, 2, 3, 4, 5]

// Callback function
myNumbers.forEach((num: number) => {
    if (num > 2) {
        console.log('El valor es mayor a 2');
        return
    }

    console.log('El valor es menor a 2');
})

// myNumbers.forEach((value, index, array) => console.log(value, index, array))
myNumbers.forEach(console.log)