class Tram {
  constructor() {
    this.tramDirection = "right";
    this.dx = 40;
    this.dy = 0;
    this.tramCars = [
      { x: 200, y: 200 },
      { x: 150, y: 200 },
    ];
    this.moveTram();
  }

  moveTram(has_eaten) {
    const head = {
      x: this.tramCars[0].x + this.dx,
      y: this.tramCars[0].y + this.dy,
    };
    this.tramCars.unshift(head);

    console.log(has_eaten);
    if (!has_eaten) {
      this.tramCars.pop();
    }
  }
  moveLeft() {
    this.tramDirection = "left";
    this.dx -= 50;
    this.dy = 0;
  }
  moveRight() {
    this.tramDirection = "right";

    this.dx += 50;
    this.dy = 0;
  }
  moveUp() {
    this.tramDirection = "up";

    this.dx = 0;
    this.dy -= 50;
  }
  moveDown() {
    this.tramDirection = "down";

    this.dx = 0;
    this.dy += 50;
  }
}
