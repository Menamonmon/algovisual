import React from "react";
import { PathfindingBoardCell } from "../../../types";
import { pathfindingCellToColor } from "../../../utils/cellToColor";

interface Props {
  cellWidth: number;
  cellNamesMap: Map<PathfindingBoardCell, string>;
}

const CellColorCode: React.FC<Props> = ({ cellNamesMap, cellWidth }) => (
  <div className="p-5">
    <h1 className="text-left my-3">Color Key</h1>
    <div className="flex flex-row w-1/2 justify-between">
      {[...cellNamesMap.keys()].map((c) => (
        <div className="text-center ring ring-purple-400 w-20 rounded p-0.5">
          <p>{cellNamesMap.get(c)}</p>
          <div
            className="inline-block"
            style={{
              width: cellWidth,
              height: cellWidth,
              backgroundColor: pathfindingCellToColor(c),
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

export default CellColorCode;
