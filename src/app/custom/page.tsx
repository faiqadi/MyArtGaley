"use client";
import React, { useState } from "react";
import Image from "next/image";

const allArtworks = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Custom ${i + 1}`,
    artist: `Artist ${i + 1}`,
    image: "/Attack__000.png", // Replace with real image paths later
}));

const PAGE_SIZE = 12;

export default function Custom() {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(allArtworks.length / PAGE_SIZE);
    const startIdx = (page - 1) * PAGE_SIZE;
    const artworks = allArtworks.slice(startIdx, startIdx + PAGE_SIZE);

    return (
        <div className="min-h-screen overflow-visible">
            <div className="sticky top-16 z-30 w-full bg-pink-100 dark:bg-pink-900/80 text-pink-900 dark:text-white py-4 px-4 shadow font-medium text-center">
                Custom art adalah karya seni yang dibuat sesuai permintaan atau kebutuhan khusus, memberikan sentuhan personal dan unik pada setiap karya.
            </div>
            <div className="max-w-6xl mx-auto py-16 px-4 pt-20">
                <h1 className="text-3xl font-bold mb-8 text-center">Custom</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {artworks.map((art) => (
                        <div key={art.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4">
                            <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-4">
                                <Image
                                    src={art.image}
                                    alt={art.title}
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <h3 className="font-medium text-lg mb-1">{art.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">by {art.artist}</p>
                        </div>
                    ))}
                </div>
                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-4 mt-12">
                    <button
                        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium disabled:opacity-50"
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                    <span className="text-base font-semibold">
                        Page {page} of {totalPages}
                    </span>
                    <button
                        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium disabled:opacity-50"
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
} 