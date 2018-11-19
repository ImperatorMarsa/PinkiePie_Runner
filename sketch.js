var a = 0;
var pinky;

function setup() {
  createCanvas(windowWidth - 17, 500);
  pinky = new PinkiePie();
}

function draw() {
  background(0);
  line(0, 0, mouseX, mouseY);

  push();
  translate(width / 2, height / 2);
  rotate(-(a / 1000) * PI);
  pinky.Show();
  pop();

  a++;
  if (a > 100000) {
    a = 0;
  }
}
