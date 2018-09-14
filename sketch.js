var tileArray, tileSheet, array2D, tileMap;

function preload() {

  tileArray = [ loadImage('img/gras.png'), loadImage('img/earth.png'), loadImage('img/sand.png') ];
  tileSheet = loadImage('img/gras.png');
  // spriteSheet.water_dark = [ loadImage('img/water_dunkel.png'), loadImage('img/water_2_dunkel.png'), loadImage('img/water_3_dunkel.png') ];
  // spriteSheet.beach = [ loadImage('img/beach.png'), loadImage('img/beach_2.png') ];

}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // let logArray2D = new Array2D(3, 3, (x,y)=> x +' : '+ y );
  // console.table(logArray2D);
  // logArray2D.loop((value,x,y)=> logArray2D[x][y] = -1);

  array2D = new Array2D(3, 3, (x,y)=> floor(random(3)));
  tileMap = new TileMap(tileArray, 64, array2D, {x:64,y:64});
  // array2D.loop( (value, x, y)=> console.log(value.constructor.name +': '+ value +' ['+ x +']['+ y +']') );
  // tileMap.changeTile(1,1,-1);
}


function draw() {
  background(70, 70, 220);

  tileMap.draw();

}

