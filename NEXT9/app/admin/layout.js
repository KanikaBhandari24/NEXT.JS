import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin: X - Connect with great minds",
  description: "Admin Page: X is a social media app which lets you connect with people in different field",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <span>Admin Navbar</span>
    {children}
    </>
  );
}
