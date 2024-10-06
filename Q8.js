/* Sum of elements in an array
Write a for loop to calculate the sum of all elements in an array. */

let numbers =[1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log (" The numbers in the array: " + sum);