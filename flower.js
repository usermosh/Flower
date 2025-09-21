document.addEventListener("DOMContentLoaded", () => {
  const textEl = document.getElementById("typing-text");
  const fullText = textEl.textContent;
  let index = 0;

  textEl.textContent = ""; // clear initial text

  function type() {
    if (index < fullText.length) {
      textEl.textContent += fullText.charAt(index);
      index++;
      setTimeout(type, 50); // typing speed
    } else {
      textEl.style.borderRight = "none"; // remove cursor at end
    }
  }

  type();
});
