

const developer = {
    firstname: 'Román',
    lastname: 'Santillan',
    age: 27,
    gender: 'Male',
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
}

// Solo estamos copiando la referencia en memoria
// const seniordeveloper = developer

// Esto si copia pero no a nivel profundo, por ejemplo address sigue con la misma referencia
// const seniordeveloper = { ...developer }

// Deep clone
const seniordeveloper = structuredClone(developer)

seniordeveloper.firstname = 'Saulo'
seniordeveloper.lastname = 'Nava'
seniordeveloper.age = 30
seniordeveloper.address.city = 'Aguascalientes'

console.log({ seniordeveloper, developer });
