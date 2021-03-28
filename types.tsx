import { IconType } from "react-icons";

export type NavItem = {
  path: string;
  name: string;
};

export type SocialMediaLink = {
  title: string;
  path: string;
  icon: IconType;
};

export type DropDownItem = {
  name: string;
  path?: string;
  items: NavItem[];
};

export type LinksMap = {
  dropdowns?: DropDownItem[];
  navitems?: NavItem[];
};

export type LinksList = NavItem[];

export type AlgoInfo = {
  fullName: string;
  wikiLink: string;
};

export type AlgoInfoMap = Map<string, AlgoInfo>;

export type MenuItem = { name: string; value: string };

export type PathfindingBoardCell = "visited" | "unvisited" | "wall";
