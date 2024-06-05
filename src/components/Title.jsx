"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

const Title = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.onscroll = () => scrollFunction();
  }, []);

  return (
    <div
      className={clsx(
        isSticky &&
          "justify-center -translate-x-6 w-[calc(100%+48px)] top-0 py-2 bg-primary sticky z-10",
        "flex transition-all"
      )}
    >
      <h1
        className={clsx(isSticky && "text-lg", "text-3xl font-bold text-white")}
      >
        {children}
      </h1>
    </div>
  );
};

export default Title;
