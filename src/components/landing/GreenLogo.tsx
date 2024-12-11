"use client";
import Image from "next/image";

export default function GreenLogo() {
  return (
    <div>
      {/* First image visible only on small screens */}
      <Image
        src="./green-logo.svg"
        height={32}
        width={100}
        alt="logo"
        className="block lg:hidden"
      />

      {/* Second image visible only on large screens */}
      <Image
        src="./green-logo.svg"
        height={32}
        width={236}
        alt="logo"
        className="hidden lg:block"
      />
    </div>
  );
}
