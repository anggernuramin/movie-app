import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import React from "react";

const page = async({params}) => {
  const keyword = params.keyword

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await response.json()

  return <>
  <section>

    <Header title={`Hasile Pencarian Anime ${keyword}`}/>
    <AnimeList anime={searchAnime.data}/>
  </section>
  </>
};

export default page;
