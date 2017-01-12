'use strict';

(function iife() {
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