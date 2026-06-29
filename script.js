// =============================
// Agro Sustentável - script.js
// =============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🌱 Site Agro Sustentável carregado com sucesso!");

    const btnSaibaMais = document.querySelector(".btn");
    const secaoSobre = document.querySelector(".sobre");

    if (btnSaibaMais && secaoSobre) {
        btnSaibaMais.addEventListener("click", (e) => {
            e.preventDefault();
            secaoSobre.scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    const cards = document.querySelectorAll(".card");

    const observador = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visivel");
                observador.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach((card) => {
        observador.observe(card);
    });

});
