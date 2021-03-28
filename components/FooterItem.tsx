import React from "react";
import Link from "next/link";
import { NavItem as FooterItemProps } from "../types";

const FooterItem: React.FC<FooterItemProps> = ({ name, path }) => (
  <div>
    <Link href={path}>
      <p className="nav-btn hover:bg-gray-100 hover:text-black capitalize mx-2 p-1 self-center">
        {name}
      </p>
    </Link>
  </div>
);

export default FooterItem;
