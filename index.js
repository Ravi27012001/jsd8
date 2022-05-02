let name = ["saurav","shyam","sooni"];
console.log ( name );

let name2 =[];
name2[0] = "ram";
name2[1] = "sundar";
name2[2] = "meena";
console.log(name2);




let name3 = new Array ("raju","shyam","dhanshyam");
console.log(name3);


let my = [];
my[0] = "ravikant";
my[1] = "b.tech";
my[2] = "180933";
my[3] = "22";
my[5] = "jharkhand";
// push helps us to add the value to the last position

my.push("ranchi");
console.log(my);

// pop helps us to remove the value from the last position

my.pop();
console.log(my);

// shift will helps to remove from first position and unshift will add at first position.

my.shift();
console.log(my);

my.unshift("ravi");
console.log(my);
console.log(my.length);


let num1 = [1,2,3,4,5,5,5,5];
let num2 = [6,7,8,9];
console.log(num1.indexOf(3));
console.log(num1.lastIndexOf(5));
// concat and join do not change original array
num1.concat(num2);
console.log(num1.concat(num2));
console.log(num1.join (" * ") );

console.log(num1.reverse());

let num3 = [5,4,8,7,3,6,1,2];

// sort modifies the original array
console.log(num3.sort());
console.log(name.sort());
console.log(num3.sort().reverse());

let number = [4,8,77,66,24,2,33,3]
// console.log(number.sort());
// splice also modifies the original arrey
// number.splice(2,1);
// console.log(number);
// number.splice(3,1,22,33,4);
// console.log(number);

// starting index in inclusive and last index is exclusive
console.log(number.slice(2,6));

