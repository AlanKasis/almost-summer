"use client";

import { ArrowDown } from "lucide-react";
import React, { MouseEventHandler, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type CarouselPageProps = {};

const CarouselPage = (props: CarouselPageProps) => {
  const onArrowClick = () => {
    scrollBy({ top: 10000, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Carousel
        className="h-full w-full bg-blue-100 absolute flex justify-center items-center"
        opts={{
          loop: true,
          watchDrag: false,
          duration: 30
        }}
      >
        <CarouselContent className="h-screen ml-0">
          <CarouselItem className="relative pl-0">
            <Image
              src="/images/1.jpeg"
              alt="First carousel image"
              height={0}
              width={0}
              sizes="100vw"
              className="h-full w-auto object-cover md:h-auto md:w-full"
            />
          </CarouselItem>
          <CarouselItem className="relative pl-0">
            <Image
              src="/images/3.jpeg"
              alt="Second carousel image"
              height={0}
              width={0}
              sizes="100vw"
              className="h-full w-auto object-cover md:h-auto md:w-full"
            />
          </CarouselItem>
          <CarouselItem className="relative pl-0">
            <Image
              src="/images/4.jpg"
              alt="Third carousel image"
              height={0}
              width={0}
              sizes="100vw"
              className="h-full w-auto object-cover md:h-auto md:w-full"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <span className="text-4xl text-white z-10">Almost Summer</span>
      <ArrowDown
        className="absolute bottom-10 animate-pulse border border-black rounded-full invert cursor-pointer"
        onClick={onArrowClick}
      />
    </div>
  );
};

export default CarouselPage;
