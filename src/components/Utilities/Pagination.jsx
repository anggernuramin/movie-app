"use client";
import React from "react";

const Pagination = ({ page, setPage, totalPage }) => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlerPrev = () => {
    if (page <= 1) return;
    // lastPage merepresentasikan nilai page yang terakhir ini sama dengan setPage(page - 1)
    setPage((lastPage) => lastPage - 1);
    scrollTop();
    console.log(page);
  };

  const handlerNext = () => {
    if (page >= totalPage) return;
    // lastPage merepresentasikan nilai page yang terakhir ini sama dengan setPage(page - 1)
    setPage((lastPage) => lastPage + 1);
    scrollTop();
    console.log(page);
  };
  return (
    <div className="flex justify-center items-center w-full gap-3 pb-20">
      <button onClick={handlerPrev} className="border px-6 py-[2px] rounded-sm">
        Prev
      </button>
      <span>
        {page} from {totalPage} page
      </span>
      <button onClick={handlerNext} className="border px-6 py-[2px] rounded-sm">
        Next
      </button>
    </div>
  );
};

export default Pagination;
