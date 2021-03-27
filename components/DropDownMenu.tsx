import Link from "next/link";
import React from "react";
import { NavItem } from "../types";

interface Props {
  name: string;
  path?: string;
  items: NavItem[];
}

const DropDownMenuItem: React.FC<NavItem> = ({ name, path }) => (
  <Link href={path} key={`${name}-${path}`}>
    <p className="mx-2 my-2 p-1 text-white cursor-pointer bg-blue-800 rounded hover:bg-blue-700">
      {name}
    </p>
  </Link>
);

const DropDownMenu: React.FC<Props> = ({ name, items, path }) => (
  <div className="self-center">
    {path !== null && path !== undefined ? (
      <Link href={path}>
        <p className="nav-btn ddm-t mx-2 p-1">{name}</p>
      </Link>
    ) : (
      <p className="nav-btn ddm-t mx-2 p-1">{name}</p>
    )}
    <ul className="absolute ddm-l hidden bg-blue-300 rounded capitalize mx-2 p-1">
      {items.map((i) => (
        <DropDownMenuItem {...i} />
      ))}
    </ul>
  </div>
);

export default DropDownMenu;
