var a = 0;
var img;

function setup() {
  createCanvas(666, 666);
  img = loadImage("./Sourse/FullHead.svg");
}

function draw() {
  background(0);
  line(0, 0, mouseX, mouseY);

  push();
  translate(width / 2, height / 2);
  rotate(-(a / 1000) * PI);
  image(img, -width / 12, -height / 12, width / 6, height / 6);
  pop();

  a++;
  if (a > 100000) {
    a = 0;
  }
}
