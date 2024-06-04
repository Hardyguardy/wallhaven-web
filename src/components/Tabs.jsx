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
