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