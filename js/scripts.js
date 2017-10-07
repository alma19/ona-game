var total = 0;

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
  $('.question3').css('display','none');
}
