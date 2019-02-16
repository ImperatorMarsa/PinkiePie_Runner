class PinkiePie {
  constructor(x, y, sizes) {
    this.sizes = sizes;
    this.x = x;
    this.y = y;

    this.head = loadImage("./Sourse/FullHead.svg");
    this.body = loadImage("./Sourse/Body.svg");
  }

  Show() {
    push();
    translate(this.x, this.y);
    image(this.body, -this.sizes / 2, -this.sizes / 2, this.sizes, this.sizes);
    image(
      this.head,
      -this.sizes / 2 + this.sizes * 0.1,
      -this.sizes / 2 - this.sizes * 0.2,
      this.sizes,
      this.sizes
    );
  }
}
