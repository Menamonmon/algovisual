import React from "react";
import { SocialMediaLink } from "../types";

const FooterIcon: React.FC<SocialMediaLink> = ({ title, path, icon: Icon }) => (
  <a href={path}>
    <div className="bg-white text-black rounded w-8 h-8 cursor-pointer hover:bg-gray-200 mx-2 p-1">
      <Icon className="w-full h-full" title={title} />
    </div>
  </a>
);

export default FooterIcon;
