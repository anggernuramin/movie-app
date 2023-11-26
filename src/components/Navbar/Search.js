// Dinext js jika kita membutuhkan interaksi user seperti state di react atau event handler maka pastikan beritahu nextjs dengan keyword "use client" artinya kita akan merender disisi client
"use client";

import { useRouter } from "next/navigation";
import { MagnifyingGlass } from "phosphor-react";
import React, { useRef } from "react";

const Search = () => {
  const inputRef = useRef();
  const router = useRouter()

  const handleSearh = (event) => {
    event.preventDefault();
    const keyword = inputRef.current.value

    if(keyword === ""){
      alert('Input tidak boleh kosong')
      return
    }
  // arahkan ke page dinamis dengan ditandai folder dengan dibungkus dengan kurung siku/bracket [nameFolder]
   router.push(`/search/${keyword}`)
  };

  return (
    <form onSubmit={handleSearh} className="relative">
      <input
        className="py-2 pe-4 ps-3 text-black outline-none rounded-sm"
        type="text"
        placeholder="Search movie ..."
        ref={inputRef}
      />
      <button className="absolute top-2 end-2 text-slate-800" type="submit">
        <MagnifyingGlass size={24} />
      </button>
    </form>
  );
};

export default Search;
