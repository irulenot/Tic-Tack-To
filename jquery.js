$(document).ready(function(){

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

var count=4;

var correct = false;
var wrongClick = false;

  var block_colors = ["sky blue","red","orange","teal","yellow",
  "midnight blue","maddang","gray","purple"];
  var block_list = ["block1","block2","block3","block4","block5","block6","block7","block8","block9"]

  var rand = Math.floor(Math.random()*(8-0+1)+0); // 3
  $("#colors").text(block_colors[rand]); // outputs teal

while (wrongClick !== true && count === -1){
$('.block').click(function(){ //reads click from block
  if ($("block").text() !== block_colors[rand]{ // *maybe* comparing strings
    wrongClick = 1; // if they don't match, loop ends

  }else{
    var rand = Math.floor(Math.random()*(9-0+1)+0);;
  $("#colors").text(block_colors[rand]);
  // for (var i = 9; i > 0; i--) {
    
  // };
    correct = true;
    }
});

var counter=setInterval(timer, 500);
function timer()
{
  if (correct == true){
  	count = 4 ;
    correct = false;
  }else{count=count-1;}
  
  
  if (count <= -1)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }

  document.getElementById("timer").innerHTML=count + " seconds"; // watch for spelling
}}

});