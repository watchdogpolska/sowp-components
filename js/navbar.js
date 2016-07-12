'use strict';

(function iife($) {
  function navbarOutsideClick(event) {
    if (!$(event.target).closest('.sowp-navbar__nav').length && !$(event.target).is('.sowp-navbar__nav')) {
      $('.sowp-navbar.is-expanded').removeClass('is-expanded');
      $(document).off('click', navbarOutsideClick);
    }
  }

  $('.sowp-navbar__toggle').click(function toggleClick(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    var navbar = $(this).closest('.sowp-navbar');
    navbar.toggleClass('is-expanded');
    $(document).on('click', navbarOutsideClick);
  });

  $(document).on('click', navbarOutsideClick);
})(jQuery);