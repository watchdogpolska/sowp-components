(function iife($) {
  const $grid = $('.sowp-grid').masonry({
    itemSelector: '.sowp-grid--item',
    columnWidth: '.sowp-grid--item',
    gutter: '.sowp-grid--gutter',
    percentPosition: true,
  });
  $grid.imagesLoaded().progress(() => $grid.masonry('layout'));
}(jQuery));
