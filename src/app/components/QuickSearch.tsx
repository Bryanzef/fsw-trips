import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function QuickSearch() {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-gray-300"></div>
        <h2 className="px-5 font-medium text-gray-700 whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>
      <div className="flex w-full justify-between mt-5 lg:mt-10 lg:justify-center gap-10 md:gap-20 lg:gap-24 xl:gap-32">
        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=hotel"
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={35} height={35} src="/hotel-icon.png" alt="Hotel" />
            <p className="text-sm lg:text-base text-gray-700">Hotel</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=fazenda"
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={35} height={35} src="/farm-icon.png" alt="Fazenda" />
            <p className="text-sm lg:text-base text-gray-700">Fazenda</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=Chalé"
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={35} height={35} src="/cottage-icon.png" alt="Chalé" />
            <p className="text-sm lg:text-base text-gray-700">Chalé</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=pousada"
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={35} height={35} src="/inn-icon.png" alt="Pousada" />
            <p className="text-sm lg:text-base text-gray-700">Pousada</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
