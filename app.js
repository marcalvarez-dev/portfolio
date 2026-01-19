const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Cuando entra en pantalla → añadir clase
        entry.target.classList.add("show");
      } else {
        // Cuando sale de pantalla → quitar clase
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 }, // se activa cuando el 20% del elemento está visible
);

// Observar todos los elementos
document.querySelectorAll(".animacion").forEach((el) => {
  observer.observe(el);
});
