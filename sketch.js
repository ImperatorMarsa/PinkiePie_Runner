var pinky;

function setup() {
  createCanvas(windowWidth, windowHeight - 5);
  pinky = new PinkiePie(0, 0, 200);
}

function draw() {
  background(20, 130, 255);

  pinky.Show();
}
