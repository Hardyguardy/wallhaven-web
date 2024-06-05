"use client";

import Link from "next/link";

import { clsx } from "clsx";
import { useState } from "react";
import Icon from "@/components/Icon";

const tabs = [
  {
    name: "drawer",
    path: "/",
  },
  {
    name: "categories",
    path: "/",
  },
  {
    name: "favorites",
    path: "/favorites",
  },
];

const Tabs = ({}) => {
  const [activeTab, setActiveTab] = useState("categories");
  let Component = "div";

  return (
    <header className="bg-secondary pt-6 flex justify-center bottom-0 left-0 right-0 fixed w-full">
      <nav className="flex flex-row gap-20 mb-6  ">
        {tabs.map(({ name, path }) => {
          let icon = "";

          if (name === "drawer") {
            icon = "bars";
          }

          if (name === "categories") {
            icon = "grid";
          }

          if (name === "favorites") {
            icon = "bookmarks";
          }
          return (
            <Link href={path} key={name}>
              <button
                disabled={name === "drawer"}
                className="flex items-center"
                onClick={() => setActiveTab(name)}
              >
                <Icon
                  className={clsx(
                    "h-6 w-6 stroke-2",
                    activeTab === name ? "stroke-white" : "stroke-tertiary"
                  )}
                  name={icon}
                />
              </button>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Tabs;
