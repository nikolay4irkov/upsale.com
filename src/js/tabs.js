const $tab = $('.js-tab');
const $tabContent = $('.js-tab-content');
const $servicesButton = $('.js-services-button');

$servicesButton.on('click', function () {
  $tab.removeClass('is-active');
  $tabContent.removeClass('is-active');
  $('html').animate({scrollTop: $(this).parent().offset().top - 190}, 'slow');
});

$tab.on('click', toggleTabContent);

function toggleTabContent() {
  if ($(this).hasClass('is-active')) {
    $tab.removeClass('is-active');
    $tabContent.removeClass('is-active');
  } else {
    const tabToShow = $(this).data('tab');
    $tab.removeClass('is-active');
    $tabContent.removeClass('is-active');
    $(this).toggleClass('is-active');
    $(`#${tabToShow}`).toggleClass('is-active');
  }
}
