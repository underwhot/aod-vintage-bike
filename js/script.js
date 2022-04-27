$(".wrapper").addClass("loaded");

// burger
// $(".icon-menu").cleck(function (event) {
//   $(this).toggleClass("active");
//   $(".menu__body").toggleClass("active");
//   $("body").toggleClass("lock");
// });

$(document).ready(function() {
  $('.icon-menu').click(function(event) {
    $('.icon-menu,.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
  })
});




// $(document).ready(function() {
//   $('.header__burger').click(function(event) {
//     $('.header__burger,.header__menu').toggleClass('active');
//     $('body').toggleClass('lock');
//   })
// });

// ibg method jQuery
function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}
ibg();
