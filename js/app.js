/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
// Get the elements first
// const navBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

let list = document.getElementById('navbar__list');






/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
sections.forEach((item) => {
    //creating the List Element
    let li = document.createElement('li');
    //creating the nav Element
    let a = document.createElement('a');
    //here I am setting the nav inner text using the data-nat
    a.innerText = item.getAttribute('data-nav');
    //creating the class for my nav
    a.classList.add('linkMenu');
    a.addEventListener('click', function () {
        this.style.color = 'red';
        console.log(this+ ' The heading was clicked!');
    });
    //appending the nav to my list
    li.appendChild(a);
    //creating the href to work when I click the nav
    a.href = `#${item.id}`;
    //setting CSS properties
    a.style.textDecoration = 'none';
    a.style.padding = '55px';
    // append list
    list.appendChild(li);
});
//adding click event listener
// let clicked = document.getElementsByClassName('landing__container');
// console.log(clicked);



//distinquishing
sections.forEach((item) => {
});

//FAZER - CLICAR NA SECTION E VER NO CONSOLE.LOG A SECAO CLICADA




// Scroll to section on link click
// const section3 = document.getElementById("section3");
// console.log(section3.innerText);



//function


//print the first element


// Set sections as active



//This line tests if all my content is working for this page
console.log('to aqui!');