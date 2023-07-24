class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
  }

  display() {

  push();
  translate(this.x,this.y);
  rotate(this.angle)
  imageMode(CENTER);
  image(this.canon_image,0,0,this.weight,this.height);
  pop();
  image

  }

}

