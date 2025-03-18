

let message = "Hello, World!";

// task 1, use length to obtain length of a string
console.log(message.length)

// task 2, convert string to upper and then lower case
let upperCaseMessage = message.toUpperCase();
console.log("Uppercase:", upperCaseMessage);

let lowerCaseMessage = message.toLowerCase();
console.log("Lowercase:", lowerCaseMessage);

// task 3. Extracting Substrings

let sentence = "The quick brown fox jumps over the lazy dog";
let newString = sentence.substring(4, 9);
console.log("New String:", newString);

// task 4. Splitting Strings

let splitArray = sentence.split(" ");
console.log("New Array: ", splitArray);