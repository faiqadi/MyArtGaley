import React from "react";

export default function About() {
    return (
        <div className="max-w-3xl mx-auto py-16 px-4 text-center">
            <img
                src="/file.svg"
                alt="Artist Portrait"
                className="mx-auto mb-6 w-32 h-32 rounded-full border-4 border-gray-200 dark:border-gray-700 object-cover shadow-lg"
            />
            <h1 className="text-3xl font-bold mb-8">About Art Galey</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
                Art Galey is a curated online art gallery showcasing a diverse range of contemporary artworks. Our mission is to connect art lovers with inspiring pieces and support emerging and established artists worldwide.
            </p>
        </div>
    );
} 