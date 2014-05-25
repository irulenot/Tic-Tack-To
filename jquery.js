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

  var block_colors = ["sky_blue","red","orange","teal","yellow",
  "midnight_blue","maddang","gray","purple"];
  var block_list = ["#block1","#block2","#block3","#block4","#block5","#block6","#block7","#block8","#block9"];

  var rand = Math.floor(Math.random()*(8-0+1)+0); // 3
  var current_color = block_colors[rand];
  $('#colors').removeClass();
  $("#colors").addClass(current_color); // outputs teal
  $("#colors").text(current_color);

  var count_left = 4;
  document.getElementById("timer").innerHTML=count_left; // watch for spelling
  var counter=setInterval(timer, 350);
  function timer() {
    count_left -= 1;
    if (count_left < 0)
    {
       clearInterval(counter);
       //Game ended, user didn't click on anything before timer ends
       return alert("Time has run out!");
    }

    document.getElementById("timer").innerHTML=count_left; // watch for spelling
  }

  function randomizeBlockColors() {
    var random_colors_classes = shuffle(block_colors);
    var i = 0;
    jQuery.each($(".block"), function(index_of_block, current_block) {
      var block_id = current_block.id;
      current_block = $("#" + block_id);
      p_inside_block = $("#" + block_id + " p");
      current_block.removeClass(); //Remove all classes for the current block
      current_block.addClass("block"); //Add default class for block
      current_block.addClass(random_colors_classes[i]); // Add color class
      p_inside_block.text(random_colors_classes[i]);
      i += 1;
    });
  }

  $(".block").click(function() {
    var color = this.classList[1]; // Return the id of the block clicked
    console.log(color);
    console.log(current_color);
    if (color === current_color) {
      //User selected the correct color
      console.log(color);

      rand = Math.floor(Math.random()*(8-0+1)+0); // 3
      current_color = block_colors[rand];
      $('#colors').removeClass();
      $("#colors").addClass(current_color); // outputs teal
      $("#colors").text(current_color);
      randomizeBlockColors();
      count_left += 4;
      document.getElementById("timer").innerHTML=count_left + " nice!"; // watch for spelling
    }
    else {
      alert('wrong color');
    }
  });

  function shuffle(array) {
    var currentIndex = array.length
      , temporaryValue
      , randomIndex
      ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
});