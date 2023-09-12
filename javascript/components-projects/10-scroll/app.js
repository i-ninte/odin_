// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    // alternative method
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) { // Fixed typo here, changed cointainerHeight to containerHeight
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

// ********** fixed navbar ************
window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    // back to top 
    if (scrollHeight > 600) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        // prevent default
        e.preventDefault();
        // navigate to a specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
		 // calculate the height
		 const navHeight= navbar.getBoundingClientRect().height;
		 const containerHeight= linksContainer.getBoundingClientRect().height;
		 
		 const fixedNav= navbar.classList.contains('fixed-nav');
		 
        let position = element.offsetTop - navHeight;
        
        // method to scroll to where we click
        window.scrollTo({
            left: 0,
            top: position,
            
        });
        linksContainer.style.height = 0;
    });
});

