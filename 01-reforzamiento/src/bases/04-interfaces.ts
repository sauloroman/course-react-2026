interface Address {
    postalCode: string;
    city: string;
}

interface DeveloperI {
    firstname: string;
    lastname: string;
    age: number;
    gender: 'Male' | 'Female';
    address?: Address;
}

const roman: DeveloperI = {
    firstname: 'Román',
    lastname: 'Santillan',
    age: 27,
    gender: 'Male',
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
}

const danna: DeveloperI = {
    firstname: "",
    lastname: "",
    age: 0,
    gender: "Female",
}

console.log({ roman });
console.log({ danna });
console.log(typeof roman);
