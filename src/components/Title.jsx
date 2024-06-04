"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";

const Title = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  }, []);
  return (
    <div
      className={clsx(
        isSticky ? "justify-center bg-primary " : "",
        "sticky top-0 z-10 flex w-full transition-all  ",
        ""
      )}
    >
      <h1
        className={clsx(
          isSticky ? "text-white -translate-y-5 " : "text-white",
          " text-3xl font-bold pt-10 pl-6"
        )}
      >
        {children}
      </h1>
    </div>
  );
};

export default Title;
