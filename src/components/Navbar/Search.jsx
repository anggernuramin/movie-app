// Dinext js jika kita membutuhkan interaksi user seperti state di react atau event handler maka pastikan beritahu nextjs dengan keyword "use client" artinya kita akan merender disisi client
"use client";

import { useRouter } from "next/navigation";
import { MagnifyingGlass } from "phosphor-react";
import React, { useRef } from "react";

const Search = () => {
  const inputRef = useRef();
  const router = useRouter();

  // jika tidak ingin menggunakan form, maka bisa menggunakan event onClick dan onEvent
  const handleSearh = (event) => {
    event.preventDefault();
    const keyword = inputRef.current.value;
    if (keyword === "") {
      alert("Input tidak boleh kosong");
      return;
    }
    // arahkan ke page dinamis dengan ditandai folder dengan dibungkus dengan kurung siku/bracket [nameFolder]
    router.push(`/search/${keyword}`);
  };

  return (
    <form onSubmit={handleSearh} className="relative">
      <input
        className="py-2 pe-4 ps-3 text-white  outline-none  border-color-third border rounded-sm bg-transparent"
        type="text"
        placeholder="Search Anime here..."
        ref={inputRef}
      />
      <button
        className="absolute top-2 end-2 text-color-primary font-bold"
        type="submit"
      >
        <MagnifyingGlass size={24} />
      </button>
    </form>
  );
};

export default Search;
