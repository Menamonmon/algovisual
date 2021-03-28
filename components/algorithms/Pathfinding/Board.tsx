import React from "react";
import { PathfindingBoardCell } from "../../../types";
import Cell from "./Cell";

type BoardType = PathfindingBoardCell[][];

interface Props {
  board: BoardType;
}

const Board: React.FC<Props> = ({ board }) => {
  const h = board.length;
  const w = board[0].length;
  const boardPxlWidth = 500;
  const boardCells = board.map((row, y) =>
    row.map((c, x) => (
      <Cell
        cell={c}
        pos={{ x, y }}
        key={`${x}-${y}-${c}`}
        w={boardPxlWidth / w}
      />
    ))
  );
  return (
    <div
      className="my-5 bg-black mx-auto"
      style={{
        display: "grid",
        width: `${boardPxlWidth}px`,
        height: `${boardPxlWidth}px`,
        gridTemplateColumns: `repeat(${w}, 1fr)`,
        gridTemplateRows: `repeat(${h}, 1fr)`,
      }}
    >
      {boardCells}
    </div>
  );
};

export default Board;
