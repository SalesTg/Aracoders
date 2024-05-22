document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("nav");

    menuToggle.addEventListener("click", function () {
        this.classList.toggle("close");
        nav.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Mostrar ou ocultar o botão de volta ao topo
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollToTopBtn").style.display = "block";
        } else {
            document.getElementById("scrollToTopBtn").style.display = "none";
        }
    });

    // Rolar suavemente para o topo quando o botão é clicado
    document.getElementById("scrollToTopBtn").addEventListener("click", function() {
        scrollToTop();
    });
});

// Função para rolar suavemente para o topo
function scrollToTop() {
    const scrollStep = -window.scrollY / (500 / 15); // Ajuste a velocidade aqui (500 é o tempo em milissegundos)
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}