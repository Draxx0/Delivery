const arrow = document.querySelector(".arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 800) {
    arrow.style.position = "fixed";
    arrow.style.bottom = "5%";
    arrow.style.animation = "arrowFromTop 0.5s forwards";
    arrow.addEventListener("animationend", () => {
      arrow.style.position = "fixed";
      arrow.style.bottom = "5%";
    });
  } else {
    arrow.style.animation = "arrowFromBottom 0.5s forwards";

    arrow.addEventListener("animationend", () => {
      arrow.style.position = "absolute";
    });
  }
});
