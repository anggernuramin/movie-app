import { getAnimeResponse } from "@/app/services/api-services";
import HeaderAnime from "@/components/Utilities/HeaderAnime";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <section className="pt-36 md:pt-24 min-h-screen w-full bg-color-secondary text-color-third">
      <div className="container p-5 md:p-0 w-full md:w-[70%] mx-auto ">
        <HeaderAnime title={"Detail Anime"} />
        <h2 className="text-2xl font-semibold mb-5">
          {anime?.data?.title} - {anime?.data?.year}
        </h2>

        <div className="overflow-x-auto">
          <div className="flex justify-between items-center  mb-5 gap-3  w-min ">
            <div className="border-2 border-color-white w-[123px] px-3 flex flex-col justify-center line-clamp-1 items-center py-[3px] rounded-sm">
              <h3 className="text-sm font-semibold text-color-primary">TYPE</h3>
              <p className="text-sm line-clamp-1">{anime?.data?.type}</p>
            </div>

            <div className="border-2 border-color-white w-[123px] px-3 flex flex-col justify-center line-clamp-1 items-center py-[3px] rounded-sm">
              <h3 className="text-sm font-semibold text-color-primary">
                STATUS
              </h3>
              <p className="text-sm line-clamp-1">{anime?.data?.status}</p>
            </div>

            <div className="border-2 border-color-white w-[123px] px-3 flex flex-col justify-center line-clamp-1 items-center py-[3px] rounded-sm">
              <h3 className="text-sm font-semibold text-color-primary">
                DURATION
              </h3>
              <p className="text-sm line-clamp-1">{anime?.data?.duration}</p>
            </div>

            <div className="border-2 border-color-white w-[123px] px-3 flex flex-col justify-center line-clamp-1 items-center py-[3px] rounded-sm">
              <h3 className="text-sm font-semibold text-color-primary">
                Rating
              </h3>
              <p className="text-sm line-clamp-1">{anime?.data?.rating}</p>
            </div>
            <div className="border-2 border-color-white w-[123px] px-3 flex flex-col justify-center line-clamp-1 items-center py-[3px] rounded-sm">
              <h3 className="text-sm font-semibold text-color-primary">
                SCORE
              </h3>
              <p className="text-sm line-clamp-1">{anime?.data?.score}</p>
            </div>
            <div className="border-2 border-color-white w-[123px] px-3 flex flex-col justify-center line-clamp-1 items-center py-[3px] rounded-sm">
              <h3 className="text-sm font-semibold text-color-primary">Rank</h3>
              <p className="text-sm line-clamp-1">{anime?.data?.rank}</p>
            </div>
            <div className="border-2 border-color-white w-[123px] px-3 flex flex-col justify-center line-clamp-1 items-center py-[3px] rounded-sm">
              <h3 className="text-sm font-semibold text-color-primary">
                Season
              </h3>
              <p className="text-sm line-clamp-1">{anime?.data?.season}</p>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col w-full justify-center items-center gap-5">
          <div className="w-[50%] md:w-[30%]">
            <Image
              src={anime?.data?.images?.webp?.image_url}
              alt={anime?.data?.title}
              width={100}
              height={0}
              className="w-full h-[340px] object-cover object-center overflow-hidden"
            />
          </div>
          <div className="sm:w-[50%] md:w-[70%] ">
            <p>{anime?.data?.synopsis}</p>
          </div>
        </div>

        <VideoPlayer videoId={anime?.data?.trailer?.youtube_id} />
      </div>
    </section>
  );
};

export default page;
