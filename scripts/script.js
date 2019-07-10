(function() {
 
  // "use strict";
 
  var toggles = document.querySelectorAll(".mobail-menu");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      $(".menu").toggleClass("responsive");
    });
  }
  $(function(){
    $('.menu ul').hide();
    $('.menu li.current').parent().show();
    $('.menu li').has('ul').bind('click',function(){
        $(this).children('ul').slideToggle(300);
        return false;
    });
});
 
})();


$(document).ready(function(){
  
  $('ul.tabs li .faq__list-q').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li .faq__list-q').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})
