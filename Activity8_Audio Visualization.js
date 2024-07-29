let mic;
let fft;
let numCircles = 30; // Number of concentric circles

function setup() {
  createCanvas(500, 500); 
  mic = new p5.AudioIn(); // Creating an audio input object
  mic.start(); // Starts capturing audio from the microphone
  
  fft = new p5.FFT(); // Creates a Fast Fourier Transform object
  fft.setInput(mic); // Set the FFT input to the microphone
  
  noFill(); 
  colorMode(HSB, 255); // Setting color mode to HSB for vibrant colors
}

function draw() {
  background(0); // Black background
  let spectrum = fft.analyze(); // Getting the frequency spectrum from the microphone
  let avgFreq = fft.getEnergy(20, 2000); 

  // Draw concentric circles
  for (let i = 0; i < numCircles; i++) {
    let radius = map(i, 0, numCircles, 10, width / 2); 
    let alpha = map(i, 0, numCircles, 50, 255); 
    let scaleFactor = map(avgFreq, 0, 255, 0.5, 2); 

    let hue = map(i, 0, numCircles, 0, 255); // Color hue based on circle index
    let c = color(hue, 255, 255, alpha); // Setting the color with hue and transparency
    
    stroke(c); // Setting the stroke color for the circles
    strokeWeight(2); // Setting the stroke weight for better visibility
    
    ellipse(width / 2, height / 2, radius * scaleFactor * 2); // Drawing a circle
  }
}
