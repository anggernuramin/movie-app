import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center gap-3 flex-col sm:flex-row">
        <Link href={"/"} className="cursor-pointer">
        <h1 className="font-semibold text-3xl">AnimeApp</h1>
        </Link>
        <input className="input" type="text" placeholder="Text input" />
      </div>
    </div>
  );
};

export default Navbar;
