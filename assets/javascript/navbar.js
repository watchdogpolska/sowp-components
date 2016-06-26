(function iife($) {
  $('.sowp-navbar__toggle').click(function toggleClick(ev) {
    ev.preventDefault();
    const navbar = $(this).closest('.sowp-navbar');
    navbar.toggleClass('is-expanded');
  });
}(jQuery));
