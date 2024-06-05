import Tabs from "@/components/Tabs";
import "@/globals.css";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col justify-between">
          <div className="flex flex-col gap-6 p-6">{children}</div>
          <Tabs />
        </main>
      </body>
    </html>
  );
};

export default Layout;
