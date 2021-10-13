class PlayerArcher {
  constructor(x, y, width, height) {
    const options = {
      isStatic: true
    };

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.image = loadImage("./assets/playerArcher.png");

    World.add(world, this.body);
    Matter.Body.setAngle(this.body, -90); 
  }

  shoot(archerAngle) {
    archerAngle += 90;
    this.velocity = p5.Vector.fromAngle(archerAngle * (3.14 / 180));

    this.velocity.mult(0.5);

    Matter.Body.setVelocity(this.body, {
      x: this.velocity.x * (180 / 3.14),
      y: this.velocity.y * (180 / 3.14)
    });

    Matter.Body.setStatic(this.body, false);
  }




  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    if (keyIsDown(DOWN_ARROW) && angle < -73 ) {
      angle += 1;
      Matter.Body.setAngle(this.body, angle);
    }

    if (keyIsDown(UP_ARROW) && angle > -103) {
      angle -=1;
      Matter.Body.setAngle(this.body, angle);
    }

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
