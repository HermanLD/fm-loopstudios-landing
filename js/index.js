const navToggle = document.querySelector("[aria-controls='loopstudio-nav']");
const navMobile = document.querySelector("#loopstudio-nav");
const navIcons = document.querySelectorAll(".nav-icon");

navToggle.addEventListener("click", handleNavToggle);

function handleNavToggle() {
  navIcons.forEach((icon) => icon.classList.toggle("hidden"));

  navMobile.classList.toggle("hidden");
  navMobile.classList.toggle("flex");
}
