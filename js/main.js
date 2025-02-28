(function ($) {

  "use strict";

  const content = document.getElementById('content');
  const sidebar = document.getElementById('sidebar');
  const body = document.body;
  const html = document.documentElement;

  // Full height adjustment function
  var fullHeight = function () {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  };

  fullHeight(); 

  // Function to check if it's mobile
  function isMobile() {
    return window.innerWidth <= 991.98;  // Mobile should be <= 991px
  }

  // Function to check if it's desktop
  function isDesktop() {
    return window.innerWidth > 991.98;  // Desktop should be > 991px
  }

  // Toggle the sidebar behavior
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

  // Bind the sidebar toggle event
  $('#sidebarCollapse').on('click', function () {
    toggleSidebar(); // Toggle the sidebar visibility
  });

  // Initialize highlight.js for syntax highlighting (after content is loaded)
  function initializeHighlight() {
    // Ensure syntax highlighting is applied after the page loads and content is modified
    if (typeof hljs !== "undefined") {
      hljs.highlightAll();  // Highlight all code blocks
    } else {
      console.error('highlight.js not found or not loaded properly!');
    }
  }

  // Run highlight.js after page load or after new content is added
  $(document).ready(function() {
    initializeHighlight();
  });

})(jQuery);
