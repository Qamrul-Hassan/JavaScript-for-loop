/* Gnerate Fiboncci sequence up to N terms
Write a for loop to generate the first n terms of the fibonacci sequence.*/

let n =10;
let a =0; b = 1;
console.log(a);
console.log(b);

for (let i = 3; i<= n; i++) {
    nextTerm = a+b;
    console.log(nextTerm);
    a = b;
    b= nextTerm;
}