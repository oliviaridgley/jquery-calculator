"use strict";
$(document).ready(function() {

// ================ Variables =====================//

var screenArea = $("#screen");
var clear = $("#clear");
var equals = $('#equals');



//================= On Screen Function ===============//


function onScreen(event){
  var input = $(event.target).text();
  if($(this).text() === 'C' || $(this).text() === '=') {
    console.log('C');
  } else {
  screenArea.text(screenArea.text() + input);
  }
}

//================== Number Selection & Click ============//


var number7 = $(".buttons :nth-child(4)");
//console.log(number7);
$(number7).on("click", onScreen);

var number8 = $(".buttons :nth-child(5)");
//console.log(number8);
$(number8).on("click", onScreen);

var number9 = $(".buttons :nth-child(6)");
//console.log(number9);
$(number9).on("click", onScreen);

var number4 = $(".buttons :nth-child(8)");
$(number4).on("click", onScreen);

var number5 = $(".buttons :nth-child(9)");
$(number5).on("click", onScreen);

var number6 = $(".buttons :nth-child(10)");
$(number6).on("click", onScreen);

var number1 = $(".buttons :nth-child(12)");
$(number1).on("click", onScreen);

var number2 = $(".buttons :nth-child(13)");
$(number2).on("click", onScreen);

var number3 = $(".buttons :nth-child(14)");
$(number3).on("click", onScreen);


//=============== Selecting Operators & Appending =============//

$(".operator").on("click", onScreen);

//================== Selection & Appending '0' =================//

$(".l-row").on("click", onScreen);


//If the screen displays the message `Error`, don't append anything.//


//====================== Clear ==========================//


clear.on("click", function(){
  screenArea.empty();
});


//Click the `equals` button to evaluate the arithmetic expression shown in the screen. If the expression is in format `operand(+|-|x|÷)operand`, evaluate the expression and update the screen with the result.//

//======================= Evaluating on Equals Click ================//

equals.on('click', function () {

  var hasPlus = screenArea.text().indexOf('+') !== -1;
  var hasMinus = screenArea.text().indexOf('-') !== -1;
  var hasMultiplication = screenArea.text().indexOf('x') !== -1;
  var hasDivision = screenArea.text().indexOf('÷') !== -1;


  if (hasPlus === true){
    var plus = screenArea.text().indexOf('+');
    console.log(plus);


  }

  else if (hasMinus === true){
    var minus = screenArea.text().indexOf('-');
    console.log(minus);

  }

  else if (hasMultiplication === true){
    var multiply = screenArea.text().indexOf('x');
    console.log(multiply);

  }

  else if (hasDivision === true){
    var divide = screenArea.text().indexOf('÷');
    console.log(divide);

  }

});






//If the expression isn't in the correct format or when attempting to divide by zero, update the screen with the message `Error`.//



});
