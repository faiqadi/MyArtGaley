import React from "react";

export default function Artists() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Artists</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Artist profiles */}
                {[
                    { name: "Artist A", image: "/file.svg", description: "Contemporary painter known for vibrant landscapes." },
                    { name: "Artist B", image: "/file.svg", description: "Digital artist exploring abstract forms." },
                    { name: "Artist C", image: "/file.svg", description: "Sculptor working with recycled materials." },
                    { name: "Artist D", image: "/file.svg", description: "Photographer capturing urban life." },
                ].map((artist, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                        <img
                            src={artist.image}
                            alt={artist.name + ' portrait'}
                            className="w-24 h-24 rounded-full mb-4 border-4 border-gray-200 dark:border-gray-700 object-cover shadow"
                        />
                        <h2 className="text-xl font-semibold mb-1">{artist.name}</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center text-sm">{artist.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
} 