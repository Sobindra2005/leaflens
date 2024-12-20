import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-green-500 sticky top-0 right-0 w-full z-50 text-white p-4 shadow-md flex justify-start items-center">
            <svg
                width={200}
                height={200}
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className='w-10 h-10'
                aria-label="LeafLens logo"
            >
                <defs>
                    <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#4a7c59', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#8b5e3c', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                {/* Lens circle */}
                <circle cx="100" cy="100" r="80" fill="none" stroke="url(#leafGradient)" strokeWidth="3" />

                {/* Stylized leaf */}
                <path
                    d="M100 40 Q140 70 140 110 Q140 150 100 170 Q60 150 60 110 Q60 70 100 40Z"
                    fill="url(#leafGradient)"
                    stroke="none"
                />

                {/* Leaf veins */}
                <path
                    d="M100 40 Q120 80 120 110 M100 40 Q80 80 80 110 M100 40 L100 170"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>

            <Link href={'/'}>
                <div className="text-2xl font-bold">
                    <span className="text-green-200">Leaf</span>
                    <span className="text-white">lens</span>
                </div>
            </Link>
        </header>
    );
};

export default Header;