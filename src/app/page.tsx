import Image from "next/image";
import AutoSlideGallery from "./AutoSlideGallery";

export default function Home() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center font-sans">
            {/* Hero Section */}
            <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight">Art Galey</h1>
                <p className="text-lg sm:text-2xl max-w-2xl mb-8 text-gray-700 dark:text-gray-300">Discover, appreciate, and collect stunning works from talented artists around the world.</p>
                <div className="w-full flex justify-center">
                    <Image
                        src="/public/globe.svg"
                        alt="Gallery Hero Art"
                        width={120}
                        height={120}
                        className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black"
                        priority
                    />
                </div>
            </section>

            {/* Auto Slide Gallery */}
            <AutoSlideGallery />

            {/* Featured Artworks */}
            <section className="w-full max-w-5xl py-16 px-4">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Featured Artworks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4">
                            <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-4">
                                <Image
                                    src={`/public/file.svg`}
                                    alt={`Artwork ${num}`}
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <h3 className="font-medium text-lg mb-1">Artwork Title {num}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">by Artist Name</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="w-full max-w-3xl py-12 px-4 text-center">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">About Art Galey</h2>
                <p className="text-base text-gray-600 dark:text-gray-300">
                    Art Galey is a curated online art gallery showcasing a diverse range of contemporary artworks. Our mission is to connect art lovers with inspiring pieces and support emerging and established artists worldwide.
                </p>
            </section>
        </div>
    );
}
