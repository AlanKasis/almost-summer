"use client";

import { ArrowDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import useScrollPosition from "../hooks/useScrollPosition";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

type CarouselPageProps = {};

const CarouselPage = (props: CarouselPageProps) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState<boolean>(false);
  const scrollPosition = useScrollPosition();

  const onArrowClick = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: window.innerHeight * 1.5 },
      ease: "power2",
    });
    const timeout = setTimeout(() => {
      setHasScrolledToBottom(true);
    }, 1000)
    return () => clearTimeout(timeout)
  };

  useEffect(() => {
    if (scrollPosition > 0 && !hasScrolled) {
      setHasScrolled(true);
      onArrowClick();
    }
  }, [scrollPosition, hasScrolled]);

  return (
    <div className={`${hasScrolledToBottom ? "hidden" : "flex"} md:flex justify-center items-center bg-blue-100 h-screen w-full`}>
      <Carousel
        className="h-full w-full bg-blue-100 absolute flex justify-center hidden md:block items-center"
        opts={{
          loop: true,
          watchDrag: false,
          duration: 30,
        }}
      >
        <CarouselContent className="h-screen ml-0">
          {/* <CarouselItem className="relative pl-0">
            <Image
              src="/images/1.jpeg"
              priority
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
          </CarouselItem> */}
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
      <span className="hidden md:block text-4xl md:text-5xl p-2 z-10">Almost Summer</span>
      <span className="md:hidden opacity-0 transition-opacity text-4xl md:text-5xl p-2 z-10 animate-[appear_1500ms_cubic-bezier(0.4,_0,_0.2,_1)_500ms_forwards]">Welcome</span>
      <ArrowDown
        className="absolute h-8 w-8 md:h-10 md:w-10 p-1 bottom-10 animate-pulse border border-black rounded-full cursor-pointer"
        onClick={onArrowClick}
      />
    </div>
  );
};

export default CarouselPage;
