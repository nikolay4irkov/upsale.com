const $card = $('.js-card');

/*$card.hover(
  function() {
    $(this).children('.card__front').addClass('is-hidden');
    $(this).children('.card__back').addClass('is-visible');
    $(this).addClass('is-hovered');
  },
  function() {
    $(this).children('.card__front').removeClass('is-hidden');
    $(this).children('.card__back').removeClass('is-visible');
    $(this).removeClass('is-hovered');
  }
);*/

$card.hover(
  function() {
    $(this).siblings().removeClass('is-hovered');
    $(this).siblings().children('.card__front').removeClass('is-hidden');
    $(this).siblings().children('.card__back').removeClass('is-visible');

    $(this).children('.card__front').addClass('is-hidden');
    $(this).children('.card__back').addClass('is-visible');
    $(this).addClass('is-hovered');
  },
  function() {
    $(this).children('.card__front').removeClass('is-hidden');
    $(this).children('.card__back').removeClass('is-visible');
    $(this).removeClass('is-hovered');
  }
);

