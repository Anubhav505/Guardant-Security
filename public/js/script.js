document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 200); // Delay each by 0.2s
        }
      });
    },
    { threshold: 0.1 }
  );

  hiddenElements.forEach((el) => observer.observe(el));
});
