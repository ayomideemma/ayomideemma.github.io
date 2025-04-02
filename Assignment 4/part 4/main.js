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

// Reference to the score paragraph (assumes a <p> element exists in your HTML)
const scorePara = document.querySelector("p");


// Base Shape class
class Shape {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}

// Ball class to model each bouncing ball
class Ball extends Shape{
    constructor(x, y, velX, velY, color, size) {
    super(x, y, velX, velY);
    this.color = color;
    this.size = size;
    this.exists = true;
    }

    // Draw the ball if it exists
    draw() {
      if (!this.exists) return;
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
    }

  // Update position and bounce off the canvas edges
  update() {
    if (!this.exists) return;
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

  // Detect collisions with other balls (only if both exist)
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball && ball.exists) {
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

// EvilCircle class extending Shape; controlled by user input to "eat" balls
class EvilCircle extends Shape {
  constructor(x, y) {
    // Set a fixed velocity of 20 for both x and y directions
    super(x, y, 20, 20);
    this.color = 'white';
    this.size = 10;
    // Add event listener for key presses to move the evil circle
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
          this.x -= this.velX;
          break;
        case "d":
          this.x += this.velX;
          break;
        case "w":
          this.y -= this.velY;
          break;
        case "s":
          this.y += this.velY;
          break;
      }
    });
  }

// Draw the evil circle as an outlined circle
draw() {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
}

// Keep the evil circle within the bounds of the canvas
checkBounds() {
  if ((this.x + this.size) >= width) {
    this.x = width - this.size;
  }
  if ((this.x - this.size) <= 0) {
    this.x = this.size;
  }
  if ((this.y + this.size) >= height) {
    this.y = height - this.size;
  }
  if ((this.y - this.size) <= 0) {
    this.y = this.size;
  }
}

// Check collision with each ball; "eat" the ball if it touches the evil circle
collisionDetect() {
  for (const ball of balls) {
    if (ball.exists) {
      const dx = this.x - ball.x;
      const dy = this.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.size + ball.size) {
        ball.exists = false;
        ballCount--;
        scorePara.textContent = "Ball count: " + ballCount;
      }
    }
  }
}
}


// Create an array to hold our balls and a counter for the score
const balls = [];
let ballCount = 0;

// Create 25 balls with random properties
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
    ballCount++;
  }

  // Create one evil circle instance at a random position
const evil = new EvilCircle(
  random(0, width),
  random(0, height)
);

// Update the score display initially
scorePara.textContent = "Ball count: " + ballCount;

  // Animation loop to update and draw balls continuously
  function loop() {
    // Fill the canvas with a semi-transparent black rectangle to create a trail effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
    
    // Process each ball if it exists
    for (const ball of balls) {
      if (ball.exists){
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  }

  // Process the evil circle
  evil.draw();
  evil.checkBounds();
  evil.collisionDetect();
    
    requestAnimationFrame(loop);
  }

  loop();