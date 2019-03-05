/*******************************************************************************
tileMap.js
by Christopher Ruckes, 2018
with p5.js https://p5js.org/
*******************************************************************************/
/**
* Create a tile map from a matrix or random if no argument is past.
* @constructor TileMap
* @param {Image||Array} images one tileSheet or array of images or sprites.
* @param {Number} tileSize size of tiles in px. default 32
* @param {Array} array2D array of Numbers (indexes of image-array).
* @param {Object} pos object of position {x, y}.
**/

const TileMap = function(images, tileSize, array2D, pos) {

  this.images = images || [];
  this.tileSize = tileSize || 32;
  if (!Array.isArray(this.images) && this.images.canvas) // = !array & img
    this.images = sheetToArray(this.images, tileSize); // img => array

  this.array2D = array2D || new Array2D(3,3,(x,y)=> -1);
  this.pos = pos || {x:0,y:0};

  /**
  * Draw all tiles.
  * @method draw
  **/

  this.draw = function(iso) {

    push();
    translate(this.pos.x,this.pos.y);

    this.array2D.loop( (index,x,y)=> {

      if (index === -1) return; // emty nodes

      if (typeof index === 'number' && index >= 0 && index < this.images.length) {

        if (this.images[index].canvas) // = image

          if (!iso)
            image(this.images[index], x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
          else
            image(this.images[index], (x-y) * (this.tileSize/2), (x+y) * (this.tileSize*.25), this.tileSize, this.tileSize);

        else if (this.images[index].draw) // = object with draw function (sprite)

          this.images[index].draw(x, y, this.tileSize);
      }
    });
    pop();

  }

  /**
  * Change a tile.
  * @method changeTile
  * @param {Number} x x position of the tile.
  * @param {Number} y y position of the tile.
  * @param {Number} newIndex new index of tile array (-1 = emty).
  **/

  this.changeTile = function(x, y, newIndex) {

    if (typeof x !== 'number' || typeof y !== 'number' || typeof newIndex !== 'number')

      throw TypeError('invalid arguments: all arguments has to be a number.');

    else if (newIndex < -1 || newIndex > this.images.length-1)

      throw TypeError('invalid arguments: newIndex has to be >= -1 and <= '+ this.images.length-1 +'.')

    else

      this.array2D[y][x] = newIndex;

  };

  /**
  * Mouse over a tile.
  * @method mouseOverTile
  * @param {Number} x mouseX.
  * @param {Number} y mouseY.
  * @return {Boolean}
  **/

  this.mouseOverTile = function(mx, my, x, y) {

    if ( mx > this.pos.x + (x * this.tileSize)
      && mx < this.pos.x + (x * this.tileSize) + this.tileSize
      && my > this.pos.y + (y * this.tileSize)
      && my < this.pos.y + (y * this.tileSize) + this.tileSize )

      return { index: this.array2D[x][y], x: x, y: y } ;
    else
      return false;

  };

}


function sheetToArray(sheet, imgSize) {

  if (!sheet.canvas) {

    throw TypeError('invalid arguments: First argument has to be an image.');

  } else {

    sheet.loadPixels();
    let size = imgSize || 32; 
    let width = sheet.width / size;
    let height = sheet.height / size;
    let imgArray = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        
        imgArray.push( sheet.get(x*size, y*size, size, size) );
      }
    }
    return imgArray;

  }

}
