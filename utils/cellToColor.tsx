import { PathfindingBoardCell } from "../types";
type PathfindingBoardColor = "red" | "green" | "white" | "gray" | "blue";

const pathfindingCellToColor = (
  cell: PathfindingBoardCell
): PathfindingBoardColor => {
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

export { pathfindingCellToColor };
