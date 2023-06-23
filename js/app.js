$(function () {
  let introH = $('#intro').innerHeight();
  let header = $('#header');
  let scrollOffset = $(window).scrollTop();
  // let aboutHeight = $('#about').innerHeight();

  /* Fixed Header show */
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
    /*     if (scrollOffset <= introH + aboutHeight) {
      $('#nav a').removeClass('active');
      $('[data-about]').addClass('active');
    } */
  }

  /* Smooth scroll */
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    let $this = $(this);
    let blockId = $(this).data('scroll');
    let blockOffset = $(blockId).offset().top;

    $('#nav a').removeClass('active');
    $this.addClass('active');
    $('#nav').toggleClass('active');
    $('#nav-toggle').toggleClass('active');

    $('html, body').animate(
      {
        scrollTop: blockOffset,
      },
      500,
    );
  });

  /*  Menu nav toggle */
  $('#nav-toggle').on('click', function (event) {
    event.preventDefault();

    $(this).toggleClass('active');
    $('#nav').toggleClass('active');
  });

  /* Collapse */
  $('[data-collapse]').on('click', function (event) {
    event.preventDefault();

    let $this = $(this);
    let blockId = $(this).data('collapse');

    $this.toggleClass('active');
    // $(blockId).slideToggle();
  });

  /* Slider */
  $('[data-slider]').slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
