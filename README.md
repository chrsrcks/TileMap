# TileMap

https://chrsrcks.github.io/TileMap/

TileMap(
    images, // ( image array || tileSheet )
    tileSize, // ( size in px )
    array2D, // ( [[index]] )
    pos // ( position )
)

.draw() // draw all tiles

.changeTile(x, y, new value) // change image index

.mouseOverTile(mouseX, mouseY, x, y) // return x, y, index

<v 1.0>
- draw a map with images
- change tile

<v 1.1>
- tile sheet
- mouse over tile (return x,y,value for change, highlighting or value conditions)

<v 1.2>
- sprite
- draw objects (sprites or colored rectangles)
