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
  $('.question').css('display','none');
}

function plane(){
  total += Math.floor((Math.random() * 500) + 178);
    document.getElementById('total-display').innerHTML = total;
}

function driving(){
  total += Math.floor((Math.random() * 500) + 178);
  document.getElementById('total-display').innerhTML = total; 
}


function embassy(){
  total += 344;
  document.getElementById('total-display').innerHTML = total;
}

function courtyard(){
  total +=404;
  document.getElementById('total-display').innerHTML = total;
}
