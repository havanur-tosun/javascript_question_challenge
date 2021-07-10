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


// let correctEntry = true;
// while (correctEntry) {
//     var input = window.prompt("Enter your date using DD/MM/YYYY, DD.MM.YYYY or DD MM YYYY format to organize: ")
    
//     if (input.length == 10);
//     correctEntry = false;
// }
// let output  = function (inpt) {
//     let char = /[ ./]/g;
//     inpt = inpt.replace(char, " ").split(' ');
//     console.log(inpt);
//     inpt = [inpt[2], inpt[1], inpt[0]].join('-');
//     return inpt;
// }
// console.log(output(input));
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

// const number = 10;
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

//==============================================================//

// get an input from user (use prompt) until you get a valid number between 0 and 100.


// let entry = true;

// while (entry) {
//     let input = prompt("Please enter a number between 0 and 100: ");
//     let num = parseInt(input)
//     if(!isNaN(input) && num > 0 && num <= 100){
//         console.log('It is a valid number');
//         break;
//     }else{
//         console.log('Please enter valid number');
//     }
// }


// while (true){
//     let input = prompt("Please enter a number between 0 and 100")
//     let num = parseInt(input)
//     if(!isNaN(input) && num > 0 && num <= 100){
//         console.log('It is a valid number');
//         break;
//     }else{
//         console.log('Please enter valid number');
//     }
// }

// there are two other methods to convert strings to numbers:
// parseInt(string, 10) ==> second parametre is radix which is base 10 in our condition
// parseFloat("3.14randomstuff") returns 3.14 


// ***********next step (we will do this together sooner): use text input in html and warn user if the number is not valid, by changing its border color to red. until you get a valid number.

//==================================================//


// const names = ['John', 'James', 'Walter', 'Edward'];
// let randomElement = names[Math.floor(Math.random()*names.length)];
// console.log(randomElement)


// const starWarsCharachterList = ["Darth", "Kenobi", "Sith", "Mandalorian", "C-3PO", "Anakin", "Han", "Yoda"];
// let lengthList = starWarsCharachterList.length;
// let dice = Math.floor(Math.random() * lengthList);
// let randomName = starWarsCharachterList[dice];
// console.log(randomName);
