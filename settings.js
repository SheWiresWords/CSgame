document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-bubbles");

  if (localStorage.getItem("bubblesOff") === "true") {
    document.body.classList.add("no-bubbles");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("no-bubbles");
    const bubblesDisabled = document.body.classList.contains("no-bubbles");
    localStorage.setItem("bubblesOff", bubblesDisabled);
  });
});
