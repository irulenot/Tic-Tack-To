//the std start
$(document).ready(function(){ 
  //when mouse hovers, class "block" opacity changes
  //"this" refers to .block
  $('.block').mouseenter(function(){
  	$(this).fadeTo('fast', 1);
  });
  $('.block').mouseleave(function(){
    $(this).fadeTo('fast', 0.6);
  });
});



