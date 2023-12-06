"use client";
import { X } from "@phosphor-icons/react";
import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
  const [opeenVideoPlayer, setOpenVideoPlayer] = useState(true);

  const opts = {
    height: "390",
    width: "100%",
  };

  const handlerOpenVideo = () => {
    setOpenVideoPlayer((prevState) => !prevState);
  };
  return (
    <div className="relative md:py-10 w-full  mt-5">
      {opeenVideoPlayer ? (
        <>
          <X
            onClick={handlerOpenVideo}
            size={32}
            className="absolute top-[0px] right-2 text-white font-semibold cursor-pointer transition-all hover:text-color-primary"
          />
          <YouTube
            opts={opts}
            videoId={videoId}
            onReady={(event) => event.target.pauseVideo()}
          />
        </>
      ) : (
        <div className="w-full flex justify-center items-center">
          <button
            onClick={handlerOpenVideo}
            className="px-6 py-2 bg-color-primary text-white cursor-pointer transition-all hover:bg-red-500"
          >
            Open Trailer
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
