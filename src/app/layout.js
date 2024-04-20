import { Aldrich } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../src/app/page.module.css";

const aldrich = Aldrich({  weight: ['400'], subsets: ["latin"] });

export const metadata = {
  title: "Hack 4 All | Coming Soon",
  description: "Hack 4 All",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={aldrich.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
