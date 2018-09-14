
var tileArray, tileSheet, array2D, tileMap;

function preload() {

  tileArray = [ loadImage('img/gras.png'), loadImage('img/earth.png'), loadImage('img/sand.png') ];
  tileSheet = loadImage('img/gras.png');
  
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  array2D = new Array2D(3, 3, (x,y)=> floor(random(3)));
  console.table(array2D);
  tileMap = new TileMap(tileArray, 64, array2D, {x:64,y:64});
  tileMap.changeTile(1,1,-1);

}

function draw() {
  background(32, 32, 32);

  tileMap.draw();

}

