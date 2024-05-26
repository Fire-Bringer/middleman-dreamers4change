document.addEventListener('DOMContentLoaded', function() {

  console.log('Hello from site.js')



    // Hamburger Menu

    const hamburger = document.querySelector(".hamburger");
    console.log(hamburger);
    const navMenu = document.querySelector(".nav-menu");
    console.log(navMenu);

    hamburger.addEventListener("click", mobileMenu);

    console.log("Event listener added on click to mobile menu function");

    function mobileMenu() {
    hamburger.classList.add("active");
    console.log(hamburger.classList);
    navMenu.classList.add("active");
    console.log(navMenu.classList);
    }

    const navLink = document.querySelectorAll(".nav-link");
    console.log(navLink);

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    }

    // Close menu when clicking outside of hamburger menu and nav menu
    document.body.addEventListener("click", function(event) {
    const isClickInsideHamburger = hamburger.contains(event.target);
    const isClickInsideNavMenu = navMenu.contains(event.target);
    if (!isClickInsideHamburger && !isClickInsideNavMenu) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
    });

});
