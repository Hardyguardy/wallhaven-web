import Categories from "@/components/Categories";
import Menu from "@/components/Menu";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <main className="overflow-hidden mx-auto sm:px-10 px-5 pt-4 ">
      <div className="">
        <Menu />
        <div className="">
          <Categories />
        </div>

        <Tabs></Tabs>
      </div>
    </main>
  );
}
