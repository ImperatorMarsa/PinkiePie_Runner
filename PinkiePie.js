class PinkiePie {
    constructor(x, y, sizes) {
        this.sizes = sizes;
        this.x = x;
        this.y = y;
        this.ground = y;

        this.speed = 0;
        this.gravity = 0.5;
        this.head = loadImage("./Sources/FullHead.svg");
        this.body = loadImage("./Sources/Body.svg");
    }

    Show() {
        push();

        translate(this.x, this.y);

        image(
            this.body,
            -this.sizes / 2,
            -this.sizes / 2,
            this.sizes,
            this.sizes
        );
        image(
            this.head,
            -this.sizes / 2 + this.sizes * 0.1,
            -this.sizes / 2 - this.sizes * 0.2,
            this.sizes,
            this.sizes
        );

        pop();
        this.Dynamic();
    }

    Jump(ground) {
        if (this.ground <= this.y) {
            this.ground = ground;
            this.speed = -17;
            this.y += this.speed + this.gravity / 2;
        }
    }

    Dynamic() {
        if (this.ground > this.y) {
            this.y += this.speed + this.gravity / 2;
            this.speed += this.gravity;
        } else {
            this.y = this.ground;
        }
    }

    Collision(cactus) {
        if (
            cactus.x < this.x + this.sizes / 2 &&
            cactus.x > this.x - this.sizes / 2 &&
            cactus.y < this.y + this.sizes / 2 &&
            cactus.y > this.y - this.sizes / 2
        ) {
            return true;
        }
    }
}
