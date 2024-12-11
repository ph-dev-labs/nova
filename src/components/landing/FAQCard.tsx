import React from "react";

export default function FAQCard({ text }: { text: string }) {
  return (
    <div className="bg-[#E6FBF2] rounded-xl w-full px-[2rem] py-[1.5rem] flex justify-between items-center">
      <p className="text-md font-[700]">{text}</p>
      <button>
        <svg
          className="h-8 w-8"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="32" fill="#013941" />
          <path
            d="M39.92 28.9502L33.4 35.4702C32.63 36.2402 31.37 36.2402 30.6 35.4702L24.08 28.9502"
            stroke="white"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
