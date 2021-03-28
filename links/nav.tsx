import { LinksMap } from "../types";

const navLinks: LinksMap = {
  dropdowns: [
    {
      name: "Pathfinding",
      path: "/pathfinding",
      items: [
        { name: "Depth-First Search", path: "/pathfinding/dfs" },
        { name: "Depth-First Search", path: "/pathfinding/dfs" },
        { name: "Depth-First Search", path: "/pathfinding/dfs" },
      ],
    },
    {
      name: "Sorting",
      path: "/sorting",
      items: [
        { name: "Bubble Sort", path: "/sorting/bubble" },
        { name: "Bubble Sort", path: "/sorting/bubble" },
        { name: "Bubble Sort", path: "/sorting/bubble" },
        { name: "Bubble Sort", path: "/sorting/bubble" },
        { name: "Bubble Sort", path: "/sorting/bubble" },
        { name: "Bubble Sort", path: "/sorting/bubble" },
      ],
    },
  ],

  navitems: [
    {
      name: "About",
      path: "/about",
    },
  ],
};

export default navLinks;
