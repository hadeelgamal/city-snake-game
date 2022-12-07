function selectTramImage(direction) {
  if (direction === "right") {
    return "images/tram-right.png";
  } else if (direction === "left") {
    return "images/tram-left.png";
  } else if (direction === "up") {
    return "images/tram-up.png";
  } else if (direction === "down") {
    return "images/tram-down.png";
  }
}

class Tram {
  constructor() {
    this.tramDirection = "right";
    this.dx = 50;
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
    this.dx -= 50;
    this.dy = 0;
  }
  moveRight() {
    this.dx += 50;
    this.dy = 0;
  }
  moveUp() {
    this.dx = 0;
    this.dy -= 50;
    // ctx.translate(this.tramCars[0].x + 100/ 2, this.tramCars[0].y + 60 / 2);
    // ctx.rotate(Math.PI / 2);
  }
  moveDown() {
    this.dx = 0;
    this.dy += 50;
  }
  addCar() {
    // adds a tram car to the array tramCars
  }
}
