import { useState } from "react";
import generateBoard from "../utils/generateBoard";
import { PathfindingBoardCell, Position } from "../types";
import isPositionValid from "../utils/isPositionValid";

type Board = PathfindingBoardCell[][];

const usePathfindingBoard = (w: number, h?: number) => {
  if (h === undefined) {
    h = w;
  }
  if (w === 0 || h === 0) {
    throw Error("Invalid Board Width or Height");
  }
  const [startPosition, setStartPosition] = useState<Position>({ x: 0, y: 0 });
  const [endPosition, setEndPosition] = useState<Position>({
    x: w - 1,
    y: h - 1,
  });

  const [board, setBoard] = useState<Board>(generateBoard(w, h, "uv"));

  const updateStartPosition = (pos: Position): boolean => {
    if (!isPositionValid(pos, w, h)) throw Error("Invalid Board Position");
    const currentCell = board[pos.y][pos.y];
    if (currentCell === "e") {
      return false;
    }
    updateBoard(pos, "s");
    setStartPosition(pos);
    return true;
  };

  const updateEndPosition = (pos: Position): boolean => {
    if (!isPositionValid(pos, w, h)) throw Error("Invalid Board Position");
    const currentCell = board[pos.y][pos.y];
    if (currentCell === "s") {
      return false;
    }
    updateBoard(pos, "e");
    setEndPosition(pos);
    return true;
  };

  const updateBoard = (
    pos: Position,
    cellValue: PathfindingBoardCell
  ): boolean => {
    if (!isPositionValid(pos, w, h)) throw Error("Invalid Board Position");
    if (pos === startPosition || pos === endPosition) {
      return false;
    }
    setBoard((p) => {
      const newBoard = JSON.parse(JSON.stringify(p));
      newBoard[pos.y][pos.x] = cellValue;
      return newBoard;
    });
    return true;
  };

  return { board, updateBoard, updateStartPosition, updateEndPosition };
};

export default usePathfindingBoard;
