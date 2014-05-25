$(document).ready(function(){


$('.buttn1').hover(function(){
	$(this).addClass('active');
}, function(){
	$(this).removeClass('active');
});

$('.buttn2').hover(function(){
	$(this).addClass('active');
}, function(){
	$(this).removeClass('active');
});


$('.groupbutton').hover(function(){
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

