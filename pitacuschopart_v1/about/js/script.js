document.addEventListener("DOMContentLoaded", function() {
  
  //MENU FOR SMALL SCREENS + DATA ATTRIBUTES not toggle //
  const menubutton = document.querySelector('.menu-button');
  const menunav = document.querySelector('.toggle-nav'); 
  menubutton.addEventListener('click', function() {
    if (menunav.getAttribute('data-navstate') === 'open') {
        menunav.setAttribute('data-navstate', 'closed');
    } else {
        menunav.setAttribute('data-navstate', 'open');
    }
  });

  // CLOSE MENU NAV WHENA STICKY NAV LINK IS CLICKED //
const fixednavlinks = document.querySelectorAll('.fixed nav a');
fixednavlinks.forEach(function(el) {
  el.onclick = function() {
     menunav.setAttribute('data-navstate', 'closed');
   };
  });
});


// carousel code 


const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
const progressBar = document.querySelector('.progress-fill');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
let currentIndex = 0;

// Update the carousel based on the current index
function updateCarousel() {
    // Set active item
    carouselItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });

    // Move carousel position
    const offset = -currentIndex * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;

    // Update progress bar width
    progressBar.style.width = `${((currentIndex + 1) / carouselItems.length) * 100}%`;

    // Disable buttons at boundaries
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === carouselItems.length - 1;
}

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', () => {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Initial setup
updateCarousel();




// NEW CAROUSEL TEST
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});