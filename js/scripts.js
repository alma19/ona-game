var total = 0;
var testTotal = 0;
var flightPrice = Math.floor((Math.random() * 500) + 178);
var questions = ["q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];
var i



function deleteQuestion(){
  for (i=0; i < questions.length; i ++){
  document.getElementById(questions[i]).style.display = 'none';
  }
}

// gonna attempt this object thing
var costs = {
  member: {
    studentMember: 150,
    studentNonMember: 175,
    nonStudentMember: 659,
    nonStudentNonMember: 989
  },
  banquet: {
    yesBanquet: 30,
    noBanquet: 0
  },
  transportation: {
    plane: flightPrice,
    lyft: 42,
    metro: 14
  },
  lodging: {
    conference: 778.5,
    courtyard: 403.5,
    airbnb: 202.5,
    friend: 0
  },
  breakfast: {
    buffet: 75,
    dunkin: 10.77,
    bar: 0
  },
  lunch: {
    stone: 96,
    nandos: 40.35,
    mcLunch: 11.97
  },
  dinner: {
    lebanese: 87,
    woodley: 46.5,
    mcDinner: 19.17
  },
  drinks: {
    yesDrinks: 22,
    noDrinks: 0
  }
};

function addCosts(costs){
 console.log("help");
}








window.onload = function() {
 document.getElementById('total-display').innerHTML = total;
}

function start(){
  total = total;
  document.getElementById('total-display').innerHTML = total;
}

function none(){
  total = total;
  document.getElementById('total-display').innerHTML = total;
  $('.question1').css('display','none');
}

function studentMember(){
  total += 150;
  document.getElementById('total-display').innerHTML = total;
  $('.question').css('display','none');

}

function studentNonMember(){
  total += 175;
  document.getElementById('total-display').innerHTML = total;
  $('.question').css('display','none');
}

function nonStudentMember(){
  total += 659;
  document.getElementById('total-display').innerHTML = total;
  $('.question').css('display','none');

}

function nonStudentNonMember(){
  total += 989;
  document.getElementById('total-display').innerHTML = total;
  $('.question').css('display','none');
}

function banquet(){
  total += 30;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q3').style.display = 'none';
}

function deleteBanquet(){
  document.getElementById('q3').style.display = 'none';
}

function plane(){
  total += flightPrice;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q4').style.display = 'none';
  document.getElementById('flight-price').innerHTML = flightPrice;
}

// function flight(){
//   document.getElementById('flightq').innerHTML = flightPrice;
// }

function deleteFlight(){
  document.getElementById('flightq').style.display = 'none';
}

function conference(){
  total +=778.5;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q5').style.display = 'none';
}

function courtyard(){
  total +=403.5;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q5').style.display = 'none';
}

function airbnb(){
  total += 202.5
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q5').style.display = 'none';
}

function friend(){
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q5').style.display = 'none';
}


function lyft(){
  total += 42;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q6').style.display = 'none';
}

function metro(){
  total += 14;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q6').style.display = 'none';
}

function buffet(){
  total += 75;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q7').style.display = 'none';
}

function dunkin(){
  total += 10.77;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q7').style.display = 'none';
}

function deleteBreakfast(){
  document.getElementById('q7').style.display = 'none';
}

function stone(){
  total += 96;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q8').style.display = 'none';
}


function nandos(){
  total += 40.35;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q8').style.display = 'none';
}

function mcLunch(){
  total += 11.97;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q8').style.display = 'none';
}


function lebanese(){
  total += 87;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q9').style.display = 'none';
}

function woodley(){
  total += 46.5;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q9').style.display = 'none';
}

function mcDinner(){
  total += 19.17;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q9').style.display = 'none';
}



function drinks(){
  total += 22;
  document.getElementById('q10').style.display = 'none';
  document.getElementById('intro').style.display = 'none';

  document.getElementById("final-total").style.color="#00a39b";
  document.getElementById("final-total").style.fontWeight="bold";
  document.getElementById("final-total").style.fontSize="larger";
}

function deleteDrinks(){
  document.getElementById('q10').style.display = 'none';
  document.getElementById('intro').style.display = 'none';

  document.getElementById("final-total").style.color="#00a39b";
  document.getElementById("final-total").style.fontWeight="bold";
  document.getElementById("final-total").style.fontSize="larger";
}
