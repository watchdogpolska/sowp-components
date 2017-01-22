'use strict';

(function iife($) {
  if (typeof Masonry === 'undefined') {
    throw new Error('Sowp-Grid\'s JavaScript requires Masonry');
  }
  if (typeof imagesLoaded === 'undefined') {
    throw new Error('Sowp-Grid\'s JavaScript requires imagesLoaded');
  }

  // Init a grid
  var $grid = $('.sowp-grid').masonry({
    itemSelector: '.sowp-grid--item',
    columnWidth: '.sowp-grid--item',
    gutter: '.sowp-grid--gutter',
    percentPosition: true
  });

  // Refresh a grid after a image load
  $grid.imagesLoaded().progress(function () {
    return $grid.masonry('layout');
  });
})(jQuery);