// 1
let numbers1 = [10, 20, 30, 40, 50];

numbers1.forEach((a) => {
    console.log(a);
});


// 2
let students1 = ["Venkat", "Rahul", "Kiran", "Arun"];

students1.forEach((a) => {
    console.log("Hello, " + a);
});


// 3
let numbers2 = [10, 20, 30, 40, 50];

let newMap1 = numbers2.map((a) => {
    return a * 2;
});

console.log(newMap1);


// 4
let prices1 = [100, 200, 300, 400];

let newMap2 = prices1.map((a) => {
    return a + 100;
});

console.log(newMap2);


// 5
let numbers3 = [10, 15, 20, 25, 30, 35];

let newFilter1 = numbers3.filter((a) => {
    return a % 2 === 0;
});

console.log(newFilter1);


// 6
let ages = [15, 17, 18, 20, 22, 16];

let newFilter2 = ages.filter((a) => {
    return a >= 18;
});

console.log(newFilter2);


// 7
let numbers4 = [20, 40, 60, 30, 80];

let newFind1 = numbers4.find((a) => {
    return a > 50;
});

console.log(newFind1);


// 8
let employee1 = [
    { eName: "Venkat", salary: 100000 },
    { eName: "Rahul", salary: 80000 },
    { eName: "Kiran", salary: 90000 }
];

let newFind2 = employee1.find((a) => {
    return a.salary > 80000;
});

console.log(newFind2);


// 9
let numbers5 = [10, 20, 30, 40];

let newReduce1 = numbers5.reduce((a, b) => {
    return a + b;
}, 0);

console.log(newReduce1);


// 10
let prices2 = [100, 200, 300, 400];

let newReduce2 = prices2.reduce((a, b) => {
    return a + b;
}, 0);

console.log(newReduce2);


// 11
let numbers6 = [20, 40, 60, 120, 80];

let newSome = numbers6.some((a) => {
    return a > 100;
});

console.log(newSome);


// 12
let marks = [40, 50, 60, 70, 80];

let newEvery = marks.every((a) => {
    return a > 35;
});

console.log(newEvery);


// 13
let numbers7 = [50, 10, 40, 20, 30];

numbers7.sort((a, b) => {
    return a - b;
});

console.log(numbers7);


// 14
let numbers8 = [50, 10, 40, 20, 30];

numbers8.sort((a, b) => {
    return b - a;
});

console.log(numbers8);


// 15
let students2 = ["Venkat", "Rahul", "Kiran", "Arun"];

let result1 = students2.toString();

console.log(result1);


// 16
let names = ["Venkat", "Rahul", "Kiran", "Arun"];

let result2 = names.join(" - ");

console.log(result2);


// 17
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

let result3 = products.join(", ");

console.log(result3);


// 18
let string1 = "JavaScript";

console.log(string1.charAt(4));


// 19
let string2 = "JavaScript";

console.log(string2.charCodeAt(0));


// 20
let string3 = "Hello JavaScript";

console.log(string3.length);


// 21
let string4 = "JavaScript Developer";

let result4 = string4.slice(0, 10);

console.log(result4);


// 22
let string5 = "hello javascript";

console.log(string5.toUpperCase());


// 23
let string6 = "HELLO JAVASCRIPT";

console.log(string6.toLowerCase());


// 24
let string7 = "   Hello JavaScript   ";

console.log(string7.trim());


// 25
let string8 = "Hello JavaScript";

console.log(string8.includes("JavaScript"));
console.log(string8.indexOf("JavaScript"));
console.log(string8.startsWith("Hello"));
console.log(string8.endsWith("JavaScript"));


// 26
let date1 = new Date();

console.log(date1.getFullYear());
console.log(date1.getMonth() + 1);
console.log(date1.getDate());
console.log(date1.getDay());


// 27
let date2 = new Date();

console.log(date2.getHours());
console.log(date2.getMinutes());
console.log(date2.getSeconds());


// 28
let date3 = new Date();

date3.setFullYear(2030);

console.log(date3);


// 29
let date4 = new Date();

date4.setMonth(5);
date4.setDate(15);

console.log(date4);


// 30
let dob = "2003-05-15";

let birthDate = new Date(dob);

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

console.log(days[birthDate.getDay()]);