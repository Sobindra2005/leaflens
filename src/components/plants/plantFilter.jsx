import React from 'react';

const categories = ['All', 'Herb', 'Root', 'Succulent', 'Tree', 'Vine'];
const difficulties = ['All', 'Easy', 'Medium', 'Hard'];
const climates = ['All', 'Tropical', 'Subtropical', 'Mediterranean', 'Temperate'];


const PlantFilter = () => {
    return (
        <div className="bg-white p-6 text-gray-600 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium p-1 outline-none text-gray-700 mb-2">Category</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                        {categories.map((category,index )=> (
                            <option key={index} value={category.toLowerCase()}>{category}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium p-1 outline-none  text-gray-700 mb-2">Difficulty</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                        {difficulties.map((difficulty,index) => (
                            <option key={index} value={difficulty.toLowerCase()}>{difficulty}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium p-1 outline-none text-gray-700 mb-2">Climate</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                        {climates.map((climate,index )=> (
                            <option key={index} value={climate.toLowerCase()}>{climate}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default PlantFilter;