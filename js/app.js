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
const sections = document.querySelectorAll('section');
let list = document.getElementById('navbar__list');


// build the nav
// Build menu 
sections.forEach((section) => {
    //creating the List Element
    let li_nav = document.createElement('li');

    //creating the nav Element
    let a = document.createElement('a');

    //here I am setting the nav inner text using the data-nat
    a.innerText = section.getAttribute('data-nav');
    const boxY = section.getBoundingClientRect();
    let boudingBox = boxY['y'];

    //creating the class for my nav
    a.classList.add('linkMenu');

    //appending the nav to my list
    li_nav.appendChild(a);

    //creating the href to work when I click the nav
    // a.href = `#${section.id}`;
    a.href = '#';

    // Scroll to anchor ID using scrollTO event
    // Scroll to section on link click
    a.addEventListener('click', function () {
        window.scrollTo({
            top: boudingBox,
            behavior: 'smooth',
        });
    });

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
let navButtons = document.querySelectorAll('a');
for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].onclick = function () {
        navButtons.forEach(function (btn) {
            btn.style.color = '';
            btn.style.backgroundColor = '';
        });
        this.style.color = 'blue';
        this.style.backgroundColor = 'pink';

    }
}


// Make sections active


//distinquishing section*

let sectionTitle = document.querySelectorAll('h2');
for (let i = 0; i < sectionTitle.length; i++) {
    sectionTitle[i].onclick = function () {
        sectionTitle.forEach(function (btn) {
            btn.style = '';
        });
        this.style.color = 'blue';
    }
}


//This line tests if all my content is working for this page
console.log('to aqui!');