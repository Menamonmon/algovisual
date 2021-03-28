import { BoardCell } from "../types";

const generateBoard = (
  w: number,
  h: number,
  defaultBoardCell: BoardCell
): Array<Array<BoardCell>> => {
  const board: Array<Array<BoardCell>> = [];
  for (let y = 0; y < h; y++) {
    let row: BoardCell[] = [];
    for (let x = 0; x < w; x++) {
      row.push(defaultBoardCell);
    }
  }
  return board;
};

export default generateBoard;
