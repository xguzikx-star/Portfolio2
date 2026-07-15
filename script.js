document.querySelector("#year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("reveal");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".project, .skill-item, .experience-list article, .stats div")
  .forEach((el) => observer.observe(el));
