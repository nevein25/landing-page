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

// navBar variables
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');
const h2InSections = document.querySelectorAll('section h2');
const theUl = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Populating li in the navbar
for (let i = 0; i < sections.length; i++){
    const newLi = document.createElement('li');
    newLi.innerText = h2InSections[i].innerText;
    newLi.classList.add('menu__link');
    fragment.appendChild(newLi);

}
theUl.appendChild(fragment);





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

// Scroll to section on link click

// Set sections as active

