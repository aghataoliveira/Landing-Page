//---------------------------------------------------------------CONDITIONALS-----------------------------------------------------------------


// On this function I am trying to change the image on the page using the function mouseover, and changing it back to the previous image using mouseout

// var imageTest = document.getElementsByClassName("planner");
// image.addEventListener('mouseover', function (imageTest) {
//     image.src = images/the-decision.jpg;
// })
// image.addEventListener('mouseout', function (imageTest) {
//     image.src = images/the-plan.jpg;
// })



// function myFunction() {
// alert("I am an alert box!");
// }

// // change the values of `balance`, `checkBalance`, and `isActive` to test your code
// var balance = 10;
// var checkBalance = true;
// var isActive = true;

// your code goes here
// check your balance?? false

// if (checkBalance == false){ 
//     console.log ("Thank you. Have a nice day!");
// } else if (checkBalance == true){ // check your balance?? true
//     if (isActive == true && balance > 0){
//         console.log ("Your balance is $" + balance + ".");
//     } else if (isActive == true && balance == 0){ 
//     console.log ("Your account is empty.");
//     } else if (isActive == true && balance < 0){ 
//         console.log ("Your balance is negative. Please contact bank.");
//         }
// } else{
//     console.log ("Your account is no longer active.");
// }
// // 
// if ((flavor === "vanilla" || "chocolate") && (vessel === "cone" || "bowl") && (toppings === "sprinkles"|| "peanut")){
//     console.log ("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings +".")
// }
// if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")){
//     console.log ("I'd like two scoops of " + flavor + "ice cream in a " + vessel + "with " + toppings + ".")
// }

// // 
// if ((shirtWidth >= 18 || shirtWidth <= 19.99) && shirtLength == 28 && (shirtSleeve = 8.13 || shirtSleeve >= 8.37)){
//     console.log ("P");
// } else if ((shirtWidth >= 20 || shirtWidth <= 21.99) && shirtLength == 29 && (shirtSleeve >= 8.38 || shirtSleeve >= 8.62)){
//     console.log ("M");
// } else if ((shirtWidth >= 22 || shirtWidth <= 23.99) && shirtLength == 30 && (shirtSleeve >= 8.63 || shirtSleeve >= 8.87)){
//     console.log ("L");
// } else if ((shirtWidth >= 24 || shirtWidth <= 25.99) && (shirtLength == 31 || shirtLenght == 32) && (shirtSleeve >= 8.88 || shirtSleeve >= 9.62)){
//     console.log ("XL");
// } else if ((shirtWidth >= 26 || shirtWidth <= 27.99) && shirtLength == 33 && (shirtSleeve >= 9.63 || shirtSleeve >= 10.12)){
//     console.log ("2XL");
// } else if (shirtWidth == 28 && shirtLength == 34 && shirtSleeve == 10.13){
//     console.log ("3XL");
// } else {
//     console.log ("NA");
// }
// // AQUI TA A SOLUCAO CORRETA
// var shirtWidth = 28;
// var shirtLength = 34;
// var shirtSleeve = 10.13;

// // WRITE YOUR CODE HERE
// if ((shirtWidth >= 18 && shirtWidth <= 19.99) && (shirtLength >= 28 && shirtLength <= 28.99) && (shirtSleeve >= 8.13 && shirtSleeve <= 8.379)){
//     console.log ("S");
// } else if ((shirtWidth >= 20 && shirtWidth <= 21.99) && (shirtLength >= 29 && shirtLength <= 29.99) && (shirtSleeve >= 8.38 && shirtSleeve <= 8.629)){
//     console.log ("M");
// } else if ((shirtWidth >= 22 && shirtWidth <= 23.99) && (shirtLength >= 30 && shirtLength <= 30.99) && (shirtSleeve >= 8.63 && shirtSleeve <= 8.879)){
//     console.log ("L");
// } else if ((shirtWidth >= 24 && shirtWidth <= 25.99) && (shirtLength >= 31 && shirtLength <= 32.99) && (shirtSleeve >= 8.88 && shirtSleeve <= 9.629)){
//     console.log ("XL");
// } else if ((shirtWidth >= 26 && shirtWidth <= 27.99) && (shirtLength >= 33 && shirtLength <= 33.99) && (shirtSleeve >= 9.63 && shirtSleeve <= 10.129)){
//     console.log ("2XL");
// } else if (shirtWidth == 28 && shirtLength == 34 && shirtSleeve == 10.13){
//     console.log ("3XL");
// } else {
//     console.log ("NA");
// }


//---------------------------------------------------------------LOOPS-----------------------------------------------------------------



// Quiz about LOOPS
/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
// var x = 1;

// while ( x <= 20) {
//     if ( x % 3 === 0 && x % 5 === 0){
//         console.log ("JuliaJames");
//     } else if(x % 3 === 0) {
//         console.log ("Julia");
//     //If the number is divisible by 5, print "James" 
//     } else if (x % 5 === 0){
//         console.log ("James");
//     //If the number is divisible by 3 and 5, print "JuliaJames"
//     } else  {
//         console.log (x);
//     }
//     x = x + 1;
//     // check divisibility
//     // print Julia, James, or JuliaJames
//     // increment x
// }

// CREATING A NASA COUNTDOWN
// NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)
// NOTE: "T-50 seconds" read as "T-minus 50 seconds".

// Directions:
// Write a while loop that counts down from 60 seconds and:

// If there's a task being completed, it prints out the task
// If there is no task being completed, it prints out the time as T-x seconds
// Use the task and time descriptions described above.

// Your Code:
// Your output should look like the following:

// T-60 seconds
// T-59 seconds
// T-58 seconds
// ...
// T-51 seconds
// Orbiter transfers from ground to internal power
// T-49 seconds
// ...
// T-3 seconds
// T-2 seconds
// T-1 seconds
// Solid rocket booster ignition and liftoff!
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here
// var countdown = 60;
// while (countdown >= 0){
//     if (countdown === 50) {
//         console.log("Orbiter transfers from ground to internal power");
//         countdown = countdown-1;
//     } else if (countdown === 31) {
//         console.log("Ground launch sequencer is go for auto sequence start");
//         countdown = countdown-1;
//     } else if (countdown === 16) {
//         console.log("Activate launch pad sound suppression system");
//         countdown = countdown-1;
//     } else if (countdown === 10) {
//         console.log("Activate main engine hydrogen burnoff system");
//         countdown = countdown-1;
//     } else if (countdown === 6) {
//         console.log("Main engine start");
//         countdown = countdown-1;
//     } else if (countdown === 0) {
//         console.log("Solid rocket booster ignition and liftoff!");
//         countdown = countdown-1;
//     }
//     else{
//         console.log("T-" + countdown + " seconds");
//         countdown = countdown-1;
//     }
// }


//________________________________________________________
/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a nested `for` loop'
 * - Your code should produce the expected output, as explained above
 */

// Write your code here
// let row = 0;
// let seat = 0;
// for (let row = 0; row < 26; row = row + 1){
//     for (let seat = 0; seat < 100; seat = seat + 1){
//         console.log(row + "-" + seat);
//     }
// }



//---------------------------------------------------------------FUNCTION-----------------------------------------------------------------

// function findAverage(x, y) {
//     var answer = (x + y) / 2;
//     return answer;
// }

// var avg = findAverage(5, 9);

//Declare a function called laugh() that returns "hahahahahahahahahaha!". Print the value returned from the laugh() function to the console.
/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here
// function laugh(){
//     var x = "hahahahahahahahahaha!"
//     return x;
// }
// console.log(laugh());
/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 */
// var sound = "";
// function laugh(num){
//     for (var x = 0; x < num; x++){
//         sound = sound + "ha";
//     }
//     sound = sound + "!"
//     return sound;
// }
// console.log(laugh(5));

//Function is PRIMe? This will work only on browsers due to the true false statements in the "return"
// function isPrime(integer) {
//     for(var x = 2; x <integer; x++){
//         if(integer % x === 0){
//             console.log(integer + " is divisible by " + x);
//             return false;
//         }
//     }
//     return true;
// }

// isPrime(1237489277119);



// function inside function 

// function addTen(x) {
//     return x + 10;
//   }
//   function divideByThree(y) {
//     return y / 3;
//   }
//   var result = addTen(2);
//   console.log(divideByThree(result));
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// EXPLANATION // 
//var result = addTen(2); // the result variable will be assigned the value of 12
// divideByThree(result); // passes the value of 12 as an argument into the divideByThree function
//The divideByThree() function will divide the value of 12 by 3 and return 4!

// // Function expression that assigns the function displayFavorite 
// // to the variable favoriteMovie
// var favoriteMovie = function displayFavorite(movieName) {
//     console.log("My favorite movie is " + movieName);
//   };

//   // Function declaration that has two parameters: a function for displaying
//   // a message, along with a name of a movie
//   function movies(messageFunction, name) {
//     messageFunction(name);
//   }

//   // Call the movies function, pass in the favoriteMovie function and name of movie
//   movies(favoriteMovie, "Finding Nemo");

//_________________________________________
// function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
// function movies(messageFunction, name) {
//     messageFunction(name);
//   }

//   // call the movies function, pass in the function and name of movie
//   movies(function displayFavorite(movieName) {
//     console.log("My favorite movie is " + movieName);
//   }, "Finding Nemo");




//---------------------------------------------------------------ARRAY-----------------------------------------------------------------
// var donutBox = [
//     ["glazed", "chocolate glazed", "cinnamon"],
//     ["powdered", "sprinkled", "glazed cruller"],
//     ["chocolate cruller", "Boston creme", "creme de leche"]
// ];

// for (var row = 0; row < donutBox.length; row++) {
//     // here, donutBox[row].length refers to the length of the donut array currently being looped over
//     for (var column = 0; column < donutBox[row].length; column++) {
//         console.log(donutBox[row][column]);
//     }
// }


// var bills = [50.23, 19.12, 34.01,
//     100.11, 12.15, 9.90, 29.11, 12.99,
//     10.00, 99.22, 102.20, 100.10, 6.77, 2.22
// ];

// var totals = bills.map(function (bill) {
//     bill = bill * 0.15 + bill;
//     bill = (bill.toFixed(2));
//     return (Number(bill));
// });
// console.log(totals);

// //---------------------------------------------------------------OBJECTS-----------------------------------------------------------------
// var umbrella = {
//     color: "pink",
//     isOpen: false,
//     open: function () {
//         if (umbrella.isOpen === true) {
//             return "The umbrella is already opened!";
//         } else {
//             umbrella.isOpen = true;
//             return "Julia opens the umbrella!";
//         }
//     }
// };


//---------------------------------------------------------------DESTRUCTURING-----------------------------------------------------------------
// testing destructuring an object
// const luan = {
//     eyes: 'brown',
//     cheeks: 'dimples',
//     skin: 'pale',
//     children: 'Alan'
// }
// const {eyes, cheeks, skin, children} = luan;

// console.log(children);

// // testing destructuring an array

// let principe = ['luan', 'voce', 'eh', 'lindo', 'e', 'eu', 'te', 'amo'];

// let [x, , , , ,y,z,a] = principe;

// console.log(x,y,z,a);







//---------------------------------------------------------------FOR in LOOP-----------------------------------------------------------------
// The for loop
// The for loop is obviously the most common type of loop there is, so this should be a quick refresher.

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < digits.length; i++) {
//   console.log(digits[i]);
// }

//---------------------------------------------------------------FOR OF LOOP-----------------------------------------------------------------

// For...of loop
// The for...of loop is used to loop over any type of data that is iterable.

// You write a for...of loop almost exactly like you would write a for...in loop, except you swap out in with of and you can drop the index.

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const digit of digits) {
//   console.log(digit);
// }


// And you don’t have to worry about adding new properties to objects. The for...of loop will only loop over the values in the object.

// Array.prototype.decimalfy = function() {
//   for (i = 0; i < this.length; i++) {
//     this[i] = this[i].toFixed(2);
//   }
// };

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const digit of digits) {
//   console.log(digit);
// }


// function average(...nums) {
//     let total = 0;
//     let count = 0;
//     if (count >= 1) {
//         for (const num of nums) {
//             total += num;
//             count++;
//         }
//         return total / count;
//     } else {
//         return 0;
//     }
// }

// console.log(average(2, 6));
// console.log(average(2, 3, 3, 5, 7, 10));
// console.log(average(7, 1432, 12, 13, 100));
// console.log(average());

//---------------------------------------------------------------CREATING CONTENT WITH JAVASCRIPT-----------------------------------------------------------------
