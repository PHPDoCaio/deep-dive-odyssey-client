import Link from "next/link";
import Image from "next/image";
import flag from "../../public/australiaFlag.png";

interface CardProps {
  link: string;
  animalOrPlantName: string;
  region: string;
}
export default function Card({ link, animalOrPlantName, region }: CardProps) {
  return (
    <Link
      href={link}
      className="flex items-center gap-6 p-4 rounded-2xl h-full bg-brandingColor-800 hover:shadow-4xl transition-shadow"
    >
      <div className="h-20 w-20 bg-brandingColor-700 rounded-lg flex justify-center items-center">
        {/* <Image  /> */}oi
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="uppercase text-gray-200">{animalOrPlantName}</h2>
        <div className="flex gap-2 items-center uppercase">
          <Image src={flag} alt="Flag" className="" />
          <h3 className="text-sm text-gray-300">{region}</h3>
        </div>
      </div>
    </Link>
  );
}
