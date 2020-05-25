const $root = $('body,html');
const $link = $('.js-anchor');

$link.on('click', scrollToBlock);

/*function scrollToBlock(e) {
  const id = $(this).attr('href');

  if ($(id).length) {
    e.preventDefault();
    const top = $(id).offset().top - 90;
    $root.animate({ scrollTop: top }, 1000);

    $link.removeClass('is-active');
    $(this).addClass('is-active');
  }
}*/

function scrollToBlock(e) {
  const id = $(this).attr('href');

  if ($(id).length) {
    e.preventDefault();
    let top = $(id).offset().top - 90;
    if($(window).width() < 500){
      top = $(id).offset().top - 74;
    }
    $root.animate({ scrollTop: top }, 1000);

    $link.removeClass('is-active');
    $(this).addClass('is-active');
  }
}

