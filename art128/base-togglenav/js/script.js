document.addEventListener("DOMContentLoaded", function() {
  
    //TOGGLE MENU FOR SMALL SCREENS + DATA ATTRIBUTES not toggle//
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav'); 
    menubutton.addEventListener('click', function() {
      if (menunav.getAttribute('data-navstate') === 'open') {
          menunav.setAttribute('data-navstate', 'closed');
      } else {
          menunav.setAttribute('data-navstate', 'open');
      }
    });
  
  });