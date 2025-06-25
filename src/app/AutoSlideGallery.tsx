"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { id: 1, title: "Sunset Over the Lake", artist: "Artist A", image: "/file.svg" },
  { id: 2, title: "Abstract Dreams", artist: "Artist B", image: "/file.svg" },
  { id: 3, title: "City Lights", artist: "Artist C", image: "/file.svg" },
  { id: 4, title: "Forest Path", artist: "Artist D", image: "/file.svg" },
  { id: 5, title: "Ocean Breeze", artist: "Artist E", image: "/file.svg" },
];

export default function AutoSlideGallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-screen max-w-none relative flex flex-col items-center py-0 mb-8">
      <div className="relative w-full h-[40vw] min-h-[240px] max-h-[480px] overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            aria-hidden={idx !== current}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-full"
              priority={idx === 0}
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-8 py-6 flex flex-col">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 drop-shadow-lg">{slide.title}</h3>
              <p className="text-lg text-gray-200 drop-shadow">by {slide.artist}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4 absolute left-1/2 -translate-x-1/2 bottom-4 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-700"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 