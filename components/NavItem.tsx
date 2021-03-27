import React from "react";
import Link from "next/link";

import { NavItem as Props } from "../types";

const NavItem: React.FC<Props> = ({ name, path }) => (
  <Link href={path}>
    <p className="nav-btn hover:bg-blue-300 capitalize mx-2 p-1 self-center">
      {name}
    </p>
  </Link>
);

export default NavItem;
