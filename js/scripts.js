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

    if (window.matchMedia("(min-width: 320px)").matches) {
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


<script>
  function mostrarTexto() {
    document.getElementById('texto-resumido').style.display = 'none';
    document.getElementById('texto-completo-expandido').style.display = 'block';
  }

  function esconderTexto() {
    document.getElementById('texto-resumido').style.display = 'block';
    document.getElementById('texto-completo-expandido').style.display = 'none';
  }
</script>


function typeWriter() {
  if (index < fullText.length) {
    el.innerHTML += fullText.charAt(index);
    index++;

    // Faz scroll automático em telas pequenas
    if (window.innerWidth <= 768) {
      el.scrollTop = el.scrollHeight;
    }

    setTimeout(typeWriter, 20);
  } else {
    el.style.borderRight = "none";
  }
}
