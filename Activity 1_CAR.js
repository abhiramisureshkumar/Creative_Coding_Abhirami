
function setup() {
  createCanvas(800, 400);
  background(200);

  // Car body
  fill(0, 102, 153);
  rect(200, 200, 400, 100);

  // Car roof
  fill(0, 102, 153);
  rect(270, 150, 260, 50);

  // Windows
  fill(255);
  rect(285, 160, 90, 40);
  rect(385, 160, 90, 40);
  rect(485, 160, 30, 40);

  // Wheels
  fill(0);
  ellipse(275, 300, 80, 80);
  ellipse(525, 300, 80, 80);

  // Wheel details
  fill(255);
  ellipse(275, 300, 40, 40);
  ellipse(525, 300, 40, 40);
}
