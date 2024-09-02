const toggle = document.querySelector(".toggle");
const navlist = document.querySelector(".nav-list");
toggle.addEventListener("click", () => {
  navlist.classList.toggle("active");
});
