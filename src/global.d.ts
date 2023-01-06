export {}

declare global {
  type Pos = {
    x: number;
    y: number;
  }
  type Rect = Pos & {
    width: number;
    height: number;
  }
  type Hexagon = Pos & {
    size: number;
  }
  type CameraProps = Rect & {
    zoom: number;
  };

  var canvas: HTMLCanvasElement;
  var ctx: CanvasRenderingContext2D;
  var cam: CameraProps;
  var prev: number;
  var deltaTime: number;
}