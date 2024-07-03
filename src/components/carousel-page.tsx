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
        }}
      >
        <CarouselContent className="h-screen">
          <CarouselItem className="relative ">
            <Image
              src="/images/1.jpeg"
              alt="First carousel image"
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto w-full"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/images/3.jpeg"
              alt="Second carousel image"
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto w-full"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/images/4.jpg"
              alt="Third carousel image"
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto w-full"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <span className="text-4xl text-white z-10">Almost Summer</span>
      <ArrowDown
        className="absolute bottom-10 animate-pulse border border-black rounded-full"
        onClick={onArrowClick}
      />
    </div>
  );
};

export default CarouselPage;
