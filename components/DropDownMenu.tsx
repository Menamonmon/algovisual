import Link from "next/link";
import React from "react";
import { NavItem, DropDownItem } from "../types";

const DropDownMenuItem: React.FC<NavItem> = ({ name, path }) => (
  <Link href={path} key={`${name}-${path}`}>
    <p className="mx-2 my-2 p-1 text-white cursor-pointer bg-blue-800 rounded hover:bg-blue-700">
      {name}
    </p>
  </Link>
);

const DropDownMenu: React.FC<DropDownItem> = ({ name, items, path }) => (
  <div className="self-center">
    {path !== null && path !== undefined ? (
      <Link href={path}>
        <p className="nav-btn hover:bg-blue-300 ddm-t mx-2 p-1">{name}</p>
      </Link>
    ) : (
      <p className="nav-btn hover:bg-blue-300 ddm-t mx-2 p-1">{name}</p>
    )}
    <ul className="absolute ddm-l hidden bg-blue-300 rounded capitalize mx-2 p-1">
      {items.map((i, idx) => (
        <DropDownMenuItem {...i} key={idx} />
      ))}
    </ul>
  </div>
);

export default DropDownMenu;
