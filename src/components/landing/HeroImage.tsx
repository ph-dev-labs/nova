"use client";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div>
      <Image src="./hero image.svg" height={331} width={500} alt="logo" />
    </div>
  );
}
