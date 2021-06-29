// console.log('script.js is running');
// // alert('Hello World!!')
// let js= 'amazing';
// if(js === 'amazing'){
// //   alert('javascript is fun');
// }

// console.log(23+3-5);

// let firstName = 'Srinivas';

// console.log(firstName);

// let PI = 3.14;
// console.log(PI);



// const job = "dev";
// job='tester';
// const age;
// console.log(job);

// // Math operators
// const now = 2021;
// const ageSrini = now - 1987;
// const ageVarshu = now - 2016;

// console.log(ageSrini,ageVarshu);

// console.log(ageSrini * 2, ageSrini/5);

// // 2 ** 3 means 2 to the power of 3 : 2*2*2
// console.log(2**3);

// // Assignment operators
// let x=10+5;
// console.log(x);
// x+=10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// x--;
// console.log(x);


// // Comparison operators
// console.log(ageSrini > ageVarshu);//>,<,>=,<=
// console.log(ageVarshu >= 18);


// // template literals

// const firstName = 'Srinivas';
// const job= 'Software';
// const birthYear = 1987;

// // without template literals
// const srini = "I'am "+ firstName +', ' + (2021-birthYear)+' years old '+ job+' engineer !!';
// console.log(srini);

// // with es6 template literals
// const sriniNew = `I'm ${firstName}, ${2021-birthYear} years old ${job} engineer !!`;
// console.log(sriniNew);

// // another use case is multiline
// console.log('String with \n multiline');

// console.log(`String 
// with 
// Many lines`);

// Type conversion
const year = '1987';
console.log(year);
console.log(Number(year) + 18); //

const name = 'Jonas';
console.log(Number(name));

console.log(String(23),23);

console.log(typeof NaN); //number


// type coercion ==> JS automatically converts the types if operands are
// of different types
// In JS Conversion happens to 3 types number,string, boolean
console.log("I am "+ 23 + 'years old!');
console.log('10'-'3'-'2'+4);
console.log('23' * '2');
console.log('24' / 3);


// truthy & falsy values
// in JS we have 5 falsy values => 0,'',undefined,null,NaN
// console.log('=======>Truthy & falsy<====== ');
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));

// const money = -10;
// if(money){
//     console.log('Dont spend it all');
// }else{
//     console.log('You should get a job');
// }

// let height=0;
// if(height){
//     console.log('Yay, Height is defined');
// }else{
//     console.log('Height is not defined');
// }


// // == vs === loose equality vs strict equality operator
// // == allows type coercion while evaluating the expression
// // Whereas === will not allow type coercion

// console.log('== vs  ===');

// const age = '18';
// if(age===18){
//     console.log('You became an adult');
// }

// const favourite = Number(prompt('Enter your favourite number'));
// console.log(favourite);
// if(favourite === 23){
//     console.log('Cool! 23 is an amazing number');
// }else if(favourite === 7){
//     console.log('7 is also a cool number');
// }else{
//     console.log('Number is not 23 or 7 :P');
// }


// Switch statement
// it uses strict equality to compare the values
console.log('======>Switch statement<======');
const day = 'thursday';

switch(day){
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding Meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Writ code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day');
}

// TODO write the above in if else 

// Conditional(Ternary) operator
// Makes simple to write the conditional statements
const age=17;
const drink = age >= 18? 'Wine ':'Water';
console.log(drink);

let drink2;
if(age>=18){
    drink2 = 'wine';
}else{
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >=18 ? 'Wine':'Water'}`);
