import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// metadata untuk keperluan SEO
export const metadata = {
  title: "Anime App",
  description: "List Anime",
};

// default layout , artinya semua file page.js akan mempunyai layout ini
// jika terdapat component yang diakses disemua halaman maka bisa dimasukkan di sini
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white">
          <Navbar />
          <div className="container mx-auto bg-white">{children}</div>
        </div>
      </body>
    </html>
  );
}
