
// Typing Effect
const texts = ["high-scale backend systems", "distributed architectures", "enterprise analytics platforms"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) { count = 0; }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById("typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 70);
  }
})();

// Scroll Reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Cursor Effect
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
