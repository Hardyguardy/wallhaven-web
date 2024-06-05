"use client";

import Icon from "@/components/Icon";
import { clsx } from "clsx";
import Link from "next/link";
import { useState } from "react";

const tabs = [
  {
    name: "drawer",
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

  return (
    <header className="sticky bottom-0 left-0 right-0 bg-secondary">
      <nav className="grid grid-cols-3">
        {tabs.map(({ name, path }) => {
          let icon = "";

          if (name === "drawer") {
            return (
              <button className="flex justify-center py-6" key={name}>
                <Icon
                  className="h-6 w-6 stroke-tertiary stroke-2"
                  name="bars"
                />
              </button>
            );
          }

          if (name === "categories") {
            icon = "grid";
          }

          if (name === "favorites") {
            icon = "bookmarks";
          }

          return (
            <Link
              className="flex justify-center py-6"
              href={path}
              onClick={() => setActiveTab(name)}
              key={name}
            >
              <Icon
                className={clsx(
                  "h-6 w-6 stroke-2",
                  activeTab === name ? "stroke-white" : "stroke-tertiary",
                )}
                name={icon}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Tabs;
