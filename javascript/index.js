// wait for DOM to be loaded before continuing 
document.addEventListener('DOMContentLoaded', function () {

  // selecting element withj id 'campusimg'
    var carousel = document.querySelector('#campusimg');

    // creating new instance 
    var carouselInstance = new bootstrap.Carousel(carousel, {
      
      // set auto play to every 5 secs
      interval: 5000,

      // Pause on mouse hover
      pause: 'hover', 
      
    });
  });


