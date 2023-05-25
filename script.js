const toggleBtn = document.querySelector(".toggle-btn");
const navBar = document.querySelector(".nav-list");

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("clicked");
  navBar.classList.toggle("visible");
});
