(function iife($) {
  $('.sowp-tabs-list').on(
    'click',
    '.sowp-tabs-list__item-heading',
    function tabTitleClick() {
      const $tabTitle = $(this);
      const $tabCurrent = $tabTitle.closest('.sowp-tabs-list__item');
      const $tabsContainer = $tabCurrent.closest('.sowp-tabs-list');
      const $tabsOthers = $tabsContainer.find('.sowp-tabs-list__item').not($tabCurrent);

      $tabCurrent.find('.sowp-tabs-list__item-body')
        .slideToggle(() => {
          $tabCurrent.toggleClass('is-expanded');
        });
      $tabsOthers.find('.sowp-tabs-list__item-body')
        .slideUp(() => {
          $tabsOthers.removeClass('is-expanded');
        });
    }
  );
}(jQuery));
