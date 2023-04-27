
const arr = [1, 2, 5, 6];

            //  Prior to ES6, when you want to assign the elements
            //  of the array to variables, you typically do it like this

const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];
console.log(a, b, c, d);



const arr1 = [1, 2, 4, 5];

            //  But now ES6 introduces the array desctructuring syntax
            //  that provides an alternative way to assign elements
            //  of an array to variables
const [x, y, z, k] = arr1;
console.log(x, y, z, k);



const [e, f, g, h, i] = [1, 2, 3, 4, 5];
console.log(e, f, g, h, i);


//      Skipping items when array Destructuring
const arrValue = ["sonu", "kumar", "mahto"];
const [o,,s] = arrValue;    // this is skepping middle value

console.log(o, s);
