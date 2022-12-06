class Tram {
  constructor() {
    this.dx = 50;
    this.dy = 0;
    this.tramCars = [
      { x: 230, y: 200 },
      { x: 200, y: 200 },
    ];
  }

  moveTram() {
    const head = {
      x: this.tramCars[0].x + this.dx,
      y: this.tramCars[0].y + this.dy,
    };
    this.tramCars.unshift(head);
    this.tramCars.pop();

    
    // checks if tram pick up passengers if true add tram car and addRandomPassenger
  }
  moveLeft() {
    this.dx -= 50;
    this.dy = 0;
    console.log("moving left:", this.dx);
  }
  moveRight() {
    this.dx += 50;
    this.dy = 0;
    console.log("moving right:", this.dx);
  }
  moveUp() {
    this.dx = 0;
    this.dy -= 50;
    // ctx.translate(this.tramCars[0].x + 100/ 2, this.tramCars[0].y + 60 / 2);
    // ctx.rotate(Math.PI / 2);

    console.log("moving up:", this.dx);
  }
  moveDown() {
    this.dx = 0;
    this.dy += 50;

    console.log("moving down:", this.dx);
  }
  addCar() {
    // adds a tram car to the array tramCars
  }
}
