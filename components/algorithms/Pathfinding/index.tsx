import React from "react";
import usePathfindingBoard from "../../../hooks/usePathfindingBoard";
import Board from "./Board";

interface Props {
  algoName: string;
  w: number;
  h?: number;
}

const PathfindingManager: React.FC<Props> = ({ w, h, algoName }) => {
  const {
    board,
    updateBoard,
    updateStartPosition,
    updateEndPosition,
  } = usePathfindingBoard(w, h);

  return (
    <div className="text-center">
      <Board board={board} />
    </div>
  );
};

export default PathfindingManager;
