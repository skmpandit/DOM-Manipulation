

            // Accessing the objects the old way 

let person = {
    firstName: 'Sonu',
    lastName: 'kumar',
}

let personFirstName = person.firstName;
let personLastName = person.lastName;

console.log(personFirstName);
console.log(personLastName);


            //  Accessing the objects the new way

const { firstName, lastName } = person;

console.log(firstName);
console.log(lastName);



            //  