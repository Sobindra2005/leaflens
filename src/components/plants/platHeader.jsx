import React from 'react';

const PlantHeader = ({plant}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="relative h-96">
                <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-green-600 rounded-full text-sm">{plant.category}</span>
                        <span className={`px-2 py-1 rounded-full text-sm ${plant.difficulty === 'easy' ? 'bg-green-500' :
                                plant.difficulty === 'medium' ? 'bg-yellow-500' :
                                    'bg-red-500'
                            }`}>
                            {plant.difficulty} to grow
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold mb-2">{plant.name}</h1>
                    <p className="text-lg italic text-gray-200">{plant.scientificName}</p>
                </div>
            </div>
        </div>
    );
};

export default PlantHeader;