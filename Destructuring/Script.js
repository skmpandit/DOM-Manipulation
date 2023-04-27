

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

// const { firstName, lastName } = person;

// console.log(firstName);
// console.log(lastName);



            //  We can also rename the variable with new way

const { firstName: fname, lastName: lname } = person;
console.log(fname, lname);


            //  What happens if you desctruct a property that does no exist

const { firstName, lastName, middleName } = person;
console.log(middleName);