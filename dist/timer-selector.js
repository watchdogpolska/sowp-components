'use strict';

$('.sowp-timer-selector').on('mouseover touchstart', '.sowp-timer-selector__item', function timerSelectorClick() {
  var $item = $(this);
  var $indicator = $item.closest('.sowp-timer-selector').find('.sowp-timer-selector__indicator');

  var movement = $item.index() * (1 / 4) * 100;
  $indicator.css('margin-left', movement + '%');
});