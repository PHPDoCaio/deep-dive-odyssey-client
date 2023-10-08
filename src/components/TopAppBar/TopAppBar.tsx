"use client";

import Image from "next/image";
import deepDiveOdysseyLogo from "../../../public/deepDiveOdyssey.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HOME_ROUTE, PLANT_ENCYCLOPEDIA_ROUTE } from "@/constants/routes";

export default function TopAppBar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="px-4 py-2 w-full bg-brandingColor-900 flex juxtify-center lg:justify-between items-center fixed z-10">
        <Image
          src={deepDiveOdysseyLogo}
          alt="Logo da Deep Dive Odyssey"
          priority
          className="h-10 w-auto"
        />
        <div className="hidden lg:flex gap-4 items-center text-xs">
          <Link
            href={HOME_ROUTE}
            className={`${
              pathname === HOME_ROUTE
                ? "text-brandingColor-400"
                : "text-gray-300"
            }`}
          >
            Enciclopédia Animal
          </Link>
          <Link
            href={PLANT_ENCYCLOPEDIA_ROUTE}
            className={`${
              pathname === PLANT_ENCYCLOPEDIA_ROUTE
                ? "text-brandingColor-400"
                : "text-gray-300"
            }`}
          >
            Enciclopédia Vegetal
          </Link>
        </div>
      </nav>
    </>
  );
}
