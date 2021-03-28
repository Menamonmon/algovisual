import { BoardCell } from "../types";

const generateBoard = (
  w: number,
  h: number,
  defaultBoardCell: BoardCell
): BoardCell[][] => {
  const board: BoardCell[][] = [];
  for (let y = 0; y < h; y++) {
    let row: BoardCell[] = [];
    for (let x = 0; x < w; x++) {
      row.push(defaultBoardCell);
    }
    board.push(row);
  }
  return board;
};

export default generateBoard;
