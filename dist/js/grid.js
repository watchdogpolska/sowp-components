'use strict';

(function iife($) {
  var $grid = $('.sowp-grid').masonry({
    itemSelector: '.sowp-grid--item',
    columnWidth: '.sowp-grid--item',
    gutter: '.sowp-grid--gutter',
    percentPosition: true
  });
  $grid.imagesLoaded().progress(function () {
    return $grid.masonry('layout');
  });
})(jQuery);