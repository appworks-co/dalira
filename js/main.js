(function ($) {

  "use strict";

  const content = document.getElementById('content');
  const sidebar = document.getElementById('sidebar');

  var fullHeight = function () {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  };

  fullHeight();

  function isDesktop() {
    return window.innerWidth > 991.98;
  }

  function isMobile() {
    return window.innerWidth < 991.98;
  }

  $('#sidebarCollapse').on('click', function () {
    if (isDesktop()) {
      $('#sidebar').toggleClass('active');

      if (sidebar.classList.contains('active')) {
        content.style.marginLeft = '0';
      } else {
        content.style.marginLeft = '250px';
      }
    }

    if (isMobile()) {
      $('#sidebar').toggleClass('active');

      if (sidebar.classList.contains('active')) {
        content.style.marginLeft = '250px'; 
      } else {
        content.style.marginLeft = '0';
      }
    }
  });

})(jQuery);
