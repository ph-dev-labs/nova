"use client";

import { useState } from "react";
import Image from "next/image";

export default function DropDownButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative mx-auto">
      <button
        className={`px-8 py-3  mx-auto bg-[#00D47E] text-[#013941] rounded-full font-bold shadow-[-2px_2px_0px_#000000] ${className}`}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <div className="flex items-center justify-center space-x-2">
          <Image
            src="./baseline-vector.svg"
            alt="playstore"
            height={16}
            width={16}
          />
          <Image
            src="./baseline-apple.svg"
            alt="apple"
            height={24}
            width={24}
          />
          {children}
        </div>
      </button>

      {open && (
        <div className="absolute hidden lg:block -bottom-[7.5rem] w-[254px] py-4 rounded-lg px-8 bg-[#E6FBF2] left-0 right-0 space-y-4">
          <button className="flex space-x-4 items-center text-sm">
            <Image
              src="./playstore.svg"
              alt="playstore"
              height={24}
              width={24}
            />
            Get it on Google Play
          </button>
          <hr />
          <button className="flex space-x-4 items-center text-sm">
            <Image src="./apple.svg" alt="apple" height={24} width={24} />
            Download on App Store
          </button>
        </div>
      )}
    </div>
  );
}
