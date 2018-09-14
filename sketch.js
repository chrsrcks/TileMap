
var tileArray, tileSheet, array2D, tileMap, tileMap_2;

function preload() {

  tileArray = [ loadImage('img/gras.png'), loadImage('img/earth.png'), loadImage('img/sand.png') ];
  tileSheet = loadImage('img/tileSheet.png');
  
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  array2D = new Array2D(3, 3, (x,y)=> floor(random(3)));
  console.table(array2D);
  tileMap = new TileMap(tileArray, 64, array2D, {x:64,y:64});
  tileMap.changeTile(1,1,-1);

  array2D_2 = new Array2D(3, 3, (x,y)=> floor(random(1,9)));
  console.table(array2D_2);
  let tileArray_2 = sheetToArray(tileSheet, 32);
  tileMap_2 = new TileMap(tileArray_2, 64, array2D_2, {x:320,y:64});

}

function draw() {
  background(32, 32, 32);

  tileMap.draw();
  tileMap_2.draw();

}

