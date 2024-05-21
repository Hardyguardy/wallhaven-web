import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <nav className="bg-gray-800 p-5 pt-20">
      <ul className="flex justify-between  w-full m-0 p-0">
        <li className="text-center">
          <Link className="text-white no-underline hover:underline" href="/">
            Drawer
          </Link>
        </li>
        <li className="text-center">
          <Link
            className="text-white no-underline hover:underline"
            href="/explore"
          >
            Categories
          </Link>
        </li>
        <li className="text-center">
          <Link
            className="text-white no-underline hover:underline"
            href="/about"
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
