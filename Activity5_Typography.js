let customFont;

function preload() {
  customFont = loadFont('Comfortaa-Light.ttf'); 
}

function setup() {
  createCanvas(500, 500);
  background(48, 25, 52); // Dark purple background
  
  // Sub canvas for text background
  let cnv3 = createGraphics(width, height);
  cnv3.fill(255, 182, 193); // Soft pink color for the text background
  cnv3.noStroke();
  cnv3.rect(100, 200, 300, 100); // Draw a rectangle for text background
  
  // Display text
  cnv3.erase();
  cnv3.textSize(32);
  cnv3.textAlign(CENTER, CENTER);
  cnv3.fill(255); // White color for the text
  cnv3.textFont(customFont); 
  cnv3.text('Bath Spa University', 250, 250); // Displaying text
  
  
  image(cnv3, 0, 0);
}
