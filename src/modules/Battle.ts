import Hexagon from "../algorithm/Hexagon";
import AStar from "../algorithm/PathFinding";
import Camera from "./Camera";
import Draw from "./Draw";
import Hex from "./Hex";
import Entity from "./Entity";
import helpers from "../helpers";

type BoardProps = Array<Array<Hex>>;

const fakeBoardEntity = [
  {
    side: 'team1',
    allies: [
      { pos: { x: 0, y: 1 }, dir: 1 },
      { pos: { x: 0, y: 3 }, dir: 1 },
      { pos: { x: 0, y: 5 }, dir: 1 },
    ],
    color: 'green',
    enemyTeams: ['team2']
  },
  {
    side: 'team2',
    allies: [
      { pos: { x: 7, y: 1 }, dir: -1 },
      { pos: { x: 7, y: 3 }, dir: -1 },
      { pos: { x: 7, y: 5 }, dir: -1 },
    ],
    color: 'red',
    enemyTeams: ['team1']
  }
]

export type Team = {
  side: string;
  color: string;
  allies: Array<Hex>;
  enemiesTeam: Array<Team>;
}

class Battle {
  board: BoardProps;
  select: Hex;
  hover: Hex;
  path: AxialHex[] = [];
  target: Hex;
  astar: any;
  count: number = 0;
  canAction: boolean = true

  teams: Record<string, Team> = {}

  constructor(board: BoardProps = []) {
    this.board = board;

    for (let r = 0; r < 8; r++) {
      if (board.length < r + 1) {
        this.board.push([])
      }
      for (let q = 0; q < 10; q++) {
        this.board[r].push(new Hex({ battle: this, r, q: q - Math.floor(r / 2)}))
      }
    }

    fakeBoardEntity.forEach(team => {
      const { side, allies, enemyTeams, color } = team
      if (!(side in this.teams)) {
        this.teams[side] = {
          side,
          allies: [],
          enemiesTeam: [],
          color: color || helpers.getRandomColor()
        }
      }
      this.teams[side].color = color || helpers.getRandomColor()
      enemyTeams.forEach((eTeam) => {
        if (!(eTeam in this.teams)) {
          this.teams[eTeam] = {
            side: eTeam,
            allies: [],
            enemiesTeam: [],
            color: helpers.getRandomColor()
          }
        }
        this.teams[side].enemiesTeam.push(this.teams[eTeam])
      })
      allies.forEach(unit => {
        this.addHexEntity(unit.pos, this.teams[side], unit.dir as -1 | 1)
      })
    })

    const btnStart = document.getElementById('btn-start')

    btnStart?.addEventListener('click', () => {
      this.startBattle()
    })
    canvas.addEventListener('click', this.mouseClickHandler.bind(this))
    // canvas.addEventListener('mousemove', this.mouseMoveHandler.bind(this))
  }

  addHexEntity(pos: Pos, team: Team, dir: -1 | 1 = 1) {
    const hex = new Hex({ battle: this, ...this.board[pos.y][pos.x], team })
    hex.owner = new Entity({ hex, dir })
    team.allies.push(hex)
    // this.board[pos.y][pos.x].block = true
  }

  async startBattle() {
    const all = this.getAllTeamMembers()
    let i = 0;
    while (true) {
      console.log('action start', i % all.length)
      await all[i % all.length].owner.action()
      console.log('action done', i % all.length)
      i++
    }
  }

  async mouseClickHandler (event: MouseEvent) {
    if (!this.canAction) return
    const { shiftKey } = event
    const { r, q } = Hexagon.pixelToHex(Camera.mouseCam(event))
    const { x, y } = Hexagon.axialToStore({ r, q })
    if (r >= this.board.length || r < 0) return

    if (shiftKey) {
      this.board[x][y].block = !this.board[x][y].block
      return
    }

    if (this.select) {
      if (Hexagon.axialEqual(this.select, {r,q})) {
        this.select = null
        return
      }
      if (!this.board[x][y].block) {
        this.canAction = false
        const { x: xPrev, y: yPrev } = Hexagon.axialToStore(this.select)
        await this.select.move(this.path)
        this.select = null
        this.canAction = true
      }
    } else {
      // this.select = this.getAllTeamMembers().find(hex => Hexagon.axialEqual(hex, { r, q}))
      this.getAllTeamMembers().find(hex => Hexagon.axialEqual(hex, { r, q}))?.owner.action()
    }
  }

  getAllTeamMembers(): Array<Hex> {
    return Object.values(this.teams).map(team => team.allies).flat()
  }

  mouseMoveHandler (event: MouseEvent) {
    if (!this.select || !this.canAction) return

    const hex = Hexagon.pixelToHex(Camera.mouseCam(event))

    const { x, y } = Hexagon.axialToStore(hex)

    if (x >= this.board.length || x < 0 || y < 0 || y >= this.board[x].length) return

    if (this.board[x][y]?.block) return

    const _hover = new Hex({ battle: this, ...this.board[x][y]})
    if (_hover.r !== this.hover?.r || _hover.q !== this.hover?.q) {
      this.hover = _hover

      this.path = AStar.search(this.board, this.select, this.hover)
      this.path.splice(0, 1)
    }
  }

  render() {
    const allMembers = this.getAllTeamMembers()
    this.board?.map((row) => {
      row?.map((hex) => {
        const { x, y } = Hexagon.hexToPixel(hex)

        let color = 'white'

        if (hex.block) color = 'gray'
        Draw.drawHex({ x, y, size: HEX_SIZE }, color)

      });
    });
    allMembers.sort((a, b) => {
      if (a.r > b.r) return 1
      if (a.r < b.r) return -1
      return 0
    }).forEach(hex => {
      hex.render()
      hex?.owner?.render()
    })
    this.path?.length && this.path?.forEach(hex => {
      const { x, y } = Hexagon.hexToPixel(hex)
      Draw.drawHex({ x, y, size: HEX_SIZE * 0.3}, 'orange')
    })
  }
}

export default Battle;
