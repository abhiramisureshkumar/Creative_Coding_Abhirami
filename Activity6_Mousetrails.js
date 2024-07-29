let trail = []; 
function setup() {
  createCanvas(600, 500); 
  background(0); //Black background
  noStroke(); 
}

function draw() {
  background(0, 50); 

  // Adding the current mouse position to the trail
  trail.push({ x: mouseX, y: mouseY, r: random(40, 80) }); // Increase the size range

  // Limiting  the number of trail elements
  if (trail.length > 50) {
    trail.shift();
  }

  // Drawing the trail
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let alpha = map(i, 0, trail.length, 0, 255); // Gradually fade out

    // Calculating the color based on position in the trail array
    let hueValue = map(i, 0, trail.length, 0, 255);
    colorMode(HSB, 255); // Using HSB color mode
    fill(hueValue, 255, 255, alpha); // Setting the color with hue and transparency
    
    ellipse(pos.x, pos.y, pos.r, pos.r); // Drawing a circle at the trail position with larger size
  }
}

function mouseMoved() {
  
  trail.push({ x: mouseX, y: mouseY, r: random(40, 80) }); 

  if (trail.length > 50) {
    trail.shift();
  }
}
