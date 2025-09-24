// Add custom JavaScript here
function userScroll() {
  const nvabar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nvabar.classList.add("bg-dark");
      nvabar.classList.add("navbar-sticky");
    } else {
      nvabar.classList.remove("bg-dark");
      nvabar.classList.remove("navbar-sticky");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
