/* #5. Find the maximum number in array
Write a for loop to find the maximum number in an array */

let numbers= [5,12, 8, 130, 44];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max){
        max = numbers[i];
    }
}
console.log(" The maximum number is: " + max);