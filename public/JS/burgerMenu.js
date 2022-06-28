const burgerMenuIcon = document.querySelector(".burger-icon");
const burgerMenuEl = document.querySelector(".menu");

burgerMenuIcon.addEventListener("click", () => {
  const header = document.querySelector("header");
  console.log(header);
  burgerMenuEl.classList.toggle("active");

  if (burgerMenuIcon.classList.contains("bx-grid-alt")) {
    burgerMenuIcon.classList.remove("bx-grid-alt");
    burgerMenuIcon.classList.add("bx-x-circle");
    header.style.position = "auto";
  } else {
    burgerMenuIcon.classList.remove("bx-x-circle");
    burgerMenuIcon.classList.add("bx-grid-alt");
    header.style.position = "fixed";
  }
});
