import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type Img = {
  path: string;
  alt: string;
  class?: string;
  containerClass: string;
};

const images: Img[] = [
  {
    path: "/img00.jpg",
    alt: "Zdjęcie budynku",
    containerClass: "row-span-4 col-span-6",
  },
  {
    path: "/img01.jpg",
    alt: "Zdjęcie budynku",
    containerClass: "row-span-2 col-span-3",
  },
  {
    path: "/img02.jpg",
    alt: "Zdjęcie budynku",
    containerClass: "row-span-2 col-span-3",
  },
  {
    path: "/img03.jpg",
    alt: "Zdjęcie budynku",
    containerClass: "row-span-4 col-span-2",
  },
  {
    path: "/img04.jpg",
    alt: "Zdjęcie budynku",
    containerClass: "row-span-2 col-span-2",
  },
  {
    path: "/img05.jpg",
    alt: "Zdjęcie budynku",
    containerClass: "row-span-2 col-span-2",
  },
  {
    path: "/img06.jpg",
    alt: "Zdjęcie budynku",
    containerClass: "row-span-2 col-span-2",
  },
  {
    path: "/img07.jpg",
    alt: "Zdjęcie budynku",
    containerClass: "row-span-2 col-span-2",
  },
  {
    path: "/img08.jpg",
    alt: "Zdjęcie budynku",
    containerClass: "row-span-2 col-span-2",
  },
  {
    path: "/img09.jpg",
    alt: "Zdjęcie budynku",
    containerClass: "row-span-2 col-span-2",
  },
  {
    path: "/img10.jpg",
    alt: "Zdjęcie budynku",
    containerClass: "row-span-2 col-span-2",
  },
];

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[420px] lg:h-[480px] xl:h-[520px] 2xl:h-[600px] 3xl:h-[690px]">
      {images.map((image) => (
        <div
          key={image.path}
          className={twMerge(
            "relative overflow-hidden rounded-lg cursor-pointer hover:drop-shadow-glow",
            image.containerClass
          )}
        >
          <Image
            src={image.path}
            alt={image.alt}
            fill
            objectFit="cover"
            className={twMerge(
              "hover:scale-105 transition-all duration-500 rounded-lg",
              image.class
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
