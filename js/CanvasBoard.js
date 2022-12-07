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
const passengerImage = new Image();

class CanvasBoard {
  constructor() {
    this.backgroundImg = "images/cairo-map.png";
    this.tramImg = "images/tram.png";
    this.score = 0;
    this.has_eaten = false;
    this.width = canvas.width;
    this.height = canvas.height;
  }

  
  drawTramCar(tramCars) {
    tramImage.src = this.tramImg;
    tramImage.addEventListener("load", () => {
      tramCars.forEach((element) => {
        ctx.drawImage(tramImage, element.x, element.y, 50, 50);
      });
    });
  }

  pickUpPassenger(currentPassenger, tram) {
    let xCollide = checkEpsilon(tram.tramCars[0].x, currentPassenger.x, 60);
    let yCollide = checkEpsilon(tram.tramCars[0].y, currentPassenger.y, 60);
    
    console.log("epslionTest:", xCollide, yCollide);
    

    this.has_eaten =
      tram.tramCars[0].x <= currentPassenger.x  &&
      tram.tramCars[0].y <= currentPassenger.y  &&
      (xCollide && yCollide);
    console.log("eatenStatus:",this.has_eaten);
    if (this.has_eaten) {
      console.log("currentPassengerStatus:",currentPassenger.x, currentPassenger.y);
      console.log("firstTramStatus:", tram.tramCars[0].x, tram.tramCars[0].y);

      this.score += 10;
      console.log(this.score);
      tram.moveTram(this.has_eaten);
      this.has_eaten = false;
      this.addRandomPassenger(currentPassenger);
    }
  }

   updateScore() {
    let score = this.score; 
    ctx.font = '18px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(`Score: ${score}`, 650, 50);
    console.log("score:",score);
  }

  addRandomPassenger(currentPassenger) {
    let randoNumber = Math.floor(Math.random() * 10);
    let imageUrl = passengersArr[randoNumber];

    let randoX = Math.floor(Math.random() * 500);
    let randoY = Math.floor(Math.random() * 500);

    currentPassenger.imagePath = imageUrl;
    currentPassenger.x = randoX;
    currentPassenger.y = randoY;

    this.drawPassenger(currentPassenger);
  }

  drawPassenger(currentPassenger) {
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

function checkEpsilon(firstValue, secondValue, epsilon) {
  console.log(Math.abs(firstValue - secondValue) <= epsilon);
  return Math.abs(firstValue - secondValue) <= epsilon;
}
