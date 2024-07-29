function setup() {
  createCanvas(500, 400);
  background(255); // Setting background to white
  
  noLoop(); // Stop draw() from looping continuously
}

function draw() {
  background(255); // Clear the background to white
  noStroke(); // Disable shape outlines

  let tileSize = 50; // Set the size of each tile

  // Loop through the canvas to create a grid of tiles
  for (let x = 0; x < width; x += tileSize) {
    for (let y = 0; y < height; y += tileSize) {
      let rand = random(1);

      // Setting random colours 
      fill(random(255), random(255), random(255));

      if (rand < 0.33) {
        // Drawing a circle
        ellipse(x + tileSize / 2, y + tileSize / 2, tileSize * 0.8);
      } else if (rand < 0.66) {
        // Drawing a rectangle
        rect(x + tileSize * 0.1, y + tileSize * 0.1, tileSize * 0.8, tileSize * 0.8);
      } else {
        // Drawing a triangle
        triangle(
          x + tileSize / 2, y + tileSize * 0.1,
          x + tileSize * 0.1, y + tileSize * 0.9,
          x + tileSize * 0.9, y + tileSize * 0.9
        );
      }
    }
  }
}
