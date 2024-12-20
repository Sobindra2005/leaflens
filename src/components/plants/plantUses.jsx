import React from 'react';

const PlantUses = ({ uses, preparations }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Medicinal Uses</h2>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Uses</h3>
                    <ul className="space-y-3">
                        {uses.map((use,index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span className="text-green-600">•</span>
                                <span>{use}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Preparation Methods</h3>
                    <ul className="space-y-3">
                        {preparations.map((prep,index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span className="text-purple-600">•</span>
                                <span>{prep}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PlantUses;