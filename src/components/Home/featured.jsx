import React from 'react';
import PlantCard from '../plants/plantCards';

const featuredPlants = [
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
]

const Featured = () => {
    return (
        <section className="bg-white flex items-center justify-center py-12 md:py-20">
            <div className="container">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Medicinal Plants</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {featuredPlants.map((plant, index) => (
                        <div key={index}>
                        <PlantCard plant={plant} featured={true} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;