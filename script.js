// 1. Write a function that outputs a greeting. It should take an argument “name” and greet the individual.
// * Call your function using console.log(myFunction(“some name”));
function printHi() {
    console.log("Hello");
    console.log("Brianna!");
}

printHi();



// 2. Write a function that gives the approximate circumference of a circle given the diameter.
function helloWorld() {
    const i = 50
    return i * 5  // 5 = diameter
}

console.log(helloWorld(5));

// 3. Write one function that calls another function.
// * Inside of the first function, insert a console.log(...) statement.
// * Next, insert the call to the second function.
// * The second function should have its own console.log(...) statement inside.
// * Finally, after the call to the second function, insert another console.log(...) statement.
function gamesRoblox() {
    console.log("1Roblox!");
}

function gamesMinecraft() {
    console.log("2Minecraft!");

    gamesRoblox();

    console.log("3Video Games!")
}

gamesMinecraft();
// 4. Call your first function in your program and observe the output. What happens in what order and why?
gamesRoblox();

// 5. Write a function that causes the stack to overflow.
function idk() {
    console.log("Heyy!");
    idk();
};

idk();