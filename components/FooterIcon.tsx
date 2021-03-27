import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  path: string;
  icon: IconType;
}

const FooterIcon: React.FC<Props> = ({ path, icon: Icon }) => (
  <Link href={path}>
    <div className="bg-white text-black rounded w-8 h-8 cursor-pointer hover:bg-gray-200 mx-2 p-1">
      <Icon className="w-full h-full" />
    </div>
  </Link>
);

export default FooterIcon;
