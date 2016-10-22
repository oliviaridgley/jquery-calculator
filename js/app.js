"use strict";
$(document).ready(function() {

// ================ Variables =====================//

var screenArea = $("#screen");
var clear = $("#clear");
var equals = $('#equals');



//================= On Screen Function ===============//


function onScreen(event){
  var input = $(event.target).text();
  if($(this).text() === 'C' || $(this).text() === '='){
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
    var splitA = screenArea.text().split('+');
    //console.log(splitA);
    //var tempString = "";
    //var myExpr = /[\+\-x÷]/g;
    //tempString = splitA[0].replace(myExpr, '');
    //console.log(tempString);
    var leftA = parseFloat(splitA[0]);
    //console.log(left);
    var rightA = parseFloat(splitA[1]);
    //console.log(right);
    var answerA = leftA + rightA;
// =======================Error Testing answerA ==============//
      if(isNaN(answerA)){
        screenArea.text("Error");
      } else {
    screenArea.text(answerA);
  }
}
  else if (hasMinus === true){
    var splitMin = screenArea.text().split('-');
    var leftMin = parseFloat(splitMin[0]);
    var rightMin = parseFloat(splitMin[1]);
    var answerMin = leftMin - rightMin;
// =======================Error Testing answerMin ==============//
    if(isNaN(answerMin)){
      screenArea.text("Error");
    } else {
    screenArea.text(answerMin);
  }
}
  else if (hasMultiplication === true){
    var splitMul = screenArea.text().split('x');
    var leftMul = parseFloat(splitMul[0]);
    var rightMul = parseFloat(splitMul[1]);
    var answerMul = leftMul*rightMul;
    // =======================Error Testing answerMul ==============//
    if(isNaN(answerMul)){
      screenArea.text("Error");
    } else {
    screenArea.text(answerMul);
  }
}
  else if (hasDivision === true){
    var splitD = screenArea.text().split('÷');
    var leftD = parseFloat(splitD[0]);
    var rightD = parseFloat(splitD[1]);
    // =======================Error Testing answerD ==============//
    if (rightD === 0){
      screenArea.text("Error");
    } else {
    var answerD = leftD/rightD;
      if(isNaN(answerD)){
        screenArea.text("Error");
      } else {
        screenArea.text(answerD);
    }

  }
}
});




});
