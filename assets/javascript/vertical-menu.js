(function iife($) {
  $('.sowp-vertical-menu').each(function VerticalMenuEach() {
    const $menu = $(this);
    const $list = $menu.find('.sowp-vertical-menu__list');
    const $container = $('<div class="sowp-vertical-menu__select"></div>');
    $container.appendTo($menu);
    const $select = $('<select></select');
    $select.appendTo($container);
    const $items = $list.find('.sowp-vertical-menu__item a');
    $items.each(function itemsEach() {
      const $item = $(this);
      const $option = $('<option></option>');
      $option.val($item.attr('href'));
      $option.text($item.text());
      $option.appendTo($select);
    });
  });

  $('.sowp-vertical-menu__select select').on('change', function selectChange() {
    const selectedOption = $(this).find('option:selected');
    document.location = selectedOption.val();
  });
}(jQuery));
