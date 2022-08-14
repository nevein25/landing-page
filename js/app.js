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
const theNav = document.querySelector('.page__header');

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


for (let i = 0; i < sections.length; i++){
    const newLi = document.createElement('li');
    const newA = document.createElement('a');
    newA.innerText = h2InSections[i].innerText;
    newLi.appendChild(newA);
    newA.classList.add('menu__link');
    fragment.appendChild(newLi);

}
theUl.appendChild(fragment);

// Add class 'active' to section when near top of viewport

window.addEventListener('scroll',function(){
    // Number of pixels that the document is currently scrolled verticall
    const windowTop = window.scrollY;
    const navHeight = theNav.clientHeight;
    let sectionTop;
    sections.forEach((section)=>{
        // Top position (in pixels) relative to the parent.
        sectionTop = section.offsetTop;
        sectionHeight = section.clientHeight;

        if((Math.round(windowTop) + navHeight >= sectionTop) && (Math.round(windowTop) <= sectionTop + sectionHeight)){
            section.classList.add('your-active-class');

            // Remove the active class from every other section that is not on the viewport.
            for (let j = 0; j < sections.length ; j++){
                if (sections[j] === section){
                    continue;
                }
                sections[j].classList.remove('your-active-class');
            }
        }

    });

        
   
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

