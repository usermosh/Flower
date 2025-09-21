document.addEventListener("DOMContentLoaded", () => {
  const textEl = document.getElementById("typing-text");
  // read the full text as it appears in HTML (preserves newlines)
  const fullText = textEl.textContent.trim();
  let index = 0;

  textEl.textContent = ""; // clear before typing
  textEl.style.borderRight = "2px solid #f5f5f5";

  function type() {
    if (index < fullText.length) {
      // append next character
      textEl.textContent += fullText.charAt(index);
      index++;
      // speed: 20–60ms feels good on phones; using 45ms
      setTimeout(type, 45);
      // ensure element is visible while typing (if page is long)
      // scrollIntoView only if the element is out of view
      const rect = textEl.getBoundingClientRect();
      if (rect.top < 0 || rect.bottom > window.innerHeight) {
        // subtle scroll so the user actually sees the typing
        textEl.scrollIntoView({behavior: "smooth", block: "center"});
      }
    } else {
      // finished
      textEl.style.borderRight = "none";
    }
  }

  type();
});
