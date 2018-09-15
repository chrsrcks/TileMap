
var tileArray, tileSheet, array2D, tileMap, tileMap_2;

function preload() {

  tileArray = [ loadImage('img/gras.png'), loadImage('img/earth.png'), loadImage('img/sand.png') ];
  tileSheet = loadImage('img/tileSheet.png');
  
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // example 1
  array2D = new Array2D(3, 3, (x,y)=> floor(random(3)));
  console.table(array2D);
  tileMap = new TileMap(tileArray, 64, array2D, {x:64,y:64});
  tileMap.changeTile(1,1,-1);

  // example 2
  array2D_2 = new Array2D(3, 3, (x,y)=> floor(random(1,9)));
  console.table(array2D_2);
  let tileArray_2 = sheetToArray(tileSheet, 32);
  tileMap_2 = new TileMap(tileArray_2, 64, array2D_2, {x:320,y:64});

}

function draw() {
  background(32, 32, 32);

  // example 1
  tileMap.draw();
  // example 2
  tileMap_2.draw();

}

function mouseClicked() {

  this.array2D.loop( (index,x,y)=> {

    let tile = tileMap.mouseOverTile(mouseX,mouseY, x, y);

    if (tile) {
      //tileMap.array2D[tile.y][tile.x] = floor(random(-1,tileMap.images.length));
      tileMap.changeTile(tile.x, tile.y, floor(random(-1,tileMap.images.length)));
    }

  });

  this.array2D_2.loop( (index,x,y)=> {

    let tile = tileMap_2.mouseOverTile(mouseX,mouseY, x, y);

    if (tile) {
      //tileMap.array2D[tile.y][tile.x] = floor(random(-1,tileMap.images.length));
      tileMap_2.changeTile(tile.x, tile.y, floor(random(-1,tileMap_2.images.length)));
    }

  });
  
  
}

