"use client";

import Link from "next/link";

import { clsx } from "clsx";
import { useState } from "react";
import Icon from "@/components/Icon";

const tabs = [
  {
    name: "drawer",
  },
  {
    name: "categories",
  },
  {
    name: "favorites",
  },
];

const Tabs = ({}) => {
  let Component = "div";

  const [isFocused, setIsFocused] = useState(false);

  return (
    <header className="px-11 py-6">
      <nav>
        {tabs.map(({ name }) => {
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
            <Icon
              className={clsx(
                "h-6 w-6 stroke-2",
                isFocused ? "stroke-white" : "stroke-tertiary"
              )}
              name={icon}
            />
          );
        })}
      </nav>
    </header>
  );
};

// const Tabs = () => {
//   // const router = useRouter();
//   // const [isHidden, setIsHidden] = useState(false);
//   // const controls = useAnimation();

//   // useEffect(() => {
//   //   setIsHidden(router.pathname === "/wallpaper");
//   // }, [router.pathname]);

//   // useEffect(() => {
//   //   if (isHidden) {
//   //     controls.start({ y: 80 });
//   //   } else {
//   //     controls.start({ y: 0 });
//   //   }
//   // }, [isHidden, controls]);

//   const routes = [
//     { name: "DrawerToggle", path: "/" },
//     { name: "CategoriesNavigator", path: "/categories" },
//     { name: "FavoritesNavigator", path: "/favorites" },
//   ];

//   return (
//     // <motion.div
//     //   className="fixed bottom-0 w-full flex justify-center bg-secondary"
//     //   animate={controls}
//     //   initial={{ y: 0 }}
//     // >
//     //   <Link href="/" passHref>
//     //     <a>
//     //       <Tab name="DrawerToggle" />
//     //     </a>
//     //   </Link>
//     //   {routes.map((route) => {
//     //     const isFocused = router.pathname === route.path;

//     //     return (
//     //       <Link key={route.name} href={route.path} passHref>
//     //         <a>
//     //           <Tab name={route.name} isFocused={isFocused} />
//     //         </a>
//     //       </Link>
//     //     );
//     //   })}
//     // </motion.div>
//   );
// };

export default Tabs;
