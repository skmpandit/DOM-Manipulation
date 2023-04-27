

const member = {
    id: 01,
    name: {
        firstName: 'Sonu',
        lastName: 'Kumar',
    }
}

const { id, name: { firstName, lastName }, name} = member;
console.log(id);
console.log(firstName);
console.log(lastName);
console.log(name);



