
//  Destructuring Function Arguments 
//  Here's how you destructure the arguments

let displayFullName = (person) => `${person.firstName} ${person.lastName}`

const display = ({firstName, lastName}) => `${firstName} ${lastName}`

const person = {
    firstName: "Sonu",
    lastName: "Kumar",
}

console.log(displayFullName(person));
console.log(display(person));

