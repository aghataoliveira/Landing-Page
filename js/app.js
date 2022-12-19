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
// const section1 = document.getElementById("section1");
// const section2 = document.getElementById("section2");
// const section3 = document.getElementById("section3");
// const section4 = document.getElementById("section4");
let list = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */








/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
// Build menu 
sections.forEach((section) => {
    //creating the List Element
    let li_nav = document.createElement('li');

    //creating the nav Element
    let a = document.createElement('a');

    //here I am setting the nav inner text using the data-nat
    a.innerText = section.getAttribute('data-nav');
    const box = section.getBoundingClientRect();
    let boudingBox = box['y'];

    //creating the class for my nav
    a.classList.add('linkMenu');


    //appending the nav to my list
    li_nav.appendChild(a);

    //creating the href to work when I click the nav
    // a.href = `#${section.id}`;
    a.href = '#';

    // Scroll to anchor ID using scrollTO event
    // Scroll to section on link click
    a.addEventListener("click", function () {
        window.scrollTo({
            top: boudingBox,
            // left: 0,
            behavior: 'smooth',
        });
    });


    //setting CSS properties
    a.style.textDecoration = 'none';
    a.style.padding = '55px';

    // append list
    list.appendChild(li_nav);
});


// Add class 'active' to section when it is near top of viewport

/**
 * End Main Functions
 * Begin Events
 * 
 */
// Trying hightling the active
let buttons = document.querySelectorAll('a');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        buttons.forEach(function (btn) {
            btn.style.color = '';
            btn.style.backgroundColor = '';
        });
        this.style.color = 'blue';
        this.style.backgroundColor = 'pink';
    }
}

// Make sections active


//distinquishing section*

let button = document.querySelectorAll('h2');
for (let i = 0; i < button.length; i++) {
    button[i].onclick = function () {
        button.forEach(function (btn) {
            btn.style = '';
        });
        this.style.color = 'blue';
    }
}






//This line tests if all my content is working for this page
console.log('to aqui!');