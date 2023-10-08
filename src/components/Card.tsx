import Link from "next/link";
import Image from "next/image";
import australiaFlag from "../../public/australiaFlag.png";
import canadaFlag from "../../public/canadaFlag.png";
import worldMapFlag from "../../public/worldFlag.png"
import { useEffect, useState } from "react";

interface CardProps {
  link: string;
  animalOrPlantName: string;
  region: string;
  pixelArtContent: string;
}


export default function Card({ link, animalOrPlantName, region, pixelArtContent }: CardProps) {
  const base64String = `data:image/png;base64,${pixelArtContent}`

  return (
    <Link
      href={link}
      className="flex items-center gap-6 p-4 rounded-2xl bg-brandingColor-800 hover:shadow-4xl transition-shadow"
    >
      <div className="h-auto w-1/5 bg-brandingColor-700 rounded-lg flex justify-center items-center">
        <img src={base64String} alt="Imagem em pixel art" className="w-auto h-auto" />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="uppercase text-gray-200 text-sm">{animalOrPlantName}</h2>
        <div className="flex gap-2 items-center uppercase">
          <Image src={region === "Canadá" ? canadaFlag : region === "Austrália" ? australiaFlag : worldMapFlag} alt="Flag" className="" />
          <h3 className="text-xs text-gray-300">{region}</h3>
        </div>
      </div>
    </Link>
  );
}
 