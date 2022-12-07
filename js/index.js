const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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

document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 37:
      if (
        cairoTram.tramDirection === "left" ||
        cairoTram.tramDirection === "right"
      )
        return;
      cairoTram.moveLeft();
      cairoTram.tramDirection = "left";
      break;
    case 39:
      if (
        cairoTram.tramDirection === "left" ||
        cairoTram.tramDirection === "right"
      )
        return;
      cairoTram.moveRight();
      cairoTram.tramDirection = "right";

      break;
    case 38:
      if (
        cairoTram.tramDirection === "up" ||
        cairoTram.tramDirection === "down"
      )
        return;
      cairoTram.moveUp();
      cairoTram.tramDirection = "up";

      break;
    case 40:
      if (
        cairoTram.tramDirection === "up" ||
        cairoTram.tramDirection === "down"
      )
        return;
      cairoTram.moveDown();
      cairoTram.tramDirection = "down";

      break;
  }
});

document.getElementById("start-button").onclick = () => {
  startGame();
  setInterval(updateGame, 800);
};

function startGame() {
  document.getElementById("game-board").style.display = "block";
  document.getElementById("splash-container").style.display = "none";
  const tramImageSrc = selectTramImage(cairoTram.tramDirection);
  currentBoard.drawBackgroundImage();
  currentBoard.drawTramCar(cairoTram.tramCars, tramImageSrc);
  currentBoard.addRandomPassenger(currentPassenger);
}
function updateGame() {
  if (currentBoard.gameEnded(cairoTram.tramCars)) return;
  // changing_direction = false;
  const tramImageSrc = selectTramImage(cairoTram.tramDirection);
  ctx.clearRect(0, 0, 500, 500);
  currentBoard.reDrawBackground();
  currentBoard.drawTramCar(cairoTram.tramCars, tramImageSrc);
  cairoTram.moveTram(currentBoard.has_eaten);
  currentBoard.drawPassenger(currentPassenger);
  currentBoard.pickUpPassenger(currentPassenger, cairoTram);
}
