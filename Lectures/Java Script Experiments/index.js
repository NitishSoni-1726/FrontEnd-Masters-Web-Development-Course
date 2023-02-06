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

//using pad start

console.log("".padStart(timesToRepeat, character));

//function

function addition(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function substraction(firstNumber, secondNumber) {
  console.log(firstNumber - secondNumber);
}

function multiplication(firstNumber, secondNumber) {
  console.log(firstNumber * secondNumber);
}

function division(firstNumber, secondNumber) {
  console.log(firstNumber / secondNumber);
}

//calling functions
addition(3, 5);
substraction(5, 1);
multiplication(7, 5);
division(40, 4);

function calculator(whatToDoWithNumbers, number1, number2) {
  if (whatToDoWithNumbers == "+") {
    console.log(number1 + number2);
  } else if (whatToDoWithNumbers == "-") {
    console.log(number1 - number2);
  } else if (whatToDoWithNumbers == "*") {
    console.log(number1 * number2);
  } else if (whatToDoWithNumbers == "/") {
    console.log(number1 / number2);
  } else {
    console.log("Invalid Function");
  }
}

calculator("+", 4, 5);
calculator("-", 7, 4);
calculator("*", 10, 9);
calculator("/", 20, 3);

//objects
//single objects
const person1 = {
  name: "Nitish",
  age: 22,
  city: "Bangalore",
};

const person2 = {
  name: "Jasprit",
  age: 22,
  city: "Hyderabad",
};

const person3 = {
  name: "Porus",
  age: 22,
  city: "Tezpur",
};

console.log(person1);
console.log(person2);
console.log(person3);

//objects inside object
const data = {
  person1: {
    name: "Nitish",
    age: 22,
    city: "Bangalore",
  },
  person2: {
    name: "Jasprit",
    age: 22,
    city: "Hyderabad",
  },
  person3: {
    name: "Porus",
    age: 22,
    city: "Tezpur",
  },
};
console.log(data);

//mixing function and object
const user1 = {
  name: "Nitish",
  age: 22,
  city: "Bangalore",
};
const user2 = {
  name: "Jasprit",
  age: 22,
  city: "Hyderabad",
};
const user3 = {
  name: "Porus",
  age: 22,
  city: "Tezpur",
};
const user4 = {
  name: "Pushp",
  age: 22,
  city: "Patna",
};
const user5 = {
  name: "Dharma",
  age: 22,
  city: "Mysore",
};
const user6 = {
  name: "Kshitij",
  age: 22,
  city: "Lucknow",
};

const cityAndState = {
  Bangalore: "Karnataka",
  Hyderabad: "Andhra Pradesh",
  Tezpur: "Assam",
  Mysore: "Karnataka",
  Patna: "Bihar",
  Lucknow: "Uttar Pradesh",
};

function stateFinder(user) {
  let location = user.city;
  let state = cityAndState[location];
  console.log(
    user.name + ", You Live in " + user.city + " and Your State is " + state
  );
}

stateFinder(user5);
stateFinder(user1);
stateFinder(user4);

//arrays

const persons = [];

persons.push({ name: "Niitish", age: 22 });
persons.push({ name: "Porus", age: 22 });
persons.push({ name: "Jasprit", age: 23 });

console.log(persons);

for (let i = 0; i < persons.length; i++) {
  const person = persons[i];
  console.log(person);
}

const array = [];
function agedata(name, age) {
  if (age < 18 && age > 0) {
    array.push(name + " is Not 18+ Entered age is " + age);
  } else if (age >= 18) {
    array.push(name + " is 18 + Entered age is " + age);
  } else if (age <= 0) {
    array.push("Enter Valid Age Entered age is " + age);
  }
  console.log(array);
}

agedata("porus", 22);
agedata("xyz", 17);
agedata("abc", -1);

let userlogindata = [];

function registration(enteredemail, enteredpassword) {
  if (enteredemail == "") {
    console.log("Enter an Email Address");
  } else if (enteredpassword == "") {
    console.log("Enter a Password");
  } else {
    userlogindata.push({
      useremail: enteredemail,
      userpassword: enteredpassword,
    });
  }
  console.log(userlogindata);
}

function login(enteredemail, enteredpassword) {
  for (let i = 0; i < userlogindata.length; i++) {
    const data = userlogindata[i];
    if (
      enteredemail == data.useremail &&
      enteredpassword == data.userpassword
    ) {
      console.log("Logged in successfully");
    } else {
      console.log("Invalid Email or Password");
    }
  }
}

registration("nitish", "1234");
registration("porus", "890");

login("porus", "890");
