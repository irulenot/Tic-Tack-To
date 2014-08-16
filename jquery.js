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

  var colorName = ["Blue","Red","Orange","Green","Yellow","Peach","Lime","Gray","Purple"];
  var colorCode = ["#59ABE3","#F22613","#FF6600","#00B16A","#F7CA18","#f86767","#7ec9b1","#6c6c6c","#c091e6"]
  var block     = ["block1","block2","block3","block4","block5","block6","block7","block8","block9"];

  // changes color of block
  function colorChange (block, colorCode){
    document.getElementById(block).style.backgroundColor = colorCode;
  } //example of how to call: colorChange(block[0], colorCode[3]);


  //SPECS:

  //generate random word
  //randomize colors and words
  //click verification of word
  //verification ends with end game or increment of time


  



});

