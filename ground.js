class Ground {
  constructor(x, y, width, height,colour) {
      var options = {
          'isStatic': true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.colour = colour;

      World.add(world, this.body);
  }
  display() {
      push();
      var pos = this.body.position;
      rectMode(CENTER);
      fill(this.colour);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
  }
}