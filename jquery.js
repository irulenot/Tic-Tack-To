$(document).ready(function(){


$('.bttn1').click(function(){
  var block_colors = ["sky blue","red","orange","teal","yellow",
  "midnight blue","maddang","gray","purple"];
  var rand = Math.floor(Math.random() * 10);
  $("#colors").text(block_colors[rand]);
});

var count=4;

var counter=setInterval(timer, 500); //1000 will  run it every 1 second



//if they click on the one that is in the box they get true, else end game
 




function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }

  document.getElementById("timer").innerHTML=count + " seconds"; // watch for spelling
}



$('#block1').hover(function(){
	  $(this).addClass('active');

}, function(){
	$(this).removeClass('active');
});

$('#block2').hover(function(){
	$(this).addClass('active1');

}, function(){
	$(this).removeClass('active1');
	});

$('#block3').hover(function(){
    $(this).addClass('active2');

}, function(){
  $(this).removeClass('active2');
});



$('#block4').hover(function(){
    $(this).addClass('active3');

}, function(){
  $(this).removeClass('active3');
});

$('#block5').hover(function(){
    $(this).addClass('active4');

}, function(){
  $(this).removeClass('active4');
});

$('#block6').hover(function(){
    $(this).addClass('active5');

}, function(){
  $(this).removeClass('active5');
});

$('#block7').hover(function(){
    $(this).addClass('active6');

}, function(){
  $(this).removeClass('active6');
});

$('#block8').hover(function(){
    $(this).addClass('active7');

}, function(){
  $(this).removeClass('active7');
});


$('#block9').hover(function(){
    $(this).addClass('active8');

}, function(){
  $(this).removeClass('active8');
});



if(block_colors === rand)
{
  correct = true;
}







});

