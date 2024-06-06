import { galleries } from "lib/data";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {galleries.map(({ id, name, cover }) => (
        <div className="relative overflow-hidden rounded-xl" key={id}>
          <button className="block">
            <Image src={cover} width={500} height={500} alt={name} />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary-85 to-transparent text-left">
              <h2 className="px-2 py-3 text-lg font-semibold leading-6">
                {name}
              </h2>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Categories;
