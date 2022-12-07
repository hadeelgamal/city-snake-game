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
    this.backgroundImg = "images/cairo-map.png";
    this.score = 0;
    this.has_eaten = false;

    // this.changing_direction = false;
    this.width = canvas.width;
    this.height = canvas.height;
    
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

  drawTramCar(tramCars, tramImageSrc) {
    const width =
      tramImageSrc.includes("up") || tramImageSrc.includes("down") ? 30 : 50;
    const height =
      tramImageSrc.includes("up") || tramImageSrc.includes("down") ? 50 : 30;

    const clearWidth =
      tramImageSrc.includes("up") || tramImageSrc.includes("down") ? 50 : 30;
    const clearHeight =
      tramImageSrc.includes("up") || tramImageSrc.includes("down") ? 30 : 50;
    tramImage.src = tramImageSrc;
    tramImage.addEventListener("load", () => {
      tramCars.forEach((element) => {
        ctx.clearRect(element.x, element.y, clearWidth, clearHeight);
        ctx.drawImage(tramImage, element.x, element.y, width, height);
      });
    });
  }

  // if currentPassenger.x = tramcars.foreach(element) element.x then it has eaten

  pickUpPassenger(currentPassenger, tram) {
    this.has_eaten =
      tram.tramCars[0].x <= currentPassenger.x  &&
      tram.tramCars[0].y <= currentPassenger.y;
    if (this.has_eaten) {
      this.score += 10;
      console.log(this.score);
      tram.moveTram(this.has_eaten)
      this.has_eaten = false;
      console.log(this.has_eaten);
      this.addRandomPassenger(currentPassenger);
    }
  }

  addRandomPassenger(currentPassenger) {
    let randoNumber = Math.floor(Math.random() * 10);
    let imageUrl = passengersArr[randoNumber];

    let randoX = Math.floor(Math.random() * 300);
    let randoY = Math.floor(Math.random() * 300);

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

  gameEnded(tramCars) {
    const hitLeftWall = tramCars[0].x == 0;
    const hitRightWall = tramCars[0].x + 50 >= this.width;
    const hitToptWall = tramCars[0].y <= 0;
    const hitBottomWall = tramCars[0].y + 50 == this.height;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
  }
}
