let pinky;
let desert;

// pinky = new PinkiePie(330, 330, 200);
// desert = new Desert((height * 4) / 5);
let world;
let circleBody;
let planeBody;

function setup() {
    createCanvas(windowWidth, windowHeight);

    world = new p2.World();

    let circleShape = new p2.Circle({ radius: 20 });
    circleBody = new p2.Body({
        mass: 1,
        position: [0, 60],
        angularVelocity: 10,
    });
    circleBody.addShape(circleShape);
    world.addBody(circleBody);

    // Add a plane
    let planeShape = new p2.Plane();
    planeBody = new p2.Body();
    planeBody.addShape(planeShape);
    world.addBody(planeBody);
}

function drawСircle() {
    let x = circleBody.position[0],
        y = circleBody.position[1];

    push();

    translate(x, y);
    rotate(circleBody.angle);
    circle(0, 0, 2 * circleBody.boundingRadius);

    line(0, 0, 0, circleBody.boundingRadius);
    rotate((2 * PI) / 3);
    line(0, 0, 0, circleBody.boundingRadius);
    rotate((2 * PI) / 3);
    line(0, 0, 0, circleBody.boundingRadius);

    pop();
}

function drawPlane() {
    let y = planeBody.position[1];
    line(-windowWidth / 2, y, windowWidth / 2, y);
}

// Animation loop
function draw() {
    background(255);
    translate(windowWidth / 2, windowHeight / 2);
    rotate(PI);

    world.step(1/60);

    drawСircle();
    drawPlane();
}
