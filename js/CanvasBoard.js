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
        ctx.drawImage(tramImage, element.x, element.y, 50, 50);
      });
    });
  }

  moveTram(tramCars) {
    // Horizontal velocity
    let dx = 30;
    // Vertical velocity
    let dy = 0;

    console.log(tramCars);
    const head = { x: tramCars[0].x + dx, y: tramCars[0].y + dy };
    tramCars.unshift(head);
    tramCars.pop();

    // move tram automatically, horizontal and vertical
    // checks if tram pick up passengers if true add tram car and addRandomPassenger
  }
  addRandomPassenger(currentPassenger) {
    const randoNumber = Math.floor(Math.random() * 10);
    const imageUrls = passengersArr[randoNumber];


    const randoX = Math.floor(Math.random() * 300);
    const randoY = Math.floor(Math.random() * 300);


    currentPassenger.imagePath = imageUrls
    currentPassenger.x = randoX;
    currentPassenger.y = randoY;
    
  }
  drawPassenger(currentPassenger) {
    const passengerImage = new Image();
    passengerImage.src = currentPassenger.imagePath;

    passengerImage.addEventListener("load", () => 
      ctx.drawImage(
        passengerImage,
        currentPassenger.randoX,
        currentPassenger.randoY,
        40,
        40
      )
    );
    console.log(passengerImage.src);
  
  }

  gameEnded() {
    // checks if tram has collided with its body OR collided with the canvas
  }

  changeDirections() {
    // Add document event listener on keydown
    // switch case left right top bottom arrow
  }
}
