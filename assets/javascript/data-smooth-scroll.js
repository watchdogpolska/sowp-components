(function iife($) {
  $('a[data-smooth-scroll]').on('click', function (event) {
    event.preventDefault();

    const hash = this.hash;
    let offset;
    if (hash === '') {
      offset = 0;
    } else {
      offset = $(hash).offset().top;
    }
    $('html, body').animate({
      scrollTop: offset,
    }, 800, () => {
      window.location.hash = hash;
    });
  });
}(jQuery));
