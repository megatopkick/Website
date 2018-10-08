var currentVal;
function revealMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
  currentVal = Number(10);
}

function countDown(){
  var newVal;
  if (currentVal > 0) {
    var newVal = currentVal - 1;
  }else {
    newVal = 0;
    document.getElementById("outOfCookies").innerHTML = "Oops, all out of cookies!!!!! :(";
  }
    currentVal = newVal;
  document.getElementById("countDownButton").innerHTML = newVal;
  document.getElementById('inParagraphCount').innerHTML = newVal;
}
function addCookies(){
  var newVal = 0;
    if (currentVal > 0) {
      var newVal = Number(currentVal) + Number(10);
    }else {
      var newVal = Number(currentVal) + Number(10);
      document.getElementById("outOfCookies").innerHTML = "";
    }
    currentVal = newVal;
  document.getElementById("countDownButton").innerHTML = newVal;
  document.getElementById('inParagraphCount').innerHTML = newVal;
}
