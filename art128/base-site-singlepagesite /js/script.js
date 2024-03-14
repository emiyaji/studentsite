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