const item = document.querySelectorAll(".trackItem");

item.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.style.backgroundColor = "rgba(22, 24, 32)";
    el.style.transition = "all 0.3s ease";
    setTimeout(() => {
      el.classList.toggle("color");
    }, 200);
  });
  el.addEventListener("mouseleave", () => {
    el.classList.toggle("color");
    el.style.transition = "all 0.3s ease";
    setTimeout(() => {
      el.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    }, 200);
  });
});
