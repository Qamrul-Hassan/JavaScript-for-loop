/* 7. Count the number of vowels is a string
Write a for loop to count the number of vowels in a given string. */

let str = "JavaScript is fun";
let vowelsCount = 0;
let vowels = "aeiouAEIOU";
for (let i= 0; i < str.length; i++) {
    if (vowels.includes(str[i])){
        vowelsCount++;
    }
}
console.log("Numbers of vowel is :" + vowelsCount);