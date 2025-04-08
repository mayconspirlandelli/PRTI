let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
 })



 

// document.addEventListener('DOMContentLoaded, function () {
//     let multipleCardCarousel = document.querySelector(“#carouselExampleControls”);

//     if (window.matchMedia(“(min-width: 768px)”).matches) {
//       let carousel = new bootstrap.Carousel(multipleCardCarousel, {
//         interval: false, // Disable automatic sliding
//         wrap: false, // Prevent wrapping at the end
//       });

//       let carouselWidth = document.querySelector(“.carousel-inner”).scrollWidth;
//       let cardWidth = document.querySelector(“.carousel-item”).offsetWidth;
//       let scrollPosition = 0;

//       document.querySelector(“#carouselExampleControls .carousel-control-next”).addEventListener(“click”, function () {
//         if (scrollPosition < carouselWidth – cardWidth * 4) {
//           scrollPosition += cardWidth;
//           document.querySelector(“#carouselExampleControls .carousel-inner”).scroll({ left: scrollPosition, behavior: ‘smooth’ });
//         }
//       });

//       document.querySelector(“#carouselExampleControls .carousel-control-prev”).addEventListener(“click”, function () {
//         if (scrollPosition > 0) {
//           scrollPosition -= cardWidth;
//           document.querySelector(“#carouselExampleControls .carousel-inner”).scroll({ left: scrollPosition, behavior: ‘smooth’ });
//         }
//       });
//     } else {
//       multipleCardCarousel.classList.add(“slide”);
//     }
//   });