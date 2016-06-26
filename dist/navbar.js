'use strict';

$('.sowp-navbar__toggle').click(function toggleClick(ev) {
  ev.preventDefault();
  var navbar = $(this).closest('.sowp-navbar');
  navbar.toggleClass('is-expanded');
});