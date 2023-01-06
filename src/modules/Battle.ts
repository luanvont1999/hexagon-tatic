import Draw from "./Draw";

export type HexProps = {
  r: number;
  q: number;
};

type BoardProps = Array<Array<HexProps>>;

class Battle {
  board: BoardProps;
  constructor(board: BoardProps) {
    this.board = board;
  }

  render() {
    this.board?.map((row) => {
      row?.map((hex) => {
        const x = 200 + 50 * (Math.sqrt(3) * hex.q + (Math.sqrt(3) / 2) * hex.r);
        const y = 200 + 50 * ((3 / 2) * hex.r);

        Draw.Hex({ x, y, size: 50 })
      });
    });
  }
}

export default Battle;
