/*##############################################################################
array2D.js
by Christopher R. , 2018
##############################################################################*/
"use strict";
/**
* Create a 2D array and returs it.
* @constructor Array2D
* @return {Array}
* @param {Number} width length of inner arrays
* @param {Number} height length of outer array
* @optional
* @param {All} initValue
**/

const Array2D = function(width, height, initValue) {

  let arr = Array(height);

  for (let y = 0; y < arr.length; y++) {

    arr[y] = Array(width);

    if (initValue) {
      
      for (let x = 0; x < arr[y].length; x++) {

        if (typeof initValue === 'function') {

          arr[y][x] = initValue(x,y);
        } else
          arr[y][x] = initValue;
      }
    }
  }
  return arr;

}

/**
 * Iterate throu the array and all arrays in it.
 * @method loop
 * @param {Function} fun function to be executet at the loop end.
 * @optional @param {Boolean||String} direction default = true = '++' = iterate down/forward or false = '--' = iterate up/backwards.
**/
  // @examle:
  // array2D = new Array2D(3, 2, (x,y)=> x +','+ y );
  // array2D.loop(()=>);
  // array2D.loop('--', ()=>);

Array.prototype.loop = function() {

  if (arguments.length > 0) {

    if (typeof arguments[0] === 'function') {
      this.f = arguments[0];
      this.d = true;
    } else if (typeof arguments[1] === 'function') {
      this.f = arguments[1];
      if (typeof arguments[0] === 'boolean' || arguments[0] === '++' || arguments[0] === '--')
        this.d = direction;
        else this.d = true;
    } else {
      throw TypeError('wrong arguments. need a function');
    }
  } else // no arguments
    throw TypeError('no arguments. need a function');


  if (this.d || this.d === '++') {

    for (let x = 0; x < this.length; x++) {

      if (Array.isArray(this[x])) {

        for (let y = 0; y < this[x].length; y++) {

          this.f(this[x][y], y, x);
        }
      } else
        this.f(this[x], x, '-');
    }

  } else {

    for (let x = this.length-1; x >= 0; x--) {

      if (Array.isArray(this[x])) {

        for (let y = this[x].length-1; y >= 0; y--) {

          this.f(this[x][y], y, x);
        }
      } else
        this.f(this[x], x, '-');
    }
    
  }

};
