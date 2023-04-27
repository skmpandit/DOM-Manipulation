
//  A Fuction my return an object or null in some situation. for exmple

function getPerson() {
    return null;
}


//  You can avoid this, you can use the or operator (||)
//  to fallback the null object to an empty object

const { firstName, lastName } = getPerson() || {};
console.log(firstName, lastName);