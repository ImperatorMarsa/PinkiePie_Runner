class Desert {
    constructor(y) {
        this.y = y;

        this.dist = 0;
        this.speed = 0.2;
        this.boost = 0.001;
        this.counter = 0;

        this.cactusis = [];
        for (let i = 0; i < 7; i++) {
            let I = random(1, 2) * i;
            let X = width * (1 + random(1 * I, 5 * I));
            let Y = this.y;
            this.cactusis.push(new Cactus(X, Y));
        }
    }

    Show() {
        push();

        translate(0, this.y);
        strokeWeight((width * height) / 2e5);
        strokeJoin(ROUND);
        strokeCap(ROUND);
        stroke(255, 174, 0);
        fill(250, 226, 47);

        beginShape();
        vertex(-3, 0);
        for (let i = 0; i <= (width + 10) / 10; i++) {
            vertex(i * 10, (height / 25) * noise(i / 5 + this.dist));
        }
        vertex(width + 3, 0);
        vertex(width + 3, height + 3);
        vertex(-3, height + 3);
        endShape(CLOSE);

        pop();

        this.dist += this.speed;
        if (this.counter >= 20) {
            this.speed += this.boost;
            this.counter = 0;
        }
        this.counter++;

        for (let i = 0; i < this.cactusis.length; i++) {
            this.cactusis[i].x -= this.speed * 50;
            if (this.cactusis[i].x < -10) {
                this.cactusis.splice(i, 1);
                let X = width * (1 + random(1, 5));
                let Y = this.y;
                this.cactusis.push(new Cactus(X, Y));
            }
        }
    }
}
