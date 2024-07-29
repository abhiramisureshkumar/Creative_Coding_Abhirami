function setup() {
  createCanvas(400, 400);
  background(200, 220, 255);
}

function draw() {
  background(200, 220, 255);

  // Alien body
  fill(102, 255, 102); // Light green color
  ellipse(200, 200, 150, 200); // Body

  // Alien head
  fill(102, 255, 102); // Light green color
  ellipse(200, 130, 120, 120); // Head

  // Alien eyes
  fill(255); // White color
  ellipse(170, 110, 50, 70); // Left eye
  ellipse(230, 110, 50, 70); // Right eye
  
  fill(0); // Black color
  ellipse(170, 110, 20, 30); // Left pupil
  ellipse(230, 110, 20, 30); // Right pupil

  // Alien antennae
  stroke(102, 255, 102); // Light green color for antennae
  strokeWeight(4);
  line(150, 60, 130, 30); // Left antenna
  line(250, 60, 270, 30); // Right antenna
  
  fill(255, 0, 0); // Red color for antenna balls
  noStroke();
  ellipse(130, 30, 20, 20); // Left antenna ball
  ellipse(270, 30, 20, 20); // Right antenna ball

  // Alien mouth
  noFill();
  stroke(0); // Black color for the mouth
  strokeWeight(2);
  arc(200, 160, 80, 40, 0, PI); // Smile
}
