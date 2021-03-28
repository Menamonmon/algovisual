import React from "react";
import { PathfindingBoardCell, Position } from "../../../types";

interface Props {
  pos: Position;
  cell: PathfindingBoardCell;
  w: number;
}

type PathfindingBoardColor = "red" | "green" | "white" | "grey" | "blue";

const cellToColor = (cell: PathfindingBoardCell): PathfindingBoardColor => {
  switch (cell) {
    case "e":
      return "red";
    case "s":
      return "green";
    case "uv":
      return "white";
    case "v":
      return "grey";
    default:
      throw Error("Problem with color conversion");
  }
};

const Cell: React.FC<Props> = ({ pos, cell, w }) => {
  return (
    <div
      className={`bg-${cellToColor(cell)} border-2 border-black`}
      style={{ gridRow: pos.y + 1, gridColumn: pos.x + 1, width: w, height: w }}
    ></div>
  );
};

export default Cell;
