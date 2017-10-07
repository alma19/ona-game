var total = 0;
// var studentMember = 150;
// var studentNonMember = 175;

// function test(){
//   total += 300;
//   document.getElementById('total-display').innerHTML = total;
//   $('.question').css('display','none');
// }


function none(){
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

function plane(){
  total += Math.floor((Math.random() * 500) + 178);
    document.getElementById('total-display').innerHTML = total;
    document.getElementById('q4').style.display = 'none';
}

function conference(){
  total +=779;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q5').style.display = 'none';
}

function embassy(){
  total += 344;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q5').style.display = 'none';
}

function courtyard(){
  total +=404;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q5').style.display = 'none';
}

function airbnb(){
  total += Math.floor((Math.random() * 252) + 123);
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q5').style.display = 'none';
}


function lyft(){
  total += 42;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q6').style.display = 'none';
}

function metro(){
  total += 12;
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

function stone(){
  total += 45;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q8').style.display = 'none';
}


function nandos(){
  total += 40.35;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q8').style.display = 'none';
}

function lebanese(){
  total += 57;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q9').style.display = 'none';
}

function woodley(){
  total += 46.5;
  document.getElementById('total-display').innerHTML = total;
  document.getElementById('q9').style.display = 'none';
}

function drinks(){
  total += 22;
  document.getElementById('q10').style.display = 'none';
  document.getElementById('intro').style.display = 'none';
}
