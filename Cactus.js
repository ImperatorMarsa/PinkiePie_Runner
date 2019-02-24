class Cactus {
  constructor(x, y) {
    this.y = y;
    this.x = x;

    this.w = 45;
    this.h = 90;
  }

  Show() {
    push();

    fill(0, 200, 0);
    noStroke();
    translate(this.x, this.y);

    rect(-this.w, -this.h, this.w, this.h);

    pop();
  }
}
