// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello (x) {
    if (typeof x === "string") {
        return "Hello, " + x + "!";
    } else {
        return "Hello, World!"
    }
}

function isFive (input) {
    return parseFloat(input) === 5;
}

function isEven (input) {
    return parseFloat(input) % 2 === 0;
}