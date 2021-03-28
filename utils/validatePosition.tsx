import { Position } from "../types";

const validatePosition = (pos: Position, w: number, h: number): boolean => {
  if (!(pos.x >= 0 && pos.x < w && pos.y >= 0 && pos.y < h)) {
    return false;
  }
  return true;
};
