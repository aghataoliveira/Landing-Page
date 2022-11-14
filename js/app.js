// On this function I am trying to change the image on the page using the function mouseover, and changing it back to the previous image using mouseout

var imageTest = document.getElementsByClassName("planner");
image.addEventListener('mouseover', function (imageTest) {
    image.src = images/the-decision.jpg;
})
image.addEventListener('mouseout', function (imageTest) {
    image.src = images/the-plan.jpg;
})



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