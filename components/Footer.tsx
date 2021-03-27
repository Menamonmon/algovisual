import React from "react";

const CopyrightFooter = () => (
  <p className="text-white bg-gray-600 p-2">Copyright © Mena Filfil, 2021</p>
);

const Footer: React.FC = ({ children }) => (
  <div className="bg-black w-screen flex flex-col">
    <ul className="flex items-stretch p-3 justify-between m-auto sm:w-5/6 md:w-2/3 2md:w-2/3 lg:w-3/5">
      {children}
    </ul>
    <CopyrightFooter />
  </div>
);

export default Footer;
