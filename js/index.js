const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const currentBoard = new CanvasBoard();
const cairoTram = new Tram();

class Passenger {
  constructor() {
    this.imagePath = "";
    this.x = 0;
    this.y = 0;
    this.status = false;
  }
}
const currentPassenger = new Passenger();

document.addEventListener("keydown", (event) => {
  console.log("event keyCode", event.keyCode);
  switch (event.keyCode) {
    case 37:
      currentBoard.moveLeft();
      break;
    case 39:
      currentBoard.moveRight();
      break;
    case 38:
      currentBoard.moveUp();
      break;
    case 40:
      currentBoard.moveDown();
      break;
  }
});

document.getElementById("start-button").onclick = () => {
  startGame();
  setInterval(updateGame, 2200);
};

function startGame() {
  document.getElementById("game-board").style.display = "block";
  document.getElementById("splash-container").style.display = "none";

  currentBoard.drawBackgroundImage();
  currentBoard.drawTramCar(cairoTram.tramCars);
  currentBoard.addRandomPassenger(currentPassenger);

  // document.addEventListener("keydown", currentBoard.changeDirections);
}
function updateGame() {
  if (currentBoard.gameEnded(cairoTram.tramCars)) return;
  changing_direction = false;
  ctx.clearRect(0, 0, 500, 500);
  currentBoard.reDrawBackground();
  currentBoard.drawTramCar(cairoTram.tramCars);
  currentBoard.moveTram(cairoTram.tramCars);
  currentBoard.drawPassenger(currentPassenger);
}
