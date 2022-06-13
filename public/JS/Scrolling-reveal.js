gsap.to("body", { opacity: 1 });

gsap.from("header", { duration: 1, y: -250 });

const sectionAnim = document.querySelectorAll("section");

sectionAnim.forEach((element) => {
  gsap.from(element, {
    duration: 1,
    scale: 0.95,
    ease: "sine.out",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play reverse play reverse",
    },
  });
});
