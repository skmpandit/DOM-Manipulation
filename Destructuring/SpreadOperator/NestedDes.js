

const member = {
    id: 01,
    name: {
        firstName: 'Sonu',
        lastName: 'Kumar',
    }
}

// Heres how to desctructuring it..
const { id, name: { firstName, lastName }} = member;
console.log(id);
console.log(firstName);
console.log(lastName);
console.log(name);