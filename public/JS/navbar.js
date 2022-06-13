const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1) {
    header.classList.add("scroll-header");
  }

  if (window.scrollY == 0) {
    header.classList.remove("scroll-header");
  }
});

const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  if (toggle.classList.contains("fa-toggle-off")) {
    toggle.classList.add("fa-toggle-on");
    toggle.classList.remove("fa-toggle-off");
  } else {
    toggle.classList.remove("fa-toggle-on");
    toggle.classList.add("fa-toggle-off");
  }
});
