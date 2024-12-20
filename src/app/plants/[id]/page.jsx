"use client"
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import PlantUses from '@/components/plants/plantUses';
import PlantCultivation from '@/components/plants/plantCultivation';
import Footer from '@/components/Footer';
import PlantHeader from '@/components/plants/platHeader';

const plants = [
    {
        id: 1,
        name: 'Aloe Vera',
        scientificName: 'Aloe barbadensis miller',
        description: 'Succulent plant known for its healing properties, particularly for skin conditions and burns.',
        image: 'https://images.unsplash.com/photo-1565964450731-27a34da777a1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Succulent',
        uses: ['Skin healing', 'Burns', 'Digestive health'],
        preparations: ['Topical gel', 'Juice', 'Powder'],
        sideEffects: ['May cause allergic reactions in some people', 'Not recommended during pregnancy'],
        climate: ['Tropical', 'Subtropical', 'Indoor'],
        difficulty: 'easy'
    },
    {
        id: 2,
        name: 'Turmeric',
        scientificName: 'Curcuma longa',
        description: 'Golden spice with powerful anti-inflammatory and antioxidant properties.',
        image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        category: 'Root',
        uses: ['Anti-inflammatory', 'Joint health', 'Immune support'],
        preparations: ['Powder', 'Tea', 'Capsules'],
        sideEffects: ['May interact with blood thinners', 'Can stain skin and clothing'],
        climate: ['Tropical', 'Warm'],
        difficulty: 'medium'
    },
    {
        id: 3,
        name: 'Lavender',
        scientificName: 'Lavandula angustifolia',
        description: 'Aromatic herb known for its calming and relaxing properties.',
        image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        category: 'Herb',
        uses: ['Anxiety relief', 'Sleep aid', 'Aromatherapy'],
        preparations: ['Essential oil', 'Tea', 'Dried flowers'],
        sideEffects: ['May cause skin irritation in some people'],
        climate: ['Mediterranean', 'Temperate'],
        difficulty: 'easy'
    }
];

const PlantPage = () => {
    const pathname = useParams()
    const { id } = pathname;
    const plant = plants.find(p => p.id.toString() === id);
    if (!plant) {
        return <div>Plant not found</div>;
    }

    return (
        <>


            <main className="max-full  bg-white text-gray-600 mx-auto px-4 sm:px-6 lg:px-20 py-8">
                <PlantHeader plant={plant} />
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <PlantUses uses={plant.uses} preparations={plant.preparations} />
                        <PlantCultivation plant={plant} />
                    </div>

                    <aside className="space-y-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                            <div className="space-y-4">
                                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                                    Buy Seeds
                                </button>
                                <button className="w-full border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-50">
                                    Ask Expert
                                </button>
                                <button className="w-full border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                                    Save for Later
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Share</h2>
                            <div className="flex gap-4">
                                <button className="p-2 text-gray-600 hover:text-gray-900">
                                    <span className="sr-only">Share on Facebook</span>
                                    📘
                                </button>
                                <button className="p-2 text-gray-600 hover:text-gray-900">
                                    <span className="sr-only">Share on Twitter</span>
                                    📱
                                </button>
                                <button className="p-2 text-gray-600 hover:text-gray-900">
                                    <span className="sr-only">Share via Email</span>
                                    📧
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

        </>
    );
};

export default PlantPage;