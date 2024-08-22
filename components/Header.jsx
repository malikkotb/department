"use client";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

export default function Header() {
  useGSAP(() => {});

  // TODO: add scrollTrigger to header that makes it 
  // scroll away faster when scrolling down and scroll back when scrolling up

  return (
    <div className="w-full text-white h-24 bg-transparent absolute z-50 flex px-16 py-10 items-center">
      <div className="uppercase">Basic/Dept</div>
      <div className="flex items-center justify-between gap-12 m-auto">
        <Link href={"/"} className="headerLink">
          Career
        </Link>
        <Link href={"/"} className="headerLink">
          Menu
        </Link>
        <Link href={"/"} className="headerLink">
          Career
        </Link>
        <Link href={"/"} className="headerLink">
          Work
        </Link>
        <Link href={"/"} className="headerLink">
          Career
        </Link>
      </div>
      <div className="uppercase">Menu</div>
    </div>
  );
}
