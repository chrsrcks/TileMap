
var tileArray, array2D, tileMap; // example 1
var tileSheet, array2D_2, tileMap_2; // example 2
var spriteSheet, array2D_3, tileMap_3; // example 3
var obj, array2D_4, tileMap_4; // example 4
var array2D_5, tileMap_5, tileArray2;

function preload() {

  tileArray = [ loadImage('img/gras.png'), loadImage('img/earth.png'), loadImage('img/sand.png') ];
  tileSheet = loadImage('img/tileSheet.png');
  spriteSheet = loadImage('img/see.png');
  tileArray2 = [ loadImage('img/tile_iso_gras.png') ];
  
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
  tileMap_2 = new TileMap(tileSheet, 32, array2D_2, {x:320,y:64}); // 32 = original tilesize
  tileMap_2.tileSize = 64; // scale map

  // example 3
  array2D_3 = new Array2D(3, 3, (x,y)=> 0);
  //console.table(array2D_3);
  let sprite = new Sprite(spriteSheet);
  tileMap_3 = new TileMap([sprite], 64, array2D_3, {x:576,y:64});

  // example 4
  array2D_4 = new Array2D(3, 3, (x,y)=> 0);
  //console.table(array2D_4);
  obj = { 
    draw: function(x,y,s) {
      push();
      noStroke();
      fill(x*100,100,y*100);
      rect(x*s,y*s,s,s);
      pop();
    } 
  };
  tileMap_4 = new TileMap([obj], 64, array2D_4, {x:832,y:64});


  // example 5  isometric
  array2D_5 = new Array2D(6, 6, (x,y)=> 0);
  //console.table(array2D_2);
  tileMap_5 = new TileMap(tileArray2, 64, array2D_5, {x:128,y:128}); // 32 = original tilesize
  //tileMap_5.tileSize = 64; // scale map

}

function draw() {
  background(32, 32, 32);

  // example 1
  tileMap.draw();
  fill(255);
  text('1)    images from array', 32, 32);
  // example 2
  tileMap_2.draw();
  text('2)    images from tileSheet', 288, 32);
  // example 3
  tileMap_3.draw();
  text('3)    sprites ', 544, 32);
  // example 4
  tileMap_4.draw();
  text('4)    objects ', 808, 32);

  // example 5
  push();
  translate(320,256);
  //rotate(.75);
  tileMap_5.draw(true);
  pop();
  text('5)    isometric ', 288, 320);

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

