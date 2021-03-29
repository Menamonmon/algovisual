import React from "react";
import Board from "./Board";

interface Props {
  algoName: string;
  w: number;
  h?: number;
}

const PathfindingManager: React.FC<Props> = ({ w, h, algoName }) => {
  return (
    <div className="text-center">
      <Board w={w} h={h} />
    </div>
  );
};

export default PathfindingManager;
