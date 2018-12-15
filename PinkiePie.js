class PinkiePie {
  constructor() {
    this.head = loadImage("./Sourse/FullHead.svg");
    this.body = loadImage("./Sourse/Body.svg");
  }

  Show() {
    var sizes=300
    image(this.body, -sizes/2, -sizes/2, sizes, sizes);
    image(this.head, -sizes/2+sizes*.1, -sizes/2-sizes*.2, sizes, sizes);
  }
}
