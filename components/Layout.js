import { Inter } from "next/font/google";
import Footer from "./Footer";
import Navbar from "./Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children, title }) {
  return (
    <>
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
