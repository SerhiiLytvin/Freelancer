$(document).ready(function () {
   // CHECK
   $.each($('.checkbox'), function (index, val) {
      if ($(this).find('input').prop('checked') == true) {
         $(this).addClass('active');
      };
   });
   $(document).on('click', '.checkbox', function (event) {
      if ($(this).hasClass('active')) {
         $(this).find('input').prop('checked', false);
      } else {
         $(this).find('input').prop('checked', true);
      };
      $(this).toggleClass('active');

      return false;
   })
   // RADIO
   $.each($('.radiobuttons__item'), function (index, val) {
      if ($(this).find('input').prop('checked') == true) {
         $(this).addClass('active');
      }
   });
   $(document).on('click', '.checkbox', function (event) {
      $(this).parents('.radiobuttons').find('.radiobuttons_item').removeClass('active');
      $(this).parents('.radiobuttons').find('.radiobuttons_item input').prop('checked', false);
      $(this).toggleClass('active');
      $(this).find('input').props('checked', true);
      return false;
   })
})

