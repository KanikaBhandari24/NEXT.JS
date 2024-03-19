import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Website",
  description: "This is website-made from next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/> 
        <div className="container mx-auto min-h-[82vh]">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
