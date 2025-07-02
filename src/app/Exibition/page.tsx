import React from "react";

const exibitions = [
  {
    title: "EXIBITION TITLE",
    desc: [
      "EXIBITION SHORT DESC",
      "BLABLABLA",
      "BLABLABLA",
    ],
    locationDate: "JAKARTA - 22 JUNE 2025",
    image: "/Attack__000.png",
  },
  {
    title: "EXIBITION TITLE",
    desc: [
      "EXIBITION SHORT DESC",
      "BLABLABLA",
      "BLABLABLA",
    ],
    locationDate: "JAKARTA - 22 JUNE 2025",
    image: "/Attack__000.png",
  },
  {
    title: "EXIBITION TITLE",
    desc: [
      "EXIBITION SHORT DESC",
      "BLABLABLA",
      "BLABLABLA",
    ],
    locationDate: "JAKARTA - 22 JUNE 2025",
    image: "/Attack__000.png",
  },
];

export default function ExibitionPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col gap-12 items-center py-12">
      {/* Navigation Header */}
      <div className="flex gap-6 mb-8 mt-2 justify-center">
        {['Home', 'Painting', 'Mural', 'Custom', 'Contact'].map((cat) => (
          <button
            key={cat}
            className="px-6 py-2 rounded-full bg-white/80 text-black font-semibold shadow hover:bg-blue-200 transition-colors border border-gray-300"
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>
      {exibitions.map((ex, idx) => (
        <div
          key={idx}
          className="group w-[90vw] max-w-5xl h-48 rounded-2xl shadow-lg relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-end"
          style={{ backgroundImage: `url(${ex.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Text content above the image */}
          <div className="absolute top-0 right-0 flex flex-col items-end w-full pr-12 pt-6 z-10 text-right">
            <div className="mb-2 inline-block relative">
              <span className="absolute inset-0 bg-black/0 rounded-lg -z-10" />
              <span className="text-3xl sm:text-4xl font-tiny text-white transition-all duration-150 blur-[0px] group-hover:blur-0 group-hover:font-bold text-white px-0">
                {ex.title}
              </span>
            </div>
            <div className="mb-2 inline-block relative">
              <span className="absolute inset-0 bg-black/0 rounded-lg -z-10" />
              <div className="text-base sm:text-lg font-tiny text-white transition-all duration-150 blur-[0px] group-hover:blur-0 group-hover:font-bold text-white px-0">
                {ex.desc.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
            <div className="mt-2 inline-block relative">
              <span className="absolute inset-0 bg-black/0 rounded-lg -z-10" />
              <span className="text-sm sm:text-base font-tiny text-white transition-all duration-150 blur-[0px] group-hover:blur-0 group-hover:font-bold text-white px-0">
                {ex.locationDate}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 