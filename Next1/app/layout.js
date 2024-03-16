import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Site",
  description: "I am a site!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
