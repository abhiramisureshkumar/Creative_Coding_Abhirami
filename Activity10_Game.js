let catcher;
let objects = [];
let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let score = 0;
let missed = 0;
let gameState = 'title'; // 'title', 'playing', 'gameOver'

function setup() {
  createCanvas(600, 400); 
  catcher = new Catcher();
  noLoop(); 
  showTitleScreen();
}

function draw() {
  if (gameState === 'title') {
    showTitleScreen();
  } else if (gameState === 'playing') {
    background(220);
    
    // Draw and update catcher
    catcher.update();
    catcher.display();
    
    // Draw and update falling objects
    for (let i = objects.length - 1; i >= 0; i--) {
      objects[i].update();
      objects[i].display();
      if (objects[i].offscreen()) {
        missed++;
        objects.splice(i, 1);
      } else if (catcher.hits(objects[i])) {
        score++;
        objects.splice(i, 1);
      }
    }
    
    // Display score and missed count
    fill(0);
    textSize(18);
    textAlign(LEFT, TOP);
    text(`Score: ${score}`, 10, 10);
    text(`Missed: ${missed}`, 10, 30);
    
    if (missed >= 5) {
      gameState = 'gameOver';
      noLoop(); // Stop the game loop
      setTimeout(showGameOverScreen, 500); // Delay to show game over screen
    }
  } else if (gameState === 'gameOver') {
    showGameOverScreen();
  }
}

function showTitleScreen() {
  background(0);
  textAlign(CENTER, CENTER);
  
  // Title
  textSize(36);
  fill(255);
  text("Colorful Catch Game", width / 2, height / 2 - 100);
  
  // Instructions
  textSize(18);
  fill(255);
  text("Use arrow keys to move the catcher", width / 2, height / 2 - 30);
  text("Catch the falling colored objects", width / 2, height / 2);
  text("Avoid missing too many objects", width / 2, height / 2 + 30);
  
  // Start button
  textSize(18);
  text("Click to Start", width / 2, height / 2 + 100);
}

function showGameOverScreen() {
  background(0);
  textAlign(CENTER, CENTER);
  textSize(36);
  fill(255);
  text("Game Over", width / 2, height / 2 - 50);
  textSize(18);
  text(`Your Score: ${score}`, width / 2, height / 2);
  text("Click to Play Again", width / 2, height / 2 + 50);
}

function mousePressed() {
  if (gameState === 'title') {
    gameState = 'playing';
    loop(); // Start the game loop
    setInterval(createFallingObject, 1000); // Creating a new object every second
  } else if (gameState === 'gameOver') {
    resetGame();
    gameState = 'playing';
    loop(); // Starts the game loop
  }
}

function resetGame() {
  objects = [];
  score = 0;
  missed = 0;
  catcher = new Catcher();
}

function createFallingObject() {
  let x = random(width);
  let color = random(colors);
  objects.push(new FallingObject(x, color));
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    catcher.move(-1);
  } else if (keyCode === RIGHT_ARROW) {
    catcher.move(1);
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    catcher.move(0);
  }
}

// Catcher class
class Catcher {
  constructor() {
    this.x = width / 2;
    this.width = 80; 
    this.height = 20;
    this.speed = 10;
    this.direction = 0;
  }

  update() {
    this.x += this.direction * this.speed;
    this.x = constrain(this.x, 0, width - this.width);
  }

  display() {
    fill(0); // Black color
    noStroke();
    rect(this.x, height - this.height, this.width, this.height);
  }

  move(dir) {
    this.direction = dir;
  }

  hits(object) {
    return (object.x > this.x && object.x < this.x + this.width &&
            object.y + object.size / 2 > height - this.height);
  }
}

// FallingObject class
class FallingObject {
  constructor(x, color) {
    this.x = x;
    this.y = 0;
    this.size = 30;
    this.color = color;
    this.speed = 5;
  }

  update() {
    this.y += this.speed;
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }

  offscreen() {
    return this.y > height;
  }
}
