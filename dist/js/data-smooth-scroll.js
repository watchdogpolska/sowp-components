'use strict';

(function iife($) {
  $('a[data-smooth-scroll]').on('click', function (event) {
    event.preventDefault();

    var hash = this.hash;
    var offset = void 0;
    if (hash === '') {
      offset = 0;
    } else {
      offset = $(hash).offset().top;
    }
    $('html, body').animate({
      scrollTop: offset
    }, 800, function () {
      window.location.hash = hash;
    });
  });
})(jQuery);