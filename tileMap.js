/*******************************************************************************
tileMap.js
by Christopher Ruckes, 2018
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

  this.images = images;
  this.tileSize = tileSize || 32;
  this.array2D = array2D || new Array2D(3,3,(x,y)=> -1);
  this.pos = pos || {x:0,y:0};


  this.draw = function() {

    translate(this.pos.x,this.pos.y);

    this.array2D.loop( (index,x,y)=> {

      if (index === -1) return; // emty nodes

      if (typeof index === 'number' && index >= 0 && index < this.images.length) {

        if (this.images[index].canvas) { // image

          image(this.images[index], x *tileSize, y *tileSize, tileSize, tileSize);
         
        } else { // sprite

          this.images[index].draw(x, y, tileSize);

        }

      }
        

    });

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

      this.array2D[x][y] = newIndex;

  };

}



