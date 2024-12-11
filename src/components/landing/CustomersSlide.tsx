"use client";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import Carousel from "./Carousel";
import FeedbackCard from "./FeedbackCard";

export default function CustomersSlide() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="block justify-between w-full lg:flex">
      <div>
        <h2 className="w-[100%] flex-1 font-[900] text-center lg:text-left text-lg lg:text-[40px] lg:hidden block">
          Hear from our customers
        </h2>
        <h2 className="w-[100%] flex-1 font-[900] text-center lg:text-left text-lg lg:text-[40px] hidden lg:block">
          Hear from
          <span className="block mt-4">our customers</span>
        </h2>

        <div className="flex mx-auto items-center justify-center lg:justify-start py-6">
          <div className="gap-4 flex">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              {""}
              <svg
                className="h-8 w-8"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="32"
                  transform="rotate(90 32 32)"
                  fill="#013941"
                />
                <path
                  d="M35.05 39.9201L28.53 33.4001C27.76 32.6301 27.76 31.3701 28.53 30.6001L35.05 24.0801"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              {""}
              <svg
                className="w-8 h-8"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="32"
                  transform="rotate(-90 32 32)"
                  fill="#013941"
                />
                <path
                  d="M28.95 24.0799L35.47 30.5999C36.24 31.3699 36.24 32.6299 35.47 33.3999L28.95 39.9199"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Carousel swiperRef={swiperRef}>
          <FeedbackCard
            imageUrl={"/woman.jpg"}
            about="The interface is so easy to use, I was able to set up my virtual card in minutes. Everything is straightforward. No confusing menus, no unnecessary steps. Now, I can track my payments and manage subscriptions without stress. Novacrust feels like it was designed just for me."
            name="Mary Obasi, Entrepreneur"
          />
          <FeedbackCard
            imageUrl="/woman.jpg"
            about="The interface is so easy to use, I was able to set up my virtual card in minutes. Everything is straightforward. No confusing menus, no unnecessary steps. Now, I can track my payments and manage subscriptions without stress. Novacrust feels like it was designed just for me."
            name="Mary Obasi, Entrepreneur"
          />
          <FeedbackCard
            imageUrl="/woman.jpg"
            about="The interface is so easy to use, I was able to set up my virtual card in minutes. Everything is straightforward. No confusing menus, no unnecessary steps. Now, I can track my payments and manage subscriptions without stress. Novacrust feels like it was designed just for me."
            name="Mary Obasi, Entrepreneur"
          />
        </Carousel>
      </div>
    </div>
  );
}
