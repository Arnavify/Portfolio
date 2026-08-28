// Theme toggle -------------------------------------------------------
(function () {
  const stored = localStorage.getItem("theme");
  const theme = stored || "dark";
  document.documentElement.setAttribute("data-theme", theme);

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  });
})();

// Mobile nav toggle -----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
    mainNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => mainNav.classList.remove("open"))
    );
  }

  // Contact form character counter ---------------------------------------
  const message = document.getElementById("message");
  const count = document.getElementById("char-count");
  if (message && count) {
    const max = message.getAttribute("maxlength") || 4000;
    const update = () => (count.textContent = `${message.value.length}/${max}`);
    message.addEventListener("input", update);
    update();
  }

  // Contact form submit (placeholder — wire up to your own backend/email service)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "mailto:biz.arnavify@gmail.com?subject=" +
        encodeURIComponent(document.getElementById("subject")?.value || "Portfolio inquiry") +
        "&body=" + encodeURIComponent(document.getElementById("message")?.value || "");
    });
  }
});
