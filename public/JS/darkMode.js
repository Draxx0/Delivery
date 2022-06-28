const body = document.querySelector("body");
const toggleForMode = document.querySelectorAll(".toggle");

toggleForMode.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      toggle.classList.remove("fa-toggle-off");
      toggle.classList.add("fa-toggle-on");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      toggle.classList.remove("fa-toggle-on");
      toggle.classList.add("fa-toggle-off");
    }
  });
});
