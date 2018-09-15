
var tileArray, array2D, tileMap; // example 1
var tileSheet, array2D_2, tileMap_2; // example 2
var spriteSheet, array2D_3, tileMap_3; // example 3

function preload() {

  tileArray = [ loadImage('img/gras.png'), loadImage('img/earth.png'), loadImage('img/sand.png') ];
  tileSheet = loadImage('img/tileSheet.png');
  spriteSheet = loadImage('img/see.png');
  
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // example 1
  array2D = new Array2D(3, 3, (x,y)=> floor(random(3)));
  //console.table(array2D);
  tileMap = new TileMap(tileArray, 64, array2D, {x:64,y:64});
  tileMap.changeTile(1,1,-1);

  // example 2
  array2D_2 = new Array2D(3, 3, (x,y)=> floor(random(1,9)));
  //console.table(array2D_2);
  tileMap_2 = new TileMap(tileSheet, 64, array2D_2, {x:320,y:64});

  // example 3
  array2D_3 = new Array2D(3, 3, (x,y)=> 0);
  //console.table(array2D_3);
  let sprite = new Sprite(spriteSheet);
  tileMap_3 = new TileMap([sprite], 64, array2D_3, {x:576,y:64});

}

function draw() {
  background(32, 32, 32);

  // example 1
  tileMap.draw();
  // example 2
  tileMap_2.draw();
  // example 3
  tileMap_3.draw();

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

