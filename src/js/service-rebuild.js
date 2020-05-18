// const $tabs = $('.js-tab');
const $tabContent = $('.js-tab-content');
let trigger = 1;
let screenWidth = $(window).width();

if(screenWidth < 992) {
  rebuild();
}

$(window).on('resize', function() {
  screenWidth = $(this).width();

  if(screenWidth < 992) {
    rebuild();
  }
});

function rebuild() {
  if(trigger) {
    $tabContent.each(function() {
      $(this)
        .insertAfter($(`.js-tab[data-tab="${$(this).attr('id')}"]`));
    });
    trigger--;
  }
}
