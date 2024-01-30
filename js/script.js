const navbar = document.querySelector("[data-navbar]");

// Show the navbar when the page loads
document.addEventListener("DOMContentLoaded", function () {
  navbar.classList.add("active");
});

// Or show the navbar when the user scrolls to a certain position
window.addEventListener("scroll", function () {
  window.scrollY >= 100 ? navbar.classList.add("active") : navbar.classList.remove("active");
});


