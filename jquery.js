


// $(document).ready(function(){


// $('.buttn1').hover(function(){
// 	$(this).addClass('active');
// }, function(){
// 	$(this).removeClass('active');
// });

// $('.buttn2').hover(function(){
// 	$(this).addClass('active');
// }, function(){
// 	$(this).removeClass('active');
// });


// $('.groupbutton').hover(function(){
//     $(this).addClass('active1');
// }, function(){
//     $(this).removeClass('active1');
// });



// });







$(document).ready(function(){



$('.bttn1').click(function(){
  var block_colors = ["sky blue","red","orange","teal","yellow",
  "midnight blue","maddang","gray","purple"];
  var rand = Math.floor(Math.random() * 10);
  $("#colors").text(block_colors[rand]);
});

var count=4;

var counter=setInterval(timer, 500); //1000 will  run it every 1 second

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
});


//var block_colors = {"","","","","","","","",""}

// function colorChange(){

// }
// $(document).ready(function(){
// 	var colors = ['red', 'blue']
// 	  , current = 0
// 	setInterval(function(){
// 		console.log(current)
// 		$('#word1').css({
// 			'color': colors[current]
// 		})
// 		current = current ? 0 : 1
// 	}, 500)
	
// })
