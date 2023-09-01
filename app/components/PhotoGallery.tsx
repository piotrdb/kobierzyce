"use client";

import React, { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

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
  const [photoId, setPhotoId] = useState(0);
  const [overlayOpened, setOverlayOpened] = useState(false);
  const photoIdRange = images.length;
  const nextPhoto = () => {
    if (photoId < photoIdRange - 1) {
      setPhotoId(photoId + 1);
    } else {
      setPhotoId(0);
    }
  };
  const prevPhoto = () => {
    if (photoId > 0) {
      setPhotoId(photoId - 1);
    } else {
      setPhotoId(photoIdRange - 1);
    }
  };
  const switchOverlay = () => {
    setOverlayOpened(!overlayOpened);
    console.log(overlayOpened);
  };

  return (
    <>
      <div className="hidden md:grid grid-cols-12 grid-rows-6 gap-4 h-[420px] lg:h-[480px] xl:h-[520px] 2xl:h-[600px] 3xl:h-[690px]">
        {images.map((image, id) => (
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
              onClick={() => {
                switchOverlay();
                setPhotoId(id);
              }}
            />
          </div>
        ))}
      </div>
      <div className="md:hidden h-[480px] relative w-full rounded-lg overflow-hidden">
        <div className="relative h-full w-full" onClick={switchOverlay}>
          <Image
            src={images[photoId].path}
            alt={images[photoId].alt}
            fill
            objectFit="cover"
          />
        </div>
        <div
          className="absolute left-0 top-1/2 translate-y-[-50%] rounded-r-lg flex items-center justify-center aspect-square bg-white bg-opacity-20 py-4 pr-2"
          onClick={prevPhoto}
        >
          <FaChevronLeft size={28} />
        </div>
        <div
          className="absolute right-0 top-1/2 translate-y-[-50%] rounded-l-lg flex items-center justify-center aspect-square bg-white bg-opacity-20 py-4 pl-2"
          onClick={nextPhoto}
        >
          <FaChevronRight size={28} />
        </div>
        <div className="absolute right-5 bottom-5 bg-zinc-700 bg-opacity-60 text-white font-righteous px-4 py-2 rounded-lg">
          {photoId + 1}/{photoIdRange}
        </div>
      </div>
      {overlayOpened && (
        <div className="fixed top-0 left-0 bg-zinc-900 bg-opacity-90 w-full h-[100vh] ">
          <div className="h-full w-full mx-auto relative sm:px-16 rounded-lg overflow-hidden">
            <div className="relative mx-auto h-full w-full lg:max-w-[720px] xl:max-w-[920px] 2xl:max-w-[1024px]">
              <Image
                src={images[photoId].path}
                alt={images[photoId].alt}
                objectFit="contain"
                fill
              />
            </div>
            <div
              className="absolute left-0 top-1/2 translate-y-[-50%] rounded-r-lg flex items-center justify-center aspect-square bg-white bg-opacity-20 py-4 pr-2 cursor-pointer sm:py-6 sm:pr-3 sm:pl-1 lg:py-8 lg:pr-4 lg:pl-2"
              onClick={prevPhoto}
            >
              <FaChevronLeft size={28} />
            </div>
            <div
              className="absolute right-0 top-1/2 translate-y-[-50%] rounded-l-lg flex items-center justify-center aspect-square bg-white bg-opacity-20 py-4 pl-2 cursor-pointer sm:py-6 sm:pl-3 sm:pr-1 lg:py-8 lg:pl-4 lg:pr-2"
              onClick={nextPhoto}
            >
              <FaChevronRight size={28} />
            </div>
            <div className="absolute right-5 bottom-5 bg-zinc-700 bg-opacity-60 text-white font-righteous px-4 py-2 rounded-lg">
              {photoId + 1}/{photoIdRange}
            </div>
          </div>
          <div
            className="absolute top-5 right-5 p-2 bg-zinc-600 rounded-lg cursor-pointer"
            onClick={switchOverlay}
          >
            <IoMdClose size={32} />
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
