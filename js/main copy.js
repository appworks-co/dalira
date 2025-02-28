(function ($) {

  "use strict";

  const content = document.getElementById('content');
  const sidebar = document.getElementById('sidebar');
  const body = document.body;
  const html = document.documentElement;

  var fullHeight = function () {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  };

  // fullHeight(); // You might want to enable this if required.

  function isDesktop() {
    return window.innerWidth > 991.98;
  }

  function isMobile() {
    return window.innerWidth <= 991.98;
  }

  $('#sidebarCollapse').on('click', function () {
    const isSidebarActive = sidebar.classList.contains('active');
    
    // Toggle the sidebar active class
    $('#sidebar').toggleClass('active');

    // Adjust layout based on the sidebar state
    if (isSidebarActive) {
      // If the sidebar was active, remove margin and allow scroll
      content.style.marginLeft = isMobile() ? '0' : '250px';
      body.classList.remove('no-scroll');
      html.style.overflow = 'auto';  // Allow scrolling by resetting the overflow property
      body.style.overflow = 'auto';  // Allow scrolling by resetting the overflow property
    } else {
      // If the sidebar is active now, apply margin and disable scroll
      content.style.marginLeft = isMobile() ? '250px' : '0';
      body.classList.add('no-scroll');
      // Prevent scrolling by applying the no-scroll class to the body and html
      html.style.overflow = 'hidden'; 
      body.style.overflow = 'hidden'; 
    }
  });

})(jQuery);
