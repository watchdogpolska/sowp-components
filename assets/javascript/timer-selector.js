(function iife($) {
  $('.sowp-timer-selector').on(
    'mouseover touchstart',
    '.sowp-timer-selector__item',
    function timerSelectorClick() {
      const $item = $(this);
      const $indicator = $item.closest('.sowp-timer-selector')
                              .find('.sowp-timer-selector__indicator');

      const movement = ($item.index() * (1 / 4) * 100);
      $indicator.css('margin-left', `${movement}%`);
    }
  );
}(jQuery));
