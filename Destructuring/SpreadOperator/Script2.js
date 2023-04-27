

//  This trick works in object destructuring too!

const person = {
    name: "Sonu Kumar Mahto",
    age: 23,
    gender: "Male",
}


// Destructuring assignment 
// assigning remaining properties to rest

const  { name, ...rest } = person;

console.log(name);
console.log(rest);
console.log(rest.age);
console.log(rest.gender);


// Note : the variable with the spread syntax connot have
// a trailing comm, . you should use this rest elements
// (variable with spread syntax) as the last variable for example

const names = ['Sonu', 'Kumar', 'Mahto'];
// Throws an error
// const [...x, y] = names;       it's gave an arror
