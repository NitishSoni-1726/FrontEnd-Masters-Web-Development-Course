//Numbers, Strings and Boolean
const firstName = "Nitish";
const lastName = "Soni";
console.log("Hello, I am " + firstName + " " + lastName);
console.log(`Hello, I am ${firstName} ${lastName}`);

const age = 22;
console.log(`I am ${age} years old.`);

const learningProgramming = true;
console.log(
  `Am I learning how to code in Java Script : ${learningProgramming}`
);

//Control Flow Statements
const lovesCricket = true;
if (lovesCricket == true) {
  console.log(`I love Cricket.`);
} else {
  console.log(`I don't love Cricket.`);
}

if (age <= 18) {
  console.log(`I am not 18 Plus`);
} else {
  console.log(`I am 18+, M  y age is ${age}`);
}

//loops
//while loop

let number = 0;
while (number < 10) {
  console.log(number++);
}

//for loop
let anotherNumber = 0;
for (let i = 0; i < 10; i++) {
  console.log(anotherNumber++);
}

//loop Excersise
// to repeat in same line
let character = "*";
let timesToRepeat = 5;
let repeated = " ";

for (let i = 0; i < timesToRepeat; i++) {
  repeated = repeated + character;
}
console.log(repeated);

//to repeat in increasing order in different line
let newCharacter = "A";
let newRepeated = "";
for (let i = 0; i < timesToRepeat; i++) {
  newRepeated = newRepeated + " " + newCharacter;
  console.log(newRepeated);
}
