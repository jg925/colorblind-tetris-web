type coord = {
  x: number;
  y: number;
};

type color = {
  r: number;
  g: number;
  b: number;
};

type t = {
  location: coord;
  color: color;
};

// functions for generating tiles

function make_coord(x: number, y: number) {
  return [x, y];
}

function make_color(r: number, g: number, b: number) {
  return [r, g, b];
}

function make_tile(x, y, r, g, b) {
  return { location: make_coord(x, y), color: make_color(r, g, b) };
}

/*make_coord(x, y){
  return (x,y)
};

let make_color r g b = (r, g, b)

let make_tile x y r g b = 
  {
    location = make_coord x y;
    color = make_color r g b
  }

let tile_length = 30 (*sets the tile length *)


// functions for getting properties of tiles

let get_x tile = 
  match tile.location with 
  | (x,_) -> x

let get_y tile = 
  match tile.location with 
  | (_,y) -> y

let get_color tile = 
  match tile.color with 
  | (r,g,b) -> Graphics.rgb r g b

let set_x tile x = 
  {tile with location = (x, (get_y tile))}

let set_y tile y = 
  {tile with location = ((get_x tile), y)}


// functions for generating new tiles from old ones

let move_to tile x y = {tile with location = (x, y)}

let fall tile = move_to tile (get_x tile) (get_y tile - 1)

let move_left tile = move_to tile (get_x tile - 1) (get_y tile)

let move_right tile = move_to tile (get_x tile + 1) (get_y tile)
*/
