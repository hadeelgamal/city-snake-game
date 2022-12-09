const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const currentBoard = new CanvasBoard();
const cairoTram = new Tram();

class Passenger {
  constructor() {
    this.imagePath = "";
    this.x = 0;
    this.y = 0;
    this.width = 10;
    this.height = 40;
    this.status = false;
  }
}
const currentPassenger = new Passenger();

let intervalID;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  
  drawStuff();
}

function drawStuff() {
  currentBoard.drawTramCar(cairoTram.tramCars);
  cairoTram.moveTram(currentBoard.has_eaten);
  currentBoard.drawPassenger(currentPassenger);
}



function startGame() {
  document.getElementById("game-board").style.display = "block";
  document.getElementById("start-button").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById("instructions").style.display = "none";

  
  currentBoard.drawTramCar(cairoTram.tramCars);
  currentBoard.addRandomPassenger(currentPassenger);
}
function updateGame() {
  if (currentBoard.gameEnded(cairoTram.tramCars)) {
    stopGame();
    cairoTram.tramCars = [
      { x: 200, y: 200 },
      { x: 150, y: 200 },
    ]
    console.log("stopgame");

    return;
  }
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  currentBoard.drawTramCar(cairoTram.tramCars);
  cairoTram.moveTram(currentBoard.has_eaten);
  currentBoard.drawPassenger(currentPassenger);
  currentBoard.pickUpPassenger(currentPassenger, cairoTram);
  currentBoard.updateScore();
}

function restartGame(){
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  location.reload(); 
  startGame();
}

function stopGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  clearInterval(intervalID);
  
  currentBoard.updateScore();
  document.getElementById("reset-button").style.display = "block";
  let message = "GAME OVER";
  ctx.font = "60px serif";
  ctx.margin = "left 160px";
  ctx.fillStyle = "black";
  ctx.fillText(message, 500, 350);

  document.getElementById('reset-button').onclick = ()=>{
    console.log('reset game works :)')
    restartGame();
    intervalID = setInterval(updateGame, 200);
    document.getElementById("reset-button").style.display = "none";
  }
}

window.addEventListener("resize", resizeCanvas, false);

document.getElementById("start-button").onclick = () => {
  startGame();
  intervalID = setInterval(updateGame, 200);
};



document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 32:
      stopGame();
      break;
    case 37:
      if (
        cairoTram.tramDirection !== "right" &&
        cairoTram.tramDirection !== "left"
      ) {
        cairoTram.moveLeft();
      }
      break;
    case 39:
      if (
        cairoTram.tramDirection !== "left" &&
        cairoTram.tramDirection !== "right"
      ) {
        cairoTram.moveRight();
      }

      break;
    case 38:
      if (
        cairoTram.tramDirection !== "down" &&
        cairoTram.tramDirection !== "up"
      ) {
        cairoTram.moveUp();
      }

      break;
    case 40:
      if (
        cairoTram.tramDirection !== "up" &&
        cairoTram.tramDirection !== "down"
      ) {
        cairoTram.moveDown();
      }
      break;
  }
});