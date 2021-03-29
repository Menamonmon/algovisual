import React, { useEffect, useRef, useState } from "react";
import useContinuousClickListener from "../../../hooks/useContinuousClickListener";
import usePathfindingBoard from "../../../hooks/usePathfindingBoard";
import { PathfindingBoardCell, Position } from "../../../types";
import Cell from "./Cell";
import CellColorCode from "./CellColorCode";

type BoardType = PathfindingBoardCell[][];

interface Props {
  w: number;
  h?: number;
}

const Board: React.FC<Props> = ({ w, h }) => {
  const { board, updateBoard } = usePathfindingBoard(w, h);
  const boardRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  h = board.length;
  w = board[0].length;
  const boardPxlWidth = 500;
  const boardPxlHeight = 500;
  const cellWidth = boardPxlWidth / w;
  const cellNamesMap = new Map<PathfindingBoardCell, string>();
  cellNamesMap.set("uv", "Unvisitied");
  cellNamesMap.set("v", "Visited");
  cellNamesMap.set("w", "Wall");
  cellNamesMap.set("s", "Start");
  cellNamesMap.set("e", "End");

  return (
    <div>
      <CellColorCode cellWidth={cellWidth} cellNamesMap={cellNamesMap} />
      <div
        className="my-5 mx-auto bg-white"
        style={{
          display: "grid",
          width: boardPxlWidth,
          height: boardPxlHeight,
          gridTemplateColumns: `repeat(${w}, 1fr)`,
          gridTemplateRows: `repeat(${h}, 1fr)`,
        }}
        ref={boardRef}
        onMouseDown={() => {
          setIsMouseDown(true);
        }}
        onMouseUp={() => setIsMouseDown(false)}
      >
        {board.map((row, y) =>
          row.map((c, x) => (
            <Cell
              cell={c}
              pos={{ x, y }}
              key={`${x}-${y}-${c}`}
              w={cellWidth}
              onMouseEnter={() => {
                if (isMouseDown) {
                  updateBoard({ x, y }, c === "uv" ? "w" : "uv");
                }
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
