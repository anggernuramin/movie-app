import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

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
      <body className={gabarito.className}>
        <Navbar />
        <div className="bg-white">{children}</div>
      </body>
    </html>
  );
}
