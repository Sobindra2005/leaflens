import React from 'react';

const PlantCard = ({ plant, featured }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] duration-300">
            <div className="relative">
                <img
                    src={plant.image}
                    alt={plant.name}
                    className={`w-full object-cover ${featured ? 'h-64 md:h-72' : 'h-48 md:h-56'}`}
                    loading="lazy"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-green-600 text-white">
                        {plant.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${plant.difficulty === 'easy' ? 'bg-green-500 text-white' :
                        plant.difficulty === 'medium' ? 'bg-yellow-500 text-white' :
                            'bg-red-500 text-white'
                        }`}>
                        {plant.difficulty} to grow
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{plant.name}</h3>
                <p className="text-sm text-gray-500 italic mb-3">{plant.scientificName}</p>
                <p className="text-gray-600 mb-4 line-clamp-2">{plant.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                    {plant.uses.slice(0, 2).map((use, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                            {use}
                        </span>
                    ))}
                </div>

                <a
                    href={`/plants/${plant.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                >
                    Learn more
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default PlantCard;