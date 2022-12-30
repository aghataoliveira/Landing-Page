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
    const boudingBox = boxY['y'];

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

//getting section based on the text displayed in the Nav
function getSectionFromText(sections, text){
    for (let i = 0; i < sections.length; i++) {
        let sectionText = sections[i].getAttribute('data-nav')
        if (sectionText  == text)
            return sections[i];
    }
}


// Trying hightling the active
let navButtons = document.querySelectorAll('a');

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].onclick = function () {
        //getting rid of the style if it is applied to another nav
        cleanStyleButtons();
        cleanStyleSections();
        this.style.color = 'blue';
        this.style.backgroundColor = 'pink';
        //linking section related
        const sectionRelated = getSectionFromText(sections, this.innerText);
        // Make sections active
        sectionRelated.style.backgroundColor = 'pink';
    }
}

//function to clean previous nav Styles if applied
function cleanStyleButtons(){
    navButtons.forEach(function (btn) {
        btn.style.color = '';
        btn.style.backgroundColor = '';
    });
}

//function to clean previous section Styles if applied
function cleanStyleSections(){
    sections.forEach(function (item) {
        item.style.color = '';
        item.style.backgroundColor = '';
    });
}




//This line tests if all my content is working for this page
console.log('to aqui!');