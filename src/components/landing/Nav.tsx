"use client";
import Link from "next/link";
import Logo from "./Logo";
import { AlignRight } from "lucide-react";
import DropDownButton from "./DropDownButton";
import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false); // Initialize to `false` for a closed state initially

  return (
    <header className="py-6 px-4 lg:px-24">
      <nav className="flex flex-row justify-between items-center w-full">
        <Logo />
        <div className="space-x-8 hidden lg:flex">
          <Link href="#use-cases" className="text-[#013941] font-[600]">
            Use cases
          </Link>
          <Link href="#why-novacrusts" className="text-[#013941] font-[600]">
            Why Novacrusts
          </Link>
          <Link href="#faqs" className="text-[#013941] font-[600]">
            FAQs
          </Link>
        </div>
        <div>
          <button onClick={() => setOpenNav(!openNav)}>
            {/* Toggles openNav */}
            <AlignRight className="lg:hidden" />
          </button>
          <DropDownButton className="w-[8rem] lg:w-[14rem] hidden lg:block">
            Get started
          </DropDownButton>
        </div>
      </nav>
      {openNav && (
        <nav className="h-48 bg-[#e6fbf2] absolute top-15 z-10 left-0 right-0">
          <ul className="px-8 py-4 space-y-2">
            <li>
              <Link href="#use-cases" className="text-sm">
                Use cases
              </Link>
            </li>
            <li>
              <Link href="#why-novacrusts" className="text-sm">
                Why Novacrusts
              </Link>
            </li>
            <li>
              <Link href="#faqs" className="text-sm">
                FAQs
              </Link>
            </li>
            <button className="flex space-x-4 items-center text-sm">
              <Image
                src="./playstore.svg"
                alt="playstore"
                height={24}
                width={24}
              />
              Get it on Google Play
            </button>
            <button className="flex space-x-4 items-center text-sm">
              <Image src="./apple.svg" alt="apple" height={24} width={24} />
              Download on App Store
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
}
