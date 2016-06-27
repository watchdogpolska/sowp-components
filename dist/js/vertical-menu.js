'use strict';

(function iife($) {
  $('.sowp-vertical-menu').each(function VerticalMenuEach() {
    var $menu = $(this);
    var $list = $menu.find('.sowp-vertical-menu__list');
    var $container = $('<div class="sowp-vertical-menu__select"></div>');
    $container.appendTo($menu);
    var $select = $('<select></select');
    $select.appendTo($container);
    var $items = $list.find('.sowp-vertical-menu__item a');
    $items.each(function itemsEach() {
      var $item = $(this);
      var $option = $('<option></option>');
      $option.val($item.attr('href'));
      $option.text($item.text());
      $option.appendTo($select);
    });
  });

  $('.sowp-vertical-menu__select select').on('change', function selectChange() {
    var selectedOption = $(this).find('option:selected');
    document.location = selectedOption.val();
  });
})(jQuery);