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

const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');
const h2InSections = document.querySelectorAll('section h2');
const theUl = document.getElementById('navbar__list');
const theNav = document.querySelector('.page__header');
const toTopButton = document.getElementById('top');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Remove the active class from every other section that is not in the visual viewport.

function removeActiveClass(nodeList, element, activeClass) {
    for (let j = 0; j < nodeList.length; j++) {
        if (nodeList[j] === element) {
            continue;
        }
        nodeList[j].classList.remove(activeClass);
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build menu

buildNav();
function buildNav() {
    for (let i = 0; i < sections.length; i++) {
        const newLi = document.createElement('li');
        const newA = document.createElement('a');
        newA.innerText = h2InSections[i].innerText;
        newLi.appendChild(newA);
        newA.classList.add('menu__link');
        fragment.appendChild(newLi);

    }
    theUl.appendChild(fragment);

}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Set sections as active when it is near the top of the visual viewport

window.addEventListener('scroll', function () {
    const windowHeight = window.innerHeight;
    const navHeight = theNav.clientHeight;
    const theScrollY = window.scrollY;
    let sectionHeight;
    sections.forEach((section) => {

        sectionHeight = section.getBoundingClientRect().top;

        if ((windowHeight >= sectionHeight + navHeight)) {
            section.classList.add('your-active-class');
            
            // Remove the active class from every other section that is not on the viewport.
            removeActiveClass(sections, section, 'your-active-class');
        }

        // Make (scroll to top button) visable when the user scrolls below the fold of the page.
        if (theScrollY >= windowHeight) {
            toTopButton.style.display = 'block';
        }
        else {
            toTopButton.style.display = 'none';
        }

    });

});



// Scroll to section on link click

theUl.addEventListener('click', function (e) {
    const allAnchors = document.querySelectorAll('a');
    const theTargeAnchor = e.target;
    const theId = (theTargeAnchor.innerText).toLowerCase().replace(' ', '');
    const targetSection = document.getElementById(theId);
    theTargeAnchor.classList.add('active-anchor');

    // Remove the active class from every other section that is not on the viewport.
    removeActiveClass(allAnchors, theTargeAnchor, 'active-anchor');

    window.scrollTo({
        top: targetSection.offsetTop - theNav.clientHeight * 2,
        left: 0,
        behavior: 'smooth'
    });

});

// Make the (scroll to top button) active
toTopButton.addEventListener('click', function () {
    const allAnchors = document.querySelectorAll('a');
    removeActiveClass(allAnchors, allAnchors[0], 'active-anchor');
    allAnchors[0].classList = 'menu__link active-anchor';
    window.scrollTo({
        top: sections[0].offsetTop - theNav.clientHeight * 2,
        left: 0,
        behavior: 'smooth'
    });

});







