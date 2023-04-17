
window.addEventListener("scroll",fade );
window.addEventListener("load",fade );


function fade() {
  const fadeIns = document.querySelectorAll('.fade-in');

  const options = {
    rootMargin: '0px',
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, options);
  
  fadeIns.forEach(fadeIn => {
    observer.observe(fadeIn);
  });
}


let typed = new Typed('#text', {
strings: ['PORTFOLIO'],
typeSpeed: 20,
showCursor:false
});



const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 0,
  direction: "horizontal",
  loop: true,
  speed:600,
  breakpoints: {
    // when window width is >= 320px
    320: {
     slidesPerView: 1,
     spaceBetween: 0
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 0
     },
    900: {
      slidesPerView: 2,
      spaceBetween: 0
     }
    
  },
  // If you need pagination
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  },

  // Navigation arrows
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

