import Categories from "components/Categories";
import Menu from "components/Menu";
import Tabs from "components/Tabs";

export default function Home() {
  return (
    <main className="  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-4 w-full">
      <div className="max-w-6xl w-full">
        <Menu />
        <Tabs></Tabs>
        <Categories />
      </div>
    </main>
  );
}
