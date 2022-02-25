//This will power the tetris game.
type coord = {
  x: number;
  y: number;
}

type color = {
  r: number;
  g: number;
  b: number;
}

type t = {
  location: coord;
  color: color;
}

class Tile {
  x: number;
  y: number;
  color: number;

  constructor(x: number, y: number, color: number) {
    this.location = make_coord
    this.color = color;
  }

  //function get_x

}