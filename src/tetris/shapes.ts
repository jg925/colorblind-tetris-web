type Anchor = [number, number];

/*enum Tetrominoes = {
  Z,

}*/

function mod_360(orient: number): number {
  if (orient < 0) {
    return orient + 360;
  } else {
    return orient % 360;
  }
}
/*

The starting orientation for all shapes that get spawned. 

let gen_coord_list_0_orient x y name = 
  match name with
  | 'I' -> [(x - 2, y); (x - 1, y); (x, y); (x + 1, y)]
  | 'J' -> [(x - 1, y + 1); (x - 1, y); (x, y); (x + 1, y)]
  | 'L' -> [(x + 1, y + 1); (x + 1, y); (x, y); (x - 1, y)]
  | 'T' -> [(x, y + 1); (x - 1, y); (x, y); (x + 1, y)]
  | 'Z' -> [(x - 1, y + 1); (x, y + 1); (x, y); (x + 1, y)]
  | 'S' -> [(x - 1, y); (x, y); (x, y + 1); (x + 1, y + 1)]
  | 'O' -> [(x, y); (x + 1, y); (x + 1, y - 1); (x, y - 1)]
  | _ -> raise (BadName name)
    end */

class Shape {
  name: string;
  anchor: Anchor;
  tile_list: [Tile];
  orientation: number;

  constructor(name, anchor, color) {
    this.orientation = 0;
    this.name = name;
    this.anchor = anchor;
    this.tile_list = generateTileList(anchor,name);

  }

  function generateTileList(anchor,name) {
    
  }

}

/*
let make_shape (name : char) (anchor : anchor) (orientation : int) 
    (cb : int) : t = 
  let orient = orientation |> modulo_360 in
  let coord_list = gen_coord_list name anchor orient in
  let tile_list : Tile.t list = 
    match cb with
    | 0 -> make_shape_reg name coord_list
    | 1 | 5 -> make_shape_deut name coord_list
    | 2 -> make_shape_prot name coord_list
    | 3 -> make_shape_trit name coord_list
    | 4 -> make_shape_mono name coord_list
    | _ -> raise (BadColorPalette cb)
  in {
    name = name;
    anchor = anchor;
    tile_list = List.rev tile_list;
    orientation = orient
  }
let rec check_shape_tiles = function
  | [] -> true
  | h :: t -> begin
      let x = Tile.get_x h in 
      let y = Tile.get_y h in
      if x < 0 || x > Tilearray.x_dim - 1 || y < 0 || y >= Tilearray.y_dim
      then false
      else if Tilearray.get x y = None 
      then check_shape_tiles t 
      else false
    end

let move_lr shape dir = 
  let new_anchor =
    match shape.anchor with
    | (x,y) -> begin 
        if dir = "l" 
        then (x - 1, y) 
        else if dir = "r" 
        then (x + 1, y)
        else raise (Failure "improper direction")
      end in 
  let new_tile_list = move_each_tile [] dir shape.tile_list in
  if check_shape_tiles new_tile_list = false 
  then shape
  else {shape with anchor = new_anchor; 
                   tile_list = new_tile_list}

let move_l shape = move_lr shape "l"

let move_r shape = move_lr shape "r"

let fall shape = 
  let new_tile_list = List.map Tile.fall shape.tile_list in  
  if check_shape_tiles new_tile_list = false 
  then set_tile_array shape.tile_list
  else {shape with anchor = (match shape.anchor with (x, y) -> (x, y - 1));
         tile_list = new_tile_list}
*/
