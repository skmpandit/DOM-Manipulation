/** 
Assign Remaining  elements to a single variable

You can assign the ramaing elements of an array to a variable
using the spread syntax 
**/

const names = ['Sonu', 'Rajan', 'Rahul', 'jay'];

// Destructuring assignment in arrays
// assigning remaining element to y

/** 
const [x, ...y] = names;
console.log(x)
console.log(y);

y.map((item) => {
    console.log(item);
})

**/

const [x, y, ...z] = names;
console.log(x, y)
console.log(z);

z.forEach((item) => {
    console.log(item);
})