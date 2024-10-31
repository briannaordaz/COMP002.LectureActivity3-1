// example from teacher

// 3 ways to declare a function 

// 1st method to create a function
const printHelloWorld = function() {
    // activities inside the function block
    console.log("Hello");
    console.log("World");
};

printHelloWorld();

// 2nd method to create a function
function printHelloWorld2() {
    console.log("Hello");
    console.log("World 2!");
};

printHelloWorld2();

// 3rd method to create a function (=> arrow notation)
const printHellowWorld3 = () => {
    console.log("printHelloWorld3() called!");
};

printHelloWorld2();

/************************************** */
// function with a parameter

function printHelloWorld4(name) {
    console.log("Hello, " + name)
    // scope note: the variable name no longer exist when the function completes
}

printHelloWorld4("name0");
printHelloWorld4("name1");
printHelloWorld4("name2");
printHelloWorld4("name3");

// function with multiple parameters
function printHelloWorld5(name4, name5, name6, name7, name8){
    console.log('Helloe, ${name4}, ${name5}, ${name6}, ${name7} and ${name8}');
}

printHelloWorld5("Name4", "Name5", "Name6", "Name7", "Name8");