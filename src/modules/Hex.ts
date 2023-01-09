import Character from "./Character";

class Hex {
  q: number;
  r: number;
  owner?: object;
  block?: boolean;
  
  constructor ({
    q, r,
    owner = null,
    block = false,
  } : {
    q: number;
    r: number;
    owner?: object;
    block?: boolean
  } ) {
    this.q = q
    this.r = r
    this.owner = owner
    this.block = block
  }
}

export default Hex