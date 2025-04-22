const btnTopo = document.getElementById("btnTopo");
      
// Mostrar ou esconder o botão ao rolar a página
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnTopo.classList.remove("d-none");
  } else {
    btnTopo.classList.add("d-none");
  }
};

// Ir suavemente para o topo
function irParaTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// <!-- Esse javascript esta funcionando para Carrousel das fotos dos Docentes -->
document.addEventListener("DOMContentLoaded", function () {
    let multipleCardCarousel = document.querySelector("#carouselExampleControls");

    if (window.matchMedia("(min-width: 768px)").matches) {
    let carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: true, // Disable automatic sliding
        wrap: true, // Prevent wrapping at the end
    });

    let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
    let cardWidth = document.querySelector(".carousel-item").offsetWidth;
    let scrollPosition = 0;

    document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: "smooth" });
        }
    });

    document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
        if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: "smooth" });
        }
    });
    } else {
    multipleCardCarousel.classList.add("slide");
    }
});