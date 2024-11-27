type Coord = [number, number];

type Color = [number, number, number];

// functions for generating tiles

function make_coord(x: number, y: number): Coord {
  return [x, y];
}

function make_color(r: number, g: number, b: number): Color {
  return [r, g, b];
}

//const tile_length = 30;

// functions for getting properties of tiles
class Tile {
  location: Coord;
  color: Color;

  constructor(x: number, y: number, r: number, g: number, b: number) {
    this.location = make_coord(x, y);
    this.color = make_color(r, g, b);
  }

  move_left() {
    this.location = make_coord(this.location[0] - 1, this.location[1]);
  }

  move_right() {
    this.location = make_coord(this.location[0] + 1, this.location[1]);
  }

  fall() {
    this.location = make_coord(this.location[0], this.location[1] - 1);
  }
}
