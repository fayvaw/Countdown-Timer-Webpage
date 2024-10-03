const display = document.getElementById('screen');
const countBtn = document.getElementById('countdown');
const getStartVal = document.getElementById('timerBox');

countBtn.addEventListener("click", startTimer);

var newVal = 0;
function startTimer(){
  var startVal = parseInt(getStartVal.value);
  if (isNaN(startVal)){
    alert("Please enter a number!")
  }else if (startVal <= 0){
    alert("Time must be greater than zero(0)!");
  }else {
    newVal = startVal;
    startCount = setInterval(countdown, 1000);
  }
  
}

function countdown(){
  
  if (newVal == 0){
    display.innerHTML = newVal;
    alert("Timer Finished!")
    clearInterval(startCount);
    countBtn.disabled = false;
  }else {
    display.innerHTML = newVal;
    newVal--;
    countBtn.disabled = true;
  }
}
