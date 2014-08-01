//the std start
$(document).ready(function(){ 
  //when mouse hovers, class "block" opacity changes
  //"this" refers to .block
  $('.block').mouseenter(function(){
  	$(this).fadeTo('fast', 0.5);
  });
  $('.block').mouseleave(function(){
    $(this).fadeTo('fast', 1);
  });
});



