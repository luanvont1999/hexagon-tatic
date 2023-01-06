import Character from "./Character";

class Hex {
  q: number;
  r: number;
  owner?: object;
  
  constructor ({
    q, r,
    owner = null
  } : {
    q: number;
    r: number;
    owner?: object;
  } ) {
    this.q = q
    this.r = r
    this.owner = owner
  }
}

export default Hex