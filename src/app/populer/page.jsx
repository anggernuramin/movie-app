/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import AnimeList from "@/components/AnimeList";
import Pagination from "@/components/Utilities/Pagination";
import React, { useState } from "react";
import { useEffect } from "react";
import { getAnimeResponse } from "../services/api-services";
import HeaderAnime from "@/components/Utilities/HeaderAnime";

const page = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [page, setPage] = useState(1);
  const fetchTopAnime = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchTopAnime();
  }, [page]);

  return (
    <section className="pt-24 min-h-screen w-full bg-color-secondary text-color-third">
      <div className="container mx-auto">
        <HeaderAnime
          title={`Populer Page ke ${topAnime?.pagination?.current_page}`}
        />
        <AnimeList anime={topAnime?.data} />
        <Pagination
          page={page}
          setPage={setPage}
          totalPage={topAnime?.pagination?.last_visible_page}
        />
      </div>
    </section>
  );
};

export default page;
