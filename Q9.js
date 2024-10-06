/* 9. Print all pime numbers between 1 and 50
Write a for loop to print all prime numbers between 1 and 50. */

for (let i = 2; i <= 50; i++) {
    let isPrime = true;
for (let j =2; j <i; j++) {
    if(i % j === 0){
        isPrime = false;
        break;
    }
}
if (isPrime){
    console.log(i);
}
}