import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <nav className="bg-gray-800 p-5 pt-10">
      <ul className="flex justify-around list-none m-0 p-0 w-full">
        <li className="flex-1 text-center">
          <Link href="/" legacyBehavior>
            <a className="text-white no-underline hover:underline">Home</a>
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link href="/explore" legacyBehavior>
            <a className="text-white no-underline hover:underline">Explore</a>
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link href="/about" legacyBehavior>
            <a className="text-white no-underline hover:underline">About</a>
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link href="/contact" legacyBehavior>
            <a className="text-white no-underline hover:underline">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
