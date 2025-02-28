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

  function isMobile() {
    return window.innerWidth <= 991.98;  // Mobile should be <= 991px
  }

  function isDesktop() {
    return window.innerWidth > 991.98;  // Desktop should be > 991px
  }

  function toggleSidebar() {
    const isSidebarActive = sidebar.classList.contains('active');
    
    // Toggle the sidebar active class
    $('#sidebar').toggleClass('active');

    if (isMobile()) {
      // Mobile behavior: Adjust content margin for sidebar visibility
      if (isSidebarActive) {
        // Sidebar was active, so remove margin and allow scroll
        sidebar.style.marginLeft = '-250px';
        html.style.overflow = 'auto';
        body.style.overflow = 'auto';
      } else {
        // Sidebar is now active, apply margin to content and disable scroll
        sidebar.style.marginLeft = '0';
        html.style.overflow = 'hidden';
        body.style.overflow = 'hidden';
      }
    } else if (isDesktop()) {
      // Desktop behavior: Adjust content margin and prevent scroll when sidebar is active
      if (isSidebarActive) {
        content.style.marginLeft = '250px';
        sidebar.style.marginLeft = '0';
        html.style.overflow = 'auto';
        body.style.overflow = 'auto';
      } else {
        content.style.marginLeft = '0';  // Sidebar width for desktop
        sidebar.style.marginLeft = '-250px';
        html.style.overflow = 'hidden';
        body.style.overflow = 'hidden';
      }
    }
  }

  $('#sidebarCollapse').on('click', function () {
    toggleSidebar(); // Use the function to toggle sidebar visibility
  });

})(jQuery);
