import { Inter } from "next/font/google";
import "./globals.css";
import Tabs from "@/components/Tabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wallhaven",
  description: " Wallpapers from Wallhaven",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
          <Tabs />
        </main>
      </body>
    </html>
  );
}
