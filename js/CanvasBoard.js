const passengersArr = [
  "images/1-01.png",
  "images/2-01.png",
  "images/3-01.png",
  "images/4-01.png",
  "images/5-01.png",
  "images/6-01.png",
  "images/7-01.png",
  "images/8-01.png",
  "images/9-01.png",
  "images/10-01.png",
];
const backgroundImage = new Image();
const tramImage = new Image();

// // Horizontal velocity
// let dx = 30;
// // Vertical velocity
// let dy = 0;
class CanvasBoard {
  constructor() {
    this.tramImg = "images/tram.png";
    this.backgroundImg = "images/cairo-map.png";
    this.dx = 30;
    this.dy = 0;
    // this.changing_direction = false;
    this.width = canvas.width;
    this.height = canvas.height;
    console.log(this.width);
  }

  drawBackgroundImage() {
    backgroundImage.src = this.backgroundImg;
    backgroundImage.addEventListener("load", () =>
      ctx.drawImage(backgroundImage, 0, 0, 500, 500)
    );
  }
  reDrawBackground() {
    ctx.drawImage(backgroundImage, 0, 0, 500, 500);
  }

  drawTramCar(tramCars) {
    tramImage.src = this.tramImg;
    tramImage.addEventListener("load", () => {
      tramCars.forEach((element) => {
        ctx.drawImage(tramImage, element.x, element.y, 50, 30);
      });
    });
  }

  moveTram(tramCars) {
    console.log(tramCars);
    const head = { x: tramCars[0].x + this.dx, y: tramCars[0].y + this.dy };
    tramCars.unshift(head);
    tramCars.pop();

    // move tram automatically, horizontal and vertical
    // checks if tram pick up passengers if true add tram car and addRandomPassenger
  }
  addRandomPassenger(currentPassenger) {
    const randoNumber = Math.floor(Math.random() * 10);
    const imageUrl = passengersArr[randoNumber];

    const randoX = Math.floor(Math.random() * 300);
    const randoY = Math.floor(Math.random() * 300);

    currentPassenger.imagePath = imageUrl;
    currentPassenger.x = randoX;
    currentPassenger.y = randoY;

    this.drawPassenger(currentPassenger);
  }
  drawPassenger(currentPassenger) {
    const passengerImage = new Image();
    passengerImage.src = currentPassenger.imagePath;

    ctx.drawImage(
      passengerImage,
      currentPassenger.x,
      currentPassenger.y,
      10,
      40
    );
  }

  moveLeft() {
    this.dx -= 10;
    this.dy = 0;
    console.log("moving left:", this.dx);
  }
  moveRight() {
    this.dx += 10;
    this.dy = 0;
    console.log("moving right:", this.dx);
  }
  moveUp() {
    this.dx = 0;
    this.dy -= 10;

    console.log("moving up:", this.dx);
  }
  moveDown() {
    this.dx = 0;
    this.dy += 10;

    console.log("moving down:", this.dx);
  }

  // changeDirections(event) {

  //     const LEFT_KEY = 37;
  //     const RIGHT_KEY = 39;
  //     const UP_KEY = 38;
  //     const DOWN_KEY = 40;

  //     // Prevent the snake from reversing

  //     if (changing_direction) return;
  //     changing_direction = true;
  //     const keyPressed = event.keyCode;
  //     const goingUp = this.dy === -10;
  //     const goingDown = this.dy === 10;
  //     const goingRight = this.dx === 10;
  //     const goingLeft = this.dx === -10;
  //     if (keyPressed === LEFT_KEY && !goingRight) {
  //       this.dx = -10;
  //       this.dy = 0;
  //     }
  //     if (keyPressed === UP_KEY && !goingDown) {
  //       this.dx = 0;
  //       this.dy = -10;
  //     }
  //     if (keyPressed === RIGHT_KEY && !goingLeft) {
  //       this.dx = 10;
  //       this.dy = 0;
  //     }
  //     if (keyPressed === DOWN_KEY && !goingUp) {
  //       this.dx = 0;
  //       this.dy = 10;
  //     }

  //   console.log(event);

  // }

  gameEnded(tramCars) {
    for (let i = 4; i < tramCars.length; i++) {
      if (tramCars[i].x === tramCars[0].x && tramCars[i].y === tramCars[0].y)
        return true;
    }
    const hitLeftWall = tramCars[0].x < 0;
    const hitRightWall = tramCars[0].x > this.width - 10;
    const hitToptWall = tramCars[0].y < 0;
    const hitBottomWall = tramCars[0].y > this.height - 10;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
  }
}
