import { Position } from "../types";

const isPositionValid = (pos: Position, w: number, h: number): boolean => {
  if (!(pos.x >= 0 && pos.x < w && pos.y >= 0 && pos.y < h)) {
    return false;
  }
  return true;
};

export default isPositionValid;
