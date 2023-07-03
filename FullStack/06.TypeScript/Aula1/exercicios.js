var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Ex 1
function sum(x, y) {
    console.log(x + y);
}
sum(20, 15);
// Ex 2
var array = ["a", "b", "c"];
array.forEach(function (e) { return console.log(e); });
// Ex 3
var number = [2, 5, 6, 8, 4, 12, 3, 1];
function higherNumber() {
    return Math.max.apply(Math, number);
}
console.log(higherNumber());
// Ex 4
var text = "Hello";
function invert() {
    var splitString = text.split("");
    var reverseString = splitString.reverse();
    var joinString = reverseString.join("");
    return joinString;
}
console.log(invert());
// Ex 5
function pairNumbers() {
    return __spreadArray([], number.filter(function (number) { return number % 2 === 0; }), true);
}
console.log(pairNumbers());
// Ex 6
var fruit = ["apple", "banana", "orange", "grape", "kiwi"];
function something() {
    return fruit.filter(function (fruit) { return fruit.length > 5; });
}
console.log(something());
var newPerson = {
    name: "Inês",
    age: 27,
    gender: "female",
};
console.log(newPerson.name);
console.log(newPerson.age);
console.log(newPerson.gender);
// Ex 8
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var array2 = [2, 4, 22, 56, 34, 78];
function newArray() {
    var intersection = array1.filter(function (e) { return array2.includes(e); });
    return intersection;
}
console.log(newArray());
// Ex 9
function generateNumber() {
    var x = Math.floor(Math.random() * 10) + 1;
    return x;
}
var x = generateNumber();
function guessTheNumber() {
    var guessInput = document.querySelector(".guess");
    var myNumber = Number(guessInput.value);
    if (myNumber === x) {
        x = generateNumber();
        alert("Correct");
    }
    else if (myNumber < x) {
        alert("The number is higher");
    }
    else if (myNumber > x) {
        alert("The number is lower");
    }
}
