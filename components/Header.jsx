"use client";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

export default function Header() {
  useGSAP(() => {});

  return (
    <div className="w-full h-24 borderr flex px-16 py-8 items-center">
      <div className="uppercase">Basic/Dept</div>
      <div className="flex items-center justify-between gap-12 m-auto">
        <Link href={"/"} className="headerLink">
          Carreer
        </Link>
        <Link href={"/"} className="headerLink">
          Menu
        </Link>
        <Link href={"/"} className="headerLink">
          Carreer
        </Link>
        <Link href={"/"} className="headerLink">
          Work
        </Link>
        <Link href={"/"} className="headerLink">
          Carreer
        </Link>
      </div>
      <div>Menu</div>
    </div>
  );
}
