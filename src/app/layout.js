import Tabs from "@/components/Tabs";
import "../globals.css";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="p-6 flex flex-col gap-6">{children}</div>
          <Tabs />
        </main>
      </body>
    </html>
  );
};

export default Layout;
