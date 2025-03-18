// task 1 - adding and removing elements

let fruits = ['apple', 'banana', 'orange'];

function addElement(element) {
    fruits.push(element);
}

function removeElement() {
    fruits.pop();
}


addElement('grapefruit');
addElement('blueberry');
console.log(fruits);
removeElement();
console.log(fruits);

// task 2 - sorting arrays 

let numbers = [3, 1, 5, 2, 4];
numbers.sort();
console.log(numbers);

// task 3 - use map to double each number

// let number = [3, 1, 5, 2, 4];
let doubles = numbers.map(num => num * 2);
console.log(doubles);

// - use filter to filter our even numbers from array

let odds = numbers.filter(num => num % 2 !== 0)
console.log(odds)

// - use reduce method to calculate the sum of all numbers in the array

let total = numbers.reduce((acc,curr) => acc + curr, 0);
console.log(total);