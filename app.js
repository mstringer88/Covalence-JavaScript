let myName = "Michael Stringer";

console.log(myName);

const Number_Of_States = 50;

console.log(Number_Of_States);

var sum = (5 + 4);

console.log(sum);

var name1 = "Luke";

if (name1.charCodeAt(0) == 76) {
    console.log("Back of the line!")
} else {
    console.log("Next!")
};
// If var name is an "L" then the statement is true and "Back of the Line!" will display. Otherwise the statement is false and "Next" will appear.

function sayHello() {
    console.log("Hello World!")
};

sayHello();

function checkAge(name, age) {
    if (age >= 21) {
    } else {
        console.log("Sorry " + name + ", you aren't old enough to view this page!")
    }
};

checkAge("John", 17);
checkAge("James", 18);
checkAge("Abby", 27);
checkAge("Charles", 21);

var vegetablesFavs = ["broccoli", "carrots", "asparagus", "peas", "corn"];

for (var i = 0; i < vegetablesFavs.length; i++) {
    console.log(vegetablesFavs[i]);
};

//Ask Luke about this!!//
var random = [{ name: "Adam", age: 23 }, { name: "Mark", age: 15 }, { name: "Stacy", age: 25 }, { name: "John", age: 45 }, { name: "Amy", age: 18 }];

for (var i = 0; i < 5; i++) {

    checkAge(random[i].name, random[i].age);

}

function getLength(hello) {
    return hello.length;
};

getLength("hello world");

//Made up number to write/check code. need to figure out how to write previous lines.//
var stringLength = getLength("helloworld")


if (stringLength % 2 ===0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
};

