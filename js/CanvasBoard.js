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


class CanvasBoard {
  constructor() {
    this.tramImg = "images/tram.png";
    this.backgroundImg = "images/cairo-map.png";
    
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

  
  // gameEnded(tramCars) {
  //   for (let i = 4; i < tramCars.length; i++) {
  //     if (tramCars[i].x === tramCars[0].x && tramCars[i].y === tramCars[0].y)
  //       return true;
  //   }
  //   const hitLeftWall = tramCars[0].x < 0;
  //   const hitRightWall = tramCars[0].x > this.width - 10;
  //   const hitToptWall = tramCars[0].y < 0;
  //   const hitBottomWall = tramCars[0].y > this.height - 10;
  //   return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
  // }
}
