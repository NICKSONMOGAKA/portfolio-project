document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  const contactSubmitBtn = document.getElementById("contact-submit");
  contactSubmitBtn.addEventListener("click", () => {
    alert("Thank you for getting in touch!");
  });
});
