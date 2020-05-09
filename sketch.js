let pinky;
let desert;

function setup() {
    createCanvas(windowWidth, windowHeight - 5);

    pinky = new PinkiePie(330, 330, 200);
    desert = new Desert((height * 4) / 5);
}

function draw() {
    background(20, 130, 255);

    desert.Show();
    pinky.Show();
    for (let i = 0; i < desert.cactusis.length; i++) {
        desert.cactusis[i].Show();
        if (pinky.Collision(desert.cactusis[i])) {
            setup();
        }
    }
}

function keyPressed() {
    if (key == " ") {
        pinky.Jump(desert.y);
    }
}
