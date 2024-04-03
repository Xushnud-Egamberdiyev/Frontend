let a = 10;
function letExample() {
    let b = 20;
    console.log("Inside letExample function - a:", a);
    console.log("Inside letExample function - b:", b);
}
console.log("Outside letExample function - a:", a); 
letExample();

const PI = 3.14;
console.log("Value of PI:", PI);
function constExample() {
    console.log("Value of PI inside constExample function:", PI); 
}
constExample();

function varExample() {
    if (true) {
        var x = 30;
        console.log("Inside if block - x:", x); 
    }
    console.log("Outside if block - x:", x); 
}
varExample();
