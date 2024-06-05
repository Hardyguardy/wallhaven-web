"use client";

import { clsx } from "clsx";
import { useEffect, useState } from "react";

const Title = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const distance = 75;

    const scrollFunction = () => {
      if (
        document.body.scrollTop > distance ||
        document.documentElement.scrollTop > distance
      ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.onscroll = () => scrollFunction();
  }, []);

  return (
    <>
      <h1 className="text-4xl font-semibold">{children}</h1>
      <div
        className={clsx(
          "fixed left-0 top-0 z-10 w-full bg-secondary py-2 text-center transition",
          !isSticky && "-translate-y-full opacity-0",
        )}
      >
        <h1 className="text-xl font-semibold">{children}</h1>
      </div>
    </>
  );
};

export default Title;
