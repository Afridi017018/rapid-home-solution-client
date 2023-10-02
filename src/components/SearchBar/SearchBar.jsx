import React from 'react';

const SearchBar = () => {
    return (
        <div className='container mx-auto text-center'>
            <div className='flex justify-center items-center'>
                <input className='w-1/2 h-12 border border-gray-400 rounded-l-md px-3 outline-none text-lg shadow-lg' placeholder='Search here ...' type="text" />
                <button className='bg-red-800 text-white px-4 py-1 rounded-r-md h-12 font-semibold text-lg shadow-lg'>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;