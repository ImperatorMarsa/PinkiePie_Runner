class PinkiePie {
  constructor() {
    this.img = loadImage("./Sourse/FullHead.svg");
  }

  Show() {
    image(this.img, -100, -100, 200, 200);
  }
}
