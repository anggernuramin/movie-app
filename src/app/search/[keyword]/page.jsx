import { getAnimeResponse } from "@/app/services/api-services";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Pagination from "@/components/Utilities/Pagination";
import React from "react";

const page = async ({ params }) => {
  const keyword = params.keyword;
  const key = decodeURI(keyword);
  console.log("hilangkan tanda %20 = spase", key);

  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`);

  return (
    <>
      <section className="pt-24  bg-color-secondary text-color-third">
        <div className="container mx-auto">
          <Header title={`Hasile Pencarian Anime ${keyword}`} />
          <AnimeList anime={searchAnime?.data} />
        </div>
        <Pagination />
      </section>
    </>
  );
};

export default page;
