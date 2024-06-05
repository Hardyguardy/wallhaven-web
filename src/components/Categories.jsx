import { galleries } from "lib/data";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {galleries.map((item) => (
        <div key={item.id} className="relative overflow-hidden rounded-[10px]">
          <Link href={`/${item.name}`}>
            <Image
              className="aspect-square w-full"
              width={300}
              height={300}
              src={item.cover}
              alt={item.name}
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent">
              <p className="font-title px-4 py-3 text-xl leading-6 text-white">
                {item.name}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
