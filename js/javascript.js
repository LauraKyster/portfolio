function toggleMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.style.display === "none"
    ? (mobileMenu.style.display = "flex")
    : (mobileMenu.style.display = "none");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#alien_sprite").classList.add("pulse");
});
