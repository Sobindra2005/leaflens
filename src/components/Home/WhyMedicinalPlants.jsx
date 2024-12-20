import React from 'react';

const benefits = [
    {
        title: 'Natural Healing',
        description: 'Harness the power of nature with traditional remedies that have been used for centuries.',
        icon: '🌿'
    },
    {
        title: 'Sustainable Health',
        description: 'Choose eco-friendly alternatives that promote both personal and environmental well-being.',
        icon: '🌍'
    },
    {
        title: 'Scientific Backing',
        description: 'Access research-based information about the effectiveness of medicinal plants.',
        icon: '🔬'
    },
    {
        title: 'Grow Your Own',
        description: 'Learn how to cultivate your own medicinal garden for a sustainable source of natural remedies.',
        icon: '🌱'
    }
];


const WhyMedicinalPlants = () => {
    return (
        <section className="bg-green-50 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Why Medicinal Plants?</h2>
                    <p className="mt-4 text-xl text-gray-600">Discover the benefits of natural healing</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit,index) => (
                        <div key={index} className="bg-white rounded-lg p-6 text-center">
                            <div className="text-4xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyMedicinalPlants;