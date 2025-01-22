/*
* default param
*/

// old way
function rollDie(numSides) {
    if (numSides === undefined)
        numSides = 6;
    return Math.floor(Math.random() * numSides) + 1;
}
// However the more params it takes the messier it gets.

// new way
function rollDie(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

// However sometimes the declaring the order of default params is crucial
function greet(msg = "Hey there", person) {
    console.log(`${msg}, ${person}~!`);
}

// Hyojun, undefined~!
greet("Hyojun!")

//So have to declare default params after the not default params

/*
*   Spread syntax
*/

Math.max(13, 4, 5, 21, 3, 3, 333333);
const nums = [13, 4, 5, 21, 3, 3, 333333];

// NaN
Math.max(nums);

// have to use spread
Math.max(...nums);


const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

// Containing cats and dogs elements by using Spread
const allPets = [...cats, ...dogs];


const feline = {legs: 4, family: "Felidae"};
const canine = {isFurry: true, family: "Caninae"};

const newFeline = {...feline, color: "black"};

// {legs: 4, family: Caninae, isFurry: true} >> order matters!
const catDog = {...feline, ...canine};

/*
*   Rest
*/

// arguments object
function wrongSum() {
    // can see the arguments object
    console.log(arguments);
    //does not work because arguments object is arrayLike
    return arguments.reduce((total, element) => total + element);
}

// all values will be stored in nums
function sum(...nums) {
    return nums.reduce((total, element) => total + element);
}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold: ${gold}`);
    console.log(`Silver: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}


/*
* Destructuring
*/

// Array
const scores = [1234, 5677, 45435, 65645, 1134];

const [firstScore, secondScore, ...restScores] = scores;

// Object
const user = {
    email: "yoonc01@hotmail.com",
    password: "1q2w3e4r!@",
    city: "gotham",
    born: "2000",
}

const { email, password, city } = user;

// rename
const { born: birthYear } = user;

// default value
const { died = 'N/A' } = user;

/*
* Param Destructuring
*/

function info(user) {
    const {email, password} = user;
    return `${email}, ${password}`;
}

function _info({email, password}) {
    return `${email}, ${password}`;
}