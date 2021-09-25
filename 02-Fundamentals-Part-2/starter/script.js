'use strict'
// enables strict mode
// forbids doing certain things
// throw some errors in console without strict JS wont
//

//const interface = 'Audio';



// Functions - essential concept in JS
// Piece of code block which performs particular task / operation 
//  we can reuse over and over
// DRY ==> Dont Repeat yourself
//Parameter is the place holder in the function whereas argument is 
// the actual value that is passed 

// function definition
// function logger(){
//     //function body
//     console.log('Hello, i am inside function body');
// }

// // calling /invoking/running a function
// logger();
// logger();

// function fruitProcessor(apples,oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(4,0);
// console.log(appleJuice);

// console.log(fruitProcessor(0,5));


// Function declaration 
// will be hoisted
// console.log(1991, calcAge1(1991)); // calling function before declaring


// function calcAge1(birthYear){
//     return 2037-birthYear;
// }

// const age1 = calcAge1(1987);
// console.log(age1);




// // Function expression - only variables are hoisted
// //throws error if we call before declarations
// //calcAge2();

// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1988);

// console.log(age2);

// Arrow Functions
// no need of function keyword, function body in its simpler form
// Implicit return if only return is in function body

// simpler form of arrow func
// const calcAge3 = birthYear => 2037 - birthYear;

// console.log(calcAge3(1999));

// // complex form

// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age = calcAge3(birthYear);
//     const yearsToretire = 65 - age;
//     return `${firstName} retires in ${yearsToretire} years`;
// }


// console.log(yearsUntilRetirement(1987,'Srinivas'));
// console.log(yearsUntilRetirement(1997,'Vasu'));

// Arrays
console.log('Arrays');

const friends = ['Vasu','Sree','James','Akash','23'];
console.log(friends);
// console.log(friends.length);

// // 2nd syntax
// const years = new Array(true,'1987',1991,1992,2008,2028);
// console.log(years);
// console.log(years.length);

// // console.log([1]+[3,4]);
// // console.log([1]-[3,4]);
// // console.log(1+[3,4]);

// // accessing
// console.log(friends[0]); //1 st elem
// console.log(friends[2]);//3rd elem


// const calcAge3 = birthYear => 2037 - birthYear;

// const ages = years.map(year => calcAge3(year));
// console.log(ages);

// Basic Array methods

// Add elemnts to array
const newLength = friends.push('arun'); //adds elemnt at the end and returns new length
// console.log(newLength);


friends.unshift('Ram'); //adds elem at begining of the array and returns new length
console.log(friends);


// Remove elements
const popped = friends.pop(); //Removes element from end and returns the removed value

console.log(popped);

const popedElem = friends.shift();// removes elem from begining of the array and returns same
console.log(popedElem);



// indexOf('elem')
//searches the given elem and returns index . uses strict equality and case sensitive
// uses strict equality for comparison
console.log(friends.indexOf(23)); 

// includes('elem) => returns true if given elem is present in the array 
// uses strict equality for comparison
console.log(friends.includes('Vasu'));

console.log(friends.includes('23')); // its uses 
