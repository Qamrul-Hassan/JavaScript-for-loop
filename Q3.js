/* # 3. Factorial oa a number
Write a for loop to calculate the factorial of given number n . */

let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(" Factorial of " + n + " is " + factorial);