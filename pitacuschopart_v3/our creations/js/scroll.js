document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
              observer.unobserve(entry.target);
          }
      });
  });

  cards.forEach(card => {
      observer.observe(card);
  });
});