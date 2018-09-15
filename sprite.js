/*******************************************************************************
sprite.js
by Christopher Ruckes, 2018
*******************************************************************************/
var Sprite = function(spriteSheet, size, pos, scale, fps, start_img_index, pause) {

  this.spriteSheet = spriteSheet;
  this.pos = pos || createVector(0,0);
  this.size = size || 32;
  this.scale = scale || 1;
  this.fps = fps || 4;
  this.img_index = start_img_index || 0;
  this.pause = pause || false;
  this.frame = 0;

  this.spriteSheet.loadPixels();
 
  this.animation = [];
  let width = this.spriteSheet.width/this.size;
  let height = this.spriteSheet.height/this.size;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // > get() = get new p5.image outa spriteScheet
      this.animation.push(this.spriteSheet.get(x*this.size, y*this.size, this.size, this.size));
    }
  }



  this.draw = function(x,y,size) {

    push();
    translate(x * size, y * size);
    //imageMode(CENTER);
    image(this.animation[this.img_index], 0, 0, size, size);
    pop();

    this.animate();

  };

  // animate = update this.img_index
  this.animate = function() {

    if (this.pause)
      return;

    else if (frameCount % round(60 / this.fps) === 0 ) {

      if (this.img_index < this.animation.length-1) this.img_index ++;
      else this.img_index = 0;

    }

  };


}
