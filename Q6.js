/* 6. Reverse a String
Write a for loop to reverse a given string. */

let str ="hello";
let reverseStr ="";
for (let i = str.length -1; i >=0; i--) {
    reverseStr += str[i];
}
console.log(" Reversed string is: " + reverseStr);