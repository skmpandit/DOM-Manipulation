
const person = {
    firstName : "Sonu",
    lastName : "Kumar",
}

            //  what happen if you destruct a property that does not exist
const { firstName, middleName, lastName } = person;
console.log(middleName);