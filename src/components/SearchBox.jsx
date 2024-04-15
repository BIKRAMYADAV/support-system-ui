import React from 'react'
import { CiSearch } from "react-icons/ci";

function SearchBox() {
  return (
    <div>
        
        <div className='flex items-center justify-center min-h-screen'>
            <div className="flex items-center max-w-md mx-auto bg-white rounded-lg" x-data="{ search: '' }">
                <div className="w-full">
                    <input type="search" className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none" placeholder="search for help" x-model="search" />
                </div>
                <div>
                    <button type="submit" className='flex items-center justify-center w-12 h-12 hover:text-blue-600 rounded-r-lg '>
                    <CiSearch/>
                    </button>
                </div>
            </div>
</div>
    </div>
  )
}

export default SearchBox