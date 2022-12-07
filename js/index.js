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

document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
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

window.addEventListener("resize", resizeCanvas, false);

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

document.getElementById("start-button").onclick = () => {
  startGame();
  intervalID = setInterval(updateGame, 400);
};

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

document.addEventListener("keydown", (event) => {
  if (event.keyCode == 32) {
    stopGame();
  }
});

function stopGame() {
  clearInterval(intervalID);
  document.getElementById("reset-button").style.display = "block";
  let message = "GAME OVER";
  ctx.font = "60px serif";
  ctx.fillStyle = "black";
  ctx.fillText(message, 500, 350);
  console.log("message:", message);
}

document.getElementById("reset-button").onclick = () => {
  startGame();
  console.log("reset game works");
 intervalID = setInterval(updateGame, 400);
};
