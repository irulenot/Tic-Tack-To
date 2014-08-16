$(document).ready(function(){ 

  /**
  @title     Cursor enter fading
  */
  $('.block').mouseenter(function(){
  	$(this).fadeTo('fast', 1);
  });

  /**
  @title    Cursor leave fading
  */
  $('.block').mouseleave(function(){
    $(this).fadeTo('fast', 0.6);
   });

  /**
  @title     Variables
  */
  var colorName = ["Blue","Red","Orange","Green","Yellow","Peach","Lime","Gray","Purple"];
  var colorCode = ["#59ABE3","#F22613","#FF6600","#00B16A","#F7CA18","#f86767","#7ec9b1","#6c6c6c","#c091e6"]
  var block     = ["block1","block2","block3","block4","block5","block6","block7","block8","block9"];

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
  @param    Uses (colorName) and (block)
  @returns  Changes colors of blocks at random with no overlap
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
  @param    Uses (colorName) and (block)
  @returns  Changes cnames on blocks at random with no overlap
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

  //To do:
    //generate random word
    //randomize words
    //click verification of word
    //verification ends with end game or increment of time

  colorShuffle();
  wordShuffle();

  // wordChange(block[0], colorName[2]);

});

