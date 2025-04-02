// Name: Aderinboye Ayomide Emmnauel
// File: index.html
// Date: 18 march 2025
// Student ID: 100994931
// Description: Adding animation to the balls and creating the balls.



// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Ball class to model each bouncing ball
class Ball {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }

    // Draw the ball on the canvas
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Update the ball's position and reverse velocity if it hits a wall
  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -this.velX;
    }
    if ((this.x - this.size) <= 0) {
      this.velX = -this.velX;
    }
    if ((this.y + this.size) >= height) {
        this.velY = -this.velY;
      }
      if ((this.y - this.size) <= 0) {
        this.velY = -this.velY;
      }
      this.x += this.velX;
      this.y += this.velY;
    }

    // Check for collisions with other balls and change color if a collision is detected
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

// Create an array to store all balls
const balls = [];

// Create 25 balls with random position, velocity, size, and color
while (balls.length < 25) {
    const size = random(10, 20);
    const ball = new Ball(
      // Ensure ball is drawn fully within the canvas boundaries
      random(size, width - size),
      random(size, height - size),
      random(-7, 7),
      random(-7, 7),
      randomRGB(),
      size
    );
    balls.push(ball);
  }

  // Animation loop to update and draw balls continuously
  function loop() {
    // Fill the canvas with a semi-transparent black rectangle to create a trail effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
    
    // Loop through all balls, drawing, updating, and checking for collisions
    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
    
    requestAnimationFrame(loop);
  }
  
  loop();