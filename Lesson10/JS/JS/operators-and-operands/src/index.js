/**
 *
 * @param number1: {Number}
 * @param nunber2: {Number}
 * @returns {Number}
 */
module.exports.getSum = function getSum(number1, number2) {
    if(number1%1!=0 || number2%1!=0){
        var sum=number1+number2
        return parseFloat(sum.toFixed(1))
    }
    return number1 + number2;

};

/**
 *
 * @param name: {String}
 * @param surname: {String}
 * @param age: {Number}
 * @returns {String}
 */
 module.exports.greeting = function greeting (name, surname, age)  {
       return `Hello, my name is ${name} ${surname} and I am ${age} years old.`; 
};

/**
 *
 * @param x: {Number}
 * @returns {Boolean}
 */
module.exports.isSquare = function isSquare(x) {
    if((x**0.5)%1==0) return true;
    else return false;
};


