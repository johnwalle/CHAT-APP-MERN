import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex justify-center">
            <input
                type="text"
                className="flex-grow md:w-64 px-4 py-2 hadow bg-gray-700 text-white rounded focus:outline-none"
                placeholder="Search"
            />
        </div>
    );
};

export default SearchBar;