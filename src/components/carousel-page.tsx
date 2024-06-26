'use client'

import { ArrowDown } from "lucide-react";
import React, { MouseEventHandler, useRef } from "react";

type CarouselPageProps = {};

const CarouselPage = (props: CarouselPageProps) => {
  const onArrowClick = () => {
    scrollBy({top:window.innerHeight, behavior: "smooth"});
  };
  
  return (
    <div className="flex justify-center items-center h-screen w-full bg-slate-200">
      <span className="text-3xl z-10">Almost Summer</span>
      <ArrowDown
        className="absolute bottom-10 animate-pulse border border-black rounded-full"
        onClick={onArrowClick}
      />
    </div>
  );
};

export default CarouselPage;
