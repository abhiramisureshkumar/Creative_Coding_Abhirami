
let table;

function preload() {
  // Loading the CSV file
  table = loadTable('music_genres.csv', 'csv', 'header', loadSuccess, loadError);
}

function loadSuccess() {
  console.log("CSV loaded successfully");
}

function loadError() {
  console.log("Error loading CSV");
}

function setup() {
  createCanvas(600, 650);
  noLoop(); 
  if (table) {
    console.log(table.getRows()); // Log the rows to check if data is loaded
  }
}

function draw() {
  // Gray background
  background(200);

  // Heading text
  textSize(24); // Text size
  textAlign(CENTER, CENTER); // Align text to the center
  fill(0);
  text("Popularity of Music Genres", width / 2, 30); // Draw heading at the top center

  let total = 0;
  // Calculating the total percentage by summing up all values
  table.getRows().forEach(row => total += row.getNum('Percentage'));

  console.log("Total percentage:", total); // Debug total percentage

  let angleStart = 0;
  const labelOffset = 250; // Label positioning

  // Iterate through each row of the table
  table.getRows().forEach(row => {
    let genre = row.getString('Genre');
    let percentage = row.getNum('Percentage');

    console.log("Genre:", genre, "Percentage:", percentage); // Debug genre and percentage

    // Calculating the end angle for the current slice
    let angleEnd = angleStart + (percentage / total) * TWO_PI;

    // Setting a random fill color for the pie slice
    fill(random(255), random(255), random(255));
    // Drawing the pie slice using arc
    arc(width / 2, height / 2 + 50, 400, 400, angleStart, angleEnd, PIE);

    // Calculating label position
    let labelAngle = angleStart + (angleEnd - angleStart) / 2; // Midpoint angle for label
    let labelX = width / 2 + cos(labelAngle) * labelOffset; // X position of the label
    let labelY = height / 2 + 50 + sin(labelAngle) * labelOffset;
    fill(0);
    textAlign(CENTER, CENTER);
    text(`${genre} (${percentage}%)`, labelX, labelY); // Corrected text syntax

    // Updating the starting angle for the next slice
    angleStart = angleEnd;
  });
}
