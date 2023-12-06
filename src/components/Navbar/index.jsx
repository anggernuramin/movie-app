"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Search from "./Search";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  // Periksa apakah path saat ini adalah '/' (home)
  const pageHome = pathname == "/";

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const viewPortHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const scrollPosition =
        window.screenY ||
        window.pageYOffset ||
        document.body.scrollTop +
          ((document.documentElement && document.documentElement.scrollTop) ||
            0);

      console.log("position", scrollPosition);
      if (pageHome && scrollPosition >= viewPortHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageHome]);

  return (
    <div
      className={`text-color-primary  fixed z-40 w-full
       ${scrolled && "bg-slate-950"}
       ${!pageHome && "bg-slate-950"}
      `}
    >
      <div className=" container mx-auto  w-full my-4 ">
        <div className="container flex justify-between items-center gap-3 flex-col sm:flex-row">
          <Link href={"/"} className="cursor-pointer">
            <h1 className="font-semibold text-4xl ">AnimeApp</h1>
          </Link>
          {scrolled ? <h3>True</h3> : <h3>False</h3>}
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
