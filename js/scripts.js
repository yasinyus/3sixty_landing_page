
function initializeSwiperRANDOMID() {
    // Launch SwiperJS  
    const swiper = new Swiper('.swiper-RANDOMID', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        grabCursor: true,
        
        // Responsive breakpoints
        breakpoints: {
        // when window width is >= 320px
        320: {
         slidesPerView: 1,
         spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
         slidesPerView: 1,
         spaceBetween: 30
        },
        // when window width is >= 1200px
        1200: {
         slidesPerView: 3,
         spaceBetween: 40
        }
        }
    });
}

// This file is intentionally blank
// Use this file to add JavaScript to your project