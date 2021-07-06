//QUESTION 1

// Write a function that returns the string "something" joined with a space " " and the given argument a.

// let x = 'something';
// function addToStart (a) {
//     return x.concat(" ", a)
// }
// console.log(addToStart("bob Jane"));

//-------------------------------------------------------//

//QUESTION-2

// write a function
// input: string => "21/06/2019"
// output: string => "2019-06-21"
// [12:18 PM] lets make it more generic and complex.
// input: string => "21/06/2019" or "21.06.2019" or "21 06 2019" etc.
// output: string => "2019-06-21"

//=============================================================//

//Reverse String

// 1st method

// let aString = "codersclan";

// let reversedString = "";

// for (let i = aString.length - 1; i >= 0; i--) {
//     reversedString += aString[i]
// }

// console.log(reversedString);


//2nd method

// reversedString = aString.split("").reverse().join("");

// console.log(reversedString);

// 3rd method 

// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// console.log(reverseString('codersclan'));


//=======================================================================//

// fibonacci

// function fibonacci(num){
//     var a = 1, b = 0, temp;
  
//     while (num >= 0){
//       temp = a;
//       a = a + b;
//       b = temp;
//       num--;
//     }
  
//     return b;
//   }

// console.log(fibonacci(2));

// const number = parseInt(prompt('Enter the number of terms: '));

const number = 10;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}