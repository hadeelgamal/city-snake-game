const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class CanvasBoard {
  constructor() {}

  startGame() {
    // Add button with an event listener
    // on click draw canvas and call method draw tramCar
    // call the moveTram method
    // call the addRandomPassenger
   
  }

  drawTramCar() {
    // generate a tram car on the canvas
  }

  moveTram() {
    // move tram automatically, horizontal and vertical
    // checks if tram pick up passengers if true add tram car and addRandomPassenger
  }
  addRandomPassenger() {
    // recieves an array of passengers
    // chooses one at random
    // generate the one to the board
  }

  gameEnded() {
    // checks if tram has collided with its body OR collided with the canvas
  }

  changeDirections() {
    // Add document event listener on keydown
    // switch case left right top bottom arrow
  }
}

class Tram {
  constructor() {

  }

  addCar() {
    // adds a tram car to the array tramCars
  }


  
}
