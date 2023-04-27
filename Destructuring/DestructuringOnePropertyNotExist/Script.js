
// const person = {
//     firstName : "Sonu",
//     lastName : "Kumar",
// }

            //  what happen if you destruct a property that does not exist
// const { firstName, middleName, lastName } = person;
// console.log(middleName);


            //  Setting defaults when object destructuring

const person = {
    firstName: 'Sonu',
    lastName: 'Mahto',
    middleName: "Kumar",
    currentAge: 24,
}

const { firstName, lastName, middleName = '', currentAge: age = 20 } = person;
console.log(middleName);        // middleName doesn't present in person object but we destruct as a empty but if pesent in person object it print the middlename
console.log(age);   // the currentAge has already value 24 but we rename as a age and initialize 20 its print 
                    // 24 because the value is arleady initialize if the value is not initialized than its print 20