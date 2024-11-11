// Menu pop-up functionality
document.getElementById("menu-btn").addEventListener("click", () => {
  document.getElementById("menu-popup").style.display = "block";
});

document.getElementById("close-menu-btn").addEventListener("click", () => {
  document.getElementById("menu-popup").style.display = "none";
});

// Carousel scroll down functionality
document.getElementById("scroll-down").addEventListener("click", () => {
  window.scrollBy(0, window.innerHeight);
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
