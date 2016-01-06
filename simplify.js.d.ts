declare module Simplify {
  interface Point {
    x: number;
    y: number;
  }
}

declare function simplify(points: Array<Array<Simplify.Point>>, tolerance: number, highestQuality: boolean): Array<Array<Simplify.Point>>;


