

const jonas = {
    firstName:'Jonas',
    lastName:'Schmedtmann',
    birthYear:1991,
    job:'teacher',
    friends:['Michael','Peter','Steven'],
    hasDriversLicense:true,

    calcAge: function(){
        return 2037-this.birthYear;
    }
}

console.log(jonas.calcAge());

console.log(jonas['calcAge']());

console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['firstName']);

// In bracket we can put expressions to calculate keys of obj
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between fristName,lastName,age,job');

// console.log(jonas[interestedIn] ? jonas[interestedIn]: 'No data found! Please try again');

// Continue & break statement

const nums = [2,34,56,7,8,9,45,67,55,66];

//print only even
console.log(nums);
// for (let i = 0; i < nums.length; i++) {
//     if(nums[i]%2 !== 0){
//         continue;
//     }
//     console.log(nums[i]);
// }

// print until first odd number occuerence
for (let i = 0; i < nums.length; i++) {
    if(nums[i]%2 !==0){
        break;
    }
    console.log(nums[i]);
}

// looping backwards
for (let i = nums.length-1; i >= 0; i--) {
    console.log(nums[i]);    
}
let rep =1;
while(rep <= 10){
    console.log(`this is ${rep}`);
    rep ++;
}

// reversing a string
let str = "Srinivasulu";
console.log(str);
let reverse = '';
for(let chr of str){
 reverse = chr + reverse;
}

console.log(reverse);

// String.prototype.distance = function (char) {
//     var index = this.indexOf(char);

//     if (index === -1) {
//         alert(char + " does not appear in " + this);
//     } else {
//         alert(char + " is " + (this.length - index) + " characters from the end of the string!");
//     }
// };
// console.log("madam".distance('d'));




 //   return addRecursively(sum,)
// }

// addRecursively(10, 5) //=> 15