const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const currentBoard = new CanvasBoard();
const cairoTram = new Tram();


class Passenger {
    constructor() {
        this.imagePath= "";
        this.x = 0;
        this.y = 0;
    }
    addGen() {
        // adds a tram car to the array tramCars
      }
}

const currentPassenger = new Passenger();


document.getElementById("start-button").onclick = () => {
  startGame();
  setInterval(updateGame, 1000);
};

function startGame() {
  document.getElementById("game-board").style.display = "block";
  document.getElementById("splash-container").style.display = "none";

  currentBoard.drawBackgroundImage();
  currentBoard.drawTramCar(cairoTram.tramCars);
  currentBoard.addRandomPassenger(currentPassenger);

  // call the moveTram method
  // call the addRandomPassenger
}
function updateGame() {
  ctx.clearRect(0, 0, 500, 500);
  currentBoard.reDrawBackground();
  currentBoard.drawTramCar(cairoTram.tramCars);
  currentBoard.moveTram(cairoTram.tramCars);
  currentBoard.drawPassenger(currentPassenger);
}
//   function updateCanvas() {
//

// }
