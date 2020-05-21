const $card = $('.js-card');

$card.hover(
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
);

