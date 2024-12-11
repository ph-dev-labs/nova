"use client";
import React, { RefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel({
  children,
  swiperRef,
}: {
  children: React.ReactNode;
  swiperRef: RefObject<SwiperType | null>;
}) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
