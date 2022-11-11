let time = document.getElementById("time");
let jedan = document.getElementById("jedan");
let dva = document.getElementById("dva");

var timer; 
var timeLeft = 20;

// What to do when the timer runs out
function gameOver() {
  // This cancels the setInterval, so the updateTimer stops getting called

  kraj();
  cancelInterval(timer);
}

function updateTimer() {
  timeLeft = timeLeft - 1;
  if(timeLeft >= 0)
  time.innerHTML = "Time: " + timeLeft;
  else {
    gameOver();
  }
}

// The button has an on-click event handler that calls this
function start() {

  timer = setInterval(updateTimer, 1000);
  
  updateTimer();

}

start();