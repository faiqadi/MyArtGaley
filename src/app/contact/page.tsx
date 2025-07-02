import React from "react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center justify-center">
            <div className="max-w-2xl w-full py-16 px-4 text-center">
                <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
                <div className="flex flex-col gap-6 items-center justify-center">
                    {/* WhatsApp */}
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-medium hover:text-white transition-colors">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-white"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M16.7 14.6c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.9.9-.2.2-.3.2-.6.1-.2-.1-.8-.3-1.5-.9-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.4.1-.5.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.1.1-.2.1-.3 0-.1 0-.2-.1-.3-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.5.2-.2.2-.7.7-.7 1.7 0 1 .7 2 1.5 2.7 1.1 1 2.1 1.3 2.5 1.4.4.1.8.1 1.1.1.3 0 .7-.1.9-.2.3-.1.6-.5.7-.7.1-.2.1-.4.1-.5 0-.1-.1-.2-.2-.3z" stroke="currentColor" strokeWidth="1.5"/></svg>
                        +62 812-3456-7890
                    </a>
                    {/* Instagram */}
                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-medium hover:text-white transition-colors">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-white"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>
                        @yourprofile
                    </a>
                    {/* YouTube */}
                    <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-medium hover:text-white transition-colors">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-white"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/><polygon points="10,8 16,12 10,16" fill="currentColor"/></svg>
                        YouTube Channel
                    </a>
                    {/* Studio Location */}
                    <div className="flex items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-200">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-white"><path d="M12 21s7-7.75 7-13A7 7 0 0 0 5 8c0 5.25 7 13 7 13z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2"/></svg>
                        Jl. Contoh Alamat No. 123, Kota, Negara
                    </div>
                </div>
            </div>
        </div>
    );
} 