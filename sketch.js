let pinky;
let desert;
function setup() {
  createCanvas(windowWidth, windowHeight - 5);

  pinky = new PinkiePie(330, 330, 200);
  desert = new Desert((height * 4) / 5, height / 5);
}

function draw() {
  background(20, 130, 255);

  desert.Show();
  pinky.Show();
}

function keyPressed() {
  if (key == " ") {
    pinky.Jump(desert.y);
  }
}
