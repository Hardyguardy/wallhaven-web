import Link from "next/link";
import Image from "next/image";
import { galleries } from "lib/data";

const Categories = () => {
  return (
    <div className="screen" style={{ padding: "0 22px" }}>
      <div className="pt-10 flex gap-3">
        {galleries.map((item, index) => (
          <div key={item.id} className="relative overflow-hidden rounded-[4px]">
            <Link href={`/${item.name}`} passHref>
              <Image
                src={item.cover}
                alt={item.name}
                layout="responsive"
                width={500}
                height={500}
                className="w-full aspect-square"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent">
                <p className="px-4 py-3 font-title text-xl leading-6 text-white">
                  {item.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="h-18" />
    </div>
  );
};

export default Categories;
