import React from 'react';
import SearchBar from '../ui/searchBar';
import Buttons from '../ui/Buttons';
import Link from 'next/link';

const Hero = () => {
    return (

        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="https://img.freepik.com/premium-photo/natural-medicine-various-herbs-natural-remedies-wooden-background-created-with-generative-ai-technology_132358-11592.jpg"
                    alt="Medicinal herbs background"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>

            <div className="container relative z-10 px-4 py-12 md:py-20">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Discover the Healing Power of Nature
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Explore our comprehensive database of medicinal plants, their uses, and cultivation guides.
                    </p>
                    <div className="mb-12">
                        <SearchBar />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href='/plants'> <Buttons variant="primary" size="lg">Explore Plants</Buttons></Link>
                        <Buttons variant="outline" size="lg">Ask an Expert</Buttons>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;