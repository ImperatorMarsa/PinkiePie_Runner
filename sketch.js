let pinky;
let desert;

// pinky = new PinkiePie(330, 330, 200);
// desert = new Desert((height * 4) / 5);

function gameStart(canvas) {
    let ctx, w, h, world, boxBody, planeBody;
    init();
    animate();

    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        w = canvas.width;
        h = canvas.height;

        ctx = canvas.getContext("2d");
        ctx.lineWidth = 0.05;

        // Init p2.js
        world = new p2.World();

        // Add a box
        boxShape = new p2.Box({ width: 2, height: 1 });
        boxBody = new p2.Body({
            mass: 1,
            position: [0, 3],
            angularVelocity: 1,
        });
        boxBody.addShape(boxShape);
        world.addBody(boxBody);

        // Add a plane
        planeShape = new p2.Plane();
        planeBody = new p2.Body();
        planeBody.addShape(planeShape);
        world.addBody(planeBody);
    }

    function drawbox() {
        ctx.beginPath();
        let x = boxBody.position[0],
            y = boxBody.position[1];
        ctx.save();
        ctx.translate(x, y); // Translate to the center of the box
        ctx.rotate(boxBody.angle); // Rotate to the box body frame
        ctx.rect(
            -boxShape.width / 2,
            -boxShape.height / 2,
            boxShape.width,
            boxShape.height
        );
        ctx.stroke();
        ctx.restore();
    }

    function drawPlane() {
        let y = planeBody.position[1];
        ctx.moveTo(-w, y);
        ctx.lineTo(w, y);
        ctx.stroke();
    }

    function render() {
        // Clear the canvas
        ctx.clearRect(0, 0, w, h);

        // Transform the canvas
        // Note that we need to flip the y axis since Canvas pixel coordinates
        // goes from top to bottom, while physics does the opposite.
        ctx.save();
        ctx.translate(w / 2, h / 2); // Translate to the center
        ctx.scale(50, -50); // Zoom in and flip y axis

        // Draw all bodies
        drawbox();
        drawPlane();

        // Restore transform
        ctx.restore();
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Move physics bodies forward in time
        world.step(1 / 60);

        // Render scene
        render();
    }
}
