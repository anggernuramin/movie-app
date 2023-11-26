import React from "react";
import Image from "next/image"
import Link from "next/link";

const AnimeList = ({anime}) => {
  return <div className="grid grid-cols-4 gap-4">
    {anime.map((item) => {
      return (
        <Link href={`/${item.mal_id}`} key={item.mal_id} className=" shadow-xl rounded-sm h-[400px] overflow-hidden">
          <Image src={item?.images?.webp.image_url} alt={item.title} width={400} height={0} className="w-full h-[340px] object-cover object-center"/>
          <h3 className="p-3 font-medium line-clamp-2">
            {item.title}
          </h3>
        </Link>
      )
    })}
  </div>;
};

export default AnimeList;
