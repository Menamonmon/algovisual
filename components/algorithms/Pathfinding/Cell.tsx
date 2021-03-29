import React from "react";
import { PathfindingBoardCell, Position } from "../../../types";
import { pathfindingCellToColor } from "../../../utils/cellToColor";

interface Props {
  pos: Position;
  cell: PathfindingBoardCell;
  w: number;
  onMouseEnter: () => void;
}

const Cell: React.FC<Props> = ({
  pos,
  cell,
  w,
  onMouseEnter,
}) => {
  return (
    <div
      className={`bg-${pathfindingCellToColor(
        cell
      )}-600 hover:bg-gray-400 hover:w-10 cursor-pointer`}
      style={{
        borderWidth: .v1,
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
