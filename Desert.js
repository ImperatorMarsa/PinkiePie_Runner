class Desert {
  constructor(y, sizes) {
    this.y = y;

    this.dist = 0;
    this.speed = 0.2;
    this.boost = 0.001;
    this.counter = 0;
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
  }
}
