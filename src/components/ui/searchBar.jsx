import React from 'react';

const SearchBar = () => {
    return (
        <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>

            <input
                type="search"
                className="block w-full outline-none p-4 pl-10 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-white focus:shadow-md focus:border-green-600  shadow-sm"
                placeholder="Search for plants, ailments, or uses..."
            />
            <div className='flex absolute right-2.5 items-center justify-center bottom-2.5 '>
                <svg className="w-6 h-6 text-gray-500 mr-2 cursor-pointer " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8h4l1-2h8l1 2h4v12H3V8z" />
                    <circle cx="12" cy="13" r="4" />
                </svg>

                <button
                    type="submit"
                    className="text-white  outline-none bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-200"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;