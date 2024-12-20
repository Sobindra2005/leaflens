import React from 'react';

const VisualSearch = () => {
    return (
        <main className='h-screen w-full '>
            <div className='fixed top-0 left-0 bg-black w-full h-full '>
                <div className='w-full h-full relative flex items-center justify-center'>
                    <div className='relative  min-h-[15rem] min-w-[15rem] md:min-w-[30rem] flex   items-center justify-center'>
                        <div className='p-8 absolute border-t border-r border-gray-600 top-0 right-0'></div>
                        <div className='p-8 absolute border-t border-l  border-gray-600 top-0 left-0'></div>
                        <div className='p-8 absolute border-b border-r border-gray-600 bottom-0 right-0'></div>
                        <div className='p-8 absolute border-b border-l border-gray-600 bottom-0 left-0'></div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                    <div className=' absolute w-full pb-6 bottom-0 flex items-center justify-around'>
                        <div>
                            left icon
                        </div>
                        <div>
                            middle icon
                        </div>
                        <div>
                            right icon
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default VisualSearch;