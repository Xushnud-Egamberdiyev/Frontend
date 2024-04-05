let numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(6);
numbers.push(7);

console.log("Array after adding elements:", numbers);

numbers.pop(); 
numbers.shift(); 

console.log("Array after removing elements:", numbers);

console.log("Iterating through the array:");
numbers.forEach((num, index) => {
    console.log(`Element at index ${index}: ${num}`);
});
