console.log("Welcome to my Personal Portfolio!");


const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigating to: " + link.textContent);
    });
});


const footer = document.querySelector("footer p");

footer.innerHTML = "© " + new Date().getFullYear() +
    " Jhanella Irish Lucas | Personal Portfolio";
