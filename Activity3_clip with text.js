function setup() {
  createCanvas(500, 500);
  background(48, 25, 52); 
  
  // Sub canvas for shapes
  let cnv4 = createGraphics(width, height); 
  let ctx2 = cnv4.canvas.getContext("2d");
  cnv4.noStroke();
  cnv4.fill(255, 182, 193); 
  cnv4.rect(100, 200, 200, 200);
  ctx2.clip(); 
  cnv4.fill(255, 255, 255); 
  cnv4.circle(200, 230, 100); 
  image(cnv4, 0, 0); 

  // Sub canvas for text
  let cnv3 = createGraphics(width, height);
  cnv3.fill(255, 255, 255); 
  cnv3.noStroke();
  cnv3.rect(100, 200, 200, 200);  
  cnv3.erase(); 
  cnv3.textSize(50);
  cnv3.fill(0); 
  cnv3.text('HELLO', 140, 350); 
  image(cnv3, 0, 0); 
}
