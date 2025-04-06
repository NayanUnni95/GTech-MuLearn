let canvas = document.querySelector("canvas");
let restartBtn = document.getElementById("restartBtn");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

let colorArray = [
  "#FFFFFF",
  "#00FFFF",
  "#FF00FF",
  "#00FF00",
  "#FFFF00",
  "#FF4500",
  "#FF1493",
  "#FF69B4",
  "#8A2BE2",
  "#1E90FF",
  "#FF8C00",
  "#000000",
];

function Circle(x, y, radius, dx, dy, color, isStatic = false) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;
  this.color =
    color || colorArray[Math.floor(Math.random() * colorArray.length)];
  this.isStatic = isStatic;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    ctx.shadowBlur = 20;
    ctx.shadowColor = this.color;

    ctx.lineWidth = 4;
    if (!isStatic) {
      ctx.fillStyle = this.color;
      ctx.fill();
    } else {
      ctx.strokeStyle = this.color;
      ctx.stroke();
    }

    ctx.shadowBlur = 0;
  };

  this.update = function () {
    if (!this.isStatic) {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      this.x += this.dx;

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
      this.y += this.dy;
    }

    this.draw();
  };

  this.setPosition = function (x, y) {
    this.x = x;
    this.y = y;
  };

  this.isCollidingWith = function (otherCircle) {
    let dx = this.x - otherCircle.x;
    let dy = this.y - otherCircle.y;
    let distSquared = dx * dx + dy * dy;
    let radiusSumSquared = (this.radius + otherCircle.radius) ** 2;
    return distSquared < radiusSumSquared;
  };
}

let circleArray = [];
let disappearedCirclesCount = 0;

function initGame() {
  circleArray = [];
  disappearedCirclesCount = 0;

  for (let i = 0; i < 25; i++) {
    let radius = 15;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 10;
    let dy = (Math.random() - 0.5) * 10;
    circleArray.push(new Circle(x, y, radius, dx, dy));
  }

  let whiteRadius = 15;
  let whiteX = Math.random() * (innerWidth - whiteRadius * 2) + whiteRadius;
  let whiteY = Math.random() * (innerHeight - whiteRadius * 2) + whiteRadius;
  whiteCircle = new Circle(whiteX, whiteY, whiteRadius, 0, 0, "white", true);
  circleArray.push(whiteCircle);

  restartBtn.style.display = "none";
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText(
    `Ball Count: ${25 - disappearedCirclesCount}`,
    innerWidth - 250,
    90
  );

  circleArray = circleArray.filter((circle) => {
    if (circle !== whiteCircle && whiteCircle.isCollidingWith(circle)) {
      disappearedCirclesCount++;
      return false;
    }
    circle.update();
    return true;
  });

  if (disappearedCirclesCount >= 25) {
    restartBtn.style.display = "block";
  }
}

initGame();
animate();

restartBtn.addEventListener("click", function () {
  initGame();
});

canvas.addEventListener("mousemove", function (event) {
  let rect = canvas.getBoundingClientRect();
  let mouseX = event.clientX - rect.left;
  let mouseY = event.clientY - rect.top;
  whiteCircle.setPosition(mouseX, mouseY);
});

canvas.addEventListener("touchmove", function (event) {
  let touch = event.touches[0];
  let rect = canvas.getBoundingClientRect();
  let touchX = touch.clientX - rect.left;
  let touchY = touch.clientY - rect.top;
  whiteCircle.setPosition(touchX, touchY);
});
