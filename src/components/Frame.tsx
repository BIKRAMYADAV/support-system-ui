import React from 'react'
import SearchBox from './SearchBox';

function Frame() {
  return (
    <div className='flex items-center justify-center p-4'>
    <section className="max-w-7xl sm:px-6 lg:px-4 flex justify-center items-center">
        <article>
            <section className=" gap-x-1 gap-y-1">
                <article className="relative w-full h-20 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                    >
                    <div className="absolute inset-0  bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                        <h3 className="text-center">
                            <div className="flex items-center justify-around text-center" >
                         <SearchBox/>
                            </div>
                        </h3>
                    </div>
                </article>
            </section>
        </article>
    </section>
</div>
  )
}

export default Frame