import React from "react";
import { PathfindingBoardCell, Position } from "../../../types";

interface Props {
  pos: Position;
  cell: PathfindingBoardCell;
  w: number;
  onMouseEnter: () => void;
}

type PathfindingBoardColor = "red" | "green" | "white" | "gray" | "blue";

const cellToColor = (cell: PathfindingBoardCell): PathfindingBoardColor => {
  switch (cell) {
    case "e":
      return "red";
    case "s":
      return "green";
    case "uv":
      return "white";
    case "v":
      return "blue";
    case "w":
      return "gray";
    default:
      throw Error("Problem with color conversion");
  }
};

const Cell: React.FC<Props> = ({
  pos,
  cell,
  w,
  onMouseEnter,
}) => {
  return (
    <div
      className={`bg-${cellToColor(
        cell
      )}-600 hover:bg-gray-400 hover:w-10 cursor-pointer`}
      style={{
        borderWidth: .1,
        borderColor: "darkgray",
        gridRow: pos.y + 1,
        gridColumn: pos.x + 1,
        width: w,
        height: w,
      }}
      onMouseEnter={onMouseEnter}
    />
  );
};

export default Cell;
