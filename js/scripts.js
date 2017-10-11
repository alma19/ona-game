var total = 0;
var flightPrice = Math.floor((Math.random() * 500) + 178);

var pymChild;

window.onload = function() {
 document.getElementById('total-display').innerHTML = total;
 pymChild = new pym.Child();
 pymChild.sendHeight();
}

function start(){
  total = total;
  document.getElementById('total-display').innerHTML = total;
  pymChild.sendHeight();
}

function none(){
  total = total;
  document.getElementById('total-display').innerHTML = total;
  $('.question1').css('display','none');
  pymChild.sendHeight();

}

function studentMember(){
  total += 150;
  document.getElementById('total-display').innerHTML = total;
  $('.question').css('display','none');
  pymChild.sendHeight();

}

function studentNonMember(){
  total += 175;
  document.getElementById('total-display').innerHTML = total;
  $('.question').css('display','none');
  pymChild.sendHeight();
}

function nonStudentMember(){
  total += 659;
  document.getElementById('total-display').innerHTML = total;
  $('.question').css('display','none');
  pymChild.sendHeight();

}

function nonStudentNonMember(){
  total += 989;
  document.getElementById('total-display').innerHTML = total;
  $('.question').css('display','none');
  pymChild.sendHeight();

}

function banquet(){
  total += 30;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q3').style.display = 'none';
  pymChild.sendHeight();

}

function deleteBanquet(){
  document.getElementById('q3').style.display = 'none';
  pymChild.sendHeight();

}

function plane(){
  total += flightPrice;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q4').style.display = 'none';
  document.getElementById('flight-price').innerHTML = flightPrice;
  pymChild.sendHeight();

}

// function flight(){
//   document.getElementById('flightq').innerHTML = flightPrice;
// }

function deleteFlight(){
  document.getElementById('flightq').style.display = 'none';
  pymChild.sendHeight();

}

function conference(){
  total +=778.5;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q5').style.display = 'none';
  pymChild.sendHeight();

}

function courtyard(){
  total +=403.5;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q5').style.display = 'none';
  pymChild.sendHeight();

}

function airbnb(){
  total += 202.5
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q5').style.display = 'none';
  pymChild.sendHeight();

}

function friend(){
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q5').style.display = 'none';
  pymChild.sendHeight();

}


function lyft(){
  total += 42;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q6').style.display = 'none';
  pymChild.sendHeight();

}

function metro(){
  total += 14;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q6').style.display = 'none';
  pymChild.sendHeight();

}

function buffet(){
  total += 75;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q7').style.display = 'none';
  pymChild.sendHeight();

}

function dunkin(){
  total += 10.77;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q7').style.display = 'none';
  pymChild.sendHeight();

}

function deleteBreakfast(){
  document.getElementById('q7').style.display = 'none';
  pymChild.sendHeight();

}

function stone(){
  total += 96;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q8').style.display = 'none';
  pymChild.sendHeight();

}


function nandos(){
  total += 40.35;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q8').style.display = 'none';
  pymChild.sendHeight();

}

function mcLunch(){
  total += 11.97;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q8').style.display = 'none';
  pymChild.sendHeight();

}


function lebanese(){
  total += 87;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q9').style.display = 'none';
  pymChild.sendHeight();

}

function woodley(){
  total += 46.5;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q9').style.display = 'none';
  pymChild.sendHeight();

}

function mcDinner(){
  total += 19.17;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q9').style.display = 'none';
  pymChild.sendHeight();

}



function drinks(){
  total += 22;
  document.getElementById('q10').style.display = 'none';
  document.getElementById('intro').style.display = 'none';

  document.getElementById("final-total").style.color="#00a39b";
  document.getElementById("final-total").style.fontWeight="bold";
  document.getElementById("final-total").style.fontSize="larger";
  pymChild.sendHeight();

}

function deleteDrinks(){
  document.getElementById('q10').style.display = 'none';
  document.getElementById('intro').style.display = 'none';

  document.getElementById("final-total").style.color="#00a39b";
  document.getElementById("final-total").style.fontWeight="bold";
  document.getElementById("final-total").style.fontSize="larger";
  pymChild.sendHeight();

}
