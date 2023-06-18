$(function () {
  let introH = $('#intro').innerHeight();
  let header = $('#header');
  let scrollOffset = $(window).scrollTop();

  // Fixed Header show
  checkScroll(scrollOffset);

  $(window).on('scroll', function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }

  // Smooth scroll
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    let blockId = $(this).data('scroll');
    let blockOffset = $(blockId).offset().top;
    let $this = $(this);

    $('#nav a').removeClass('active');
    $this.addClass('active');

    $('html, body').animate(
      {
        scrollTop: blockOffset,
      },
      500,
    );
  });
});
