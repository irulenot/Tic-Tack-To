/*------------------------------------------------
                  GAME READY
------------------------------------------------*/

$(document).ready(function(){ 

  /**
  @title     Cursor enter fading
  @purpose   Style
  */
  $('.block').mouseenter(function(){
  	$(this).fadeTo('fast', 1);
  });

  /**
  @title    Cursor leave fading
  @purpose  Style
  */
  $('.block').mouseleave(function(){
    $(this).fadeTo('fast', 0.6);
   });  

  changeTarget();

    $('.timer').click(function(){
      onTimerClicked();
    });
});

/*------------------------------------------------
                  GAME FUNCTIONS
------------------------------------------------*/

/**
@title     Variables
*/
var colorName = ["Blue","Red","Orange","Green","Yellow","Peach","Lime","Gray","Purple"];
var colorCode = ["#59ABE3","#F22613","#FF6600","#00B16A","#F7CA18","#f86767","#7ec9b1","#6c6c6c","#c091e6"]
var block     = ["block1","block2","block3","block4","block5","block6","block7","block8","block9"];
window.gameStage = ["Start","Game","End"];
window.gameState = gameStage[0];

/**
@title    Change block color
@param    [block] = target block, [colorCode] = color code changed to
@returns  Modifies html block colors
*/
function colorChange (block, colorCode){
  document.getElementById(block).style.backgroundColor = colorCode;
}

/**
@title    Change block word
@param    [block] = target block, [colorName] = word changed to
@returns  Modifies html block word
*/
function wordChange (block, colorName){
  $("#" + block + " p").html(colorName);
}

/**
@title    Get random number
@param    [num] = determines range of random numbers
@returns  Random number
*/
function getRandom(num) {
  var num = "0" + Math.random() * num;
  return num[1];
}

/**
@title    Random block color shuffle
@purpose  Changes colors of blocks at random with no overlap
*/
function colorShuffle(){
  for(i = 0; i < 9; i++){
    chosen = getRandom(8-i);
    container = colorCode[chosen];

    colorChange(block[i],container);

    colorCode[chosen] = colorCode[8-i];
    colorCode[8-i] = container;
  }
}

/**
@title    Random word shuffle
@purpose  Changes names on blocks at random with no overlap
*/
function wordShuffle(){
  for(i = 0; i < 9; i++){
    chosen = getRandom(8-i);
    container = colorName[chosen];

    wordChange(block[i],container);

    colorName[chosen] = colorName[8-i];
    colorName[8-i] = container;
  }
}

/**
@title    Target word selection
@purpose  Gives you a random color name
*/
function targetWord(){
  chosen = getRandom(8);
  return colorName[chosen]
}

/**
@title    Random word shuffle
@prupose   Changes names on blocks at random with no overlap
*/
function changeTarget(){
  $("#colors").html(targetWord());
}

/**
@title    Random block color and word shuffle
@purpose  Changes places of blocks at random with no overlap
*/
function allShuffle(){
  for(i = 0; i < 9; i++){
    chosen = getRandom(8-i);
    container_C = colorCode[chosen];
    container_W = colorName[chosen];

    colorChange(block[i],container_C);
    wordChange(block[i],container_W);

    colorCode[chosen] = colorCode[8-i];
    colorCode[8-i] = container_C;

    colorName[chosen] = colorName[8-i];
    colorName[8-i] = container_W;
  }
}

/**
@title    Create timer
@param    [sec] = determines amount of seconds til end
@purpose  Animate time remaining before failure
*/
function changeTime(sec){
  $(".timer").html(sec);

  window.setInterval(timer, 1000);
  function timer() { sec--; if(sec > -1) {$(".timer").html(sec);}}
}

/**
@title    Game start
@purpose  Starts game by changing gameState, turning on the time, and 
*/
function onTimerClicked(){
  if (gameState == gameStage[0]){
    allShuffle();
    changeTime(2);
    gameState = gameStage[1];
  }   
}

/*------------------------------------------------
                    GAME LOGIC
------------------------------------------------*/

if ($(".timer").html() == "Start"){
    alert($(".timer").html());
}