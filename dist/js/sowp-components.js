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
'use strict';

(function iife($) {
  if (typeof jQuery === 'undefined') {
    throw new Error('Sowp-Navbar\'s JavaScript requires jQuery');
  }

  function navbarOutsideClick(event) {
    if (!$(event.target).closest('.sowp-navbar__nav').length && !$(event.target).is('.sowp-navbar__nav')) {
      $('.sowp-navbar.is-expanded').removeClass('is-expanded');
      $(document).off('click', navbarOutsideClick);
    }
  }

  $('.sowp-navbar__toggle').click(function toggleClick(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    var navbar = $(this).closest('.sowp-navbar');
    navbar.toggleClass('is-expanded');
    $(document).on('click', navbarOutsideClick);
  });

  $(document).on('click', navbarOutsideClick);
})(jQuery);
'use strict';

(function iife($) {
  $('.sowp-tabs-list').on('click', '.sowp-tabs-list__item-heading', function tabTitleClick() {
    var $tabTitle = $(this);
    var $tabCurrent = $tabTitle.closest('.sowp-tabs-list__item');
    var $tabsContainer = $tabCurrent.closest('.sowp-tabs-list');
    var $tabsOthers = $tabsContainer.find('.sowp-tabs-list__item').not($tabCurrent);

    $tabCurrent.find('.sowp-tabs-list__item-body').slideToggle(function () {
      $tabCurrent.toggleClass('is-expanded');
    });
    $tabsOthers.find('.sowp-tabs-list__item-body').slideUp(function () {
      $tabsOthers.removeClass('is-expanded');
    });
  });
})(jQuery);
'use strict';

(function iife($) {
  $('.sowp-timer-selector').on('mouseover touchstart', '.sowp-timer-selector__item', function timerSelectorClick() {
    var $item = $(this);
    var $indicator = $item.closest('.sowp-timer-selector').find('.sowp-timer-selector__indicator');

    var movement = $item.index() * (1 / 4) * 100;
    $indicator.css('margin-left', movement + '%');
  });
})(jQuery);
'use strict';

(function iife($) {
  $('.sowp-top-menu ul ul').closest('li').toggleClass('has-children');
})(jQuery);
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