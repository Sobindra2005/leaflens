import React from 'react';

const PlantCultivation = ({plant}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cultivation Guide</h2>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Growing Conditions</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-gray-700 mb-2">Climate Zones</h4>
                            <div className="flex flex-wrap gap-2">
                                {plant.climate.map((zone ,index) => (
                                    <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                        {zone}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-700 mb-2">Difficulty Level</h4>
                            <span className={`inline-block px-3 py-1 rounded-full text-sm ${plant.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                                    plant.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                }`}>
                                {plant.difficulty} to grow
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Precautions</h3>
                    <ul className="space-y-3">
                        {plant.sideEffects.map((effect,index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">⚠</span>
                                <span className="text-gray-700">{effect}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PlantCultivation;