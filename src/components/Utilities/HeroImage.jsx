import React from "react";

const HeroImage = () => {
  return (
    <div className="w-full h-screen bg-home ">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-color-third text-center w-[90%] z-30">
        <h1 className="font-bold text-5xl leading-[55px]">
          Nikmati film yang ramai dibicarakan, serial populer, dan lainnya mulai
          dari Rp54.000.
        </h1>
        <p className="font-semibold text-xl mt-5">
          Gabung sekarang. Batalkan kapan pun.
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
