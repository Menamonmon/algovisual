import React from "react";
import Link from "next/link";

const Navbar: React.FC = ({ children }) => (
  <nav className="bg-blue-600 w-screen flex justify-between">
    <div>
      <Link href="/">
        <h1 className="nav-btn hover:bg-blue-300 text-3xl m-5 p-2">
          AlgoVisual
        </h1>
      </Link>
    </div>
    <ul className="flex items-stretch ">{children}</ul>
  </nav>
);

export default Navbar;
