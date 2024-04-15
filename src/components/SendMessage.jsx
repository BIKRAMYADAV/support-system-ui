import React from 'react'
import { IoSend } from "react-icons/io5";
import { Link } from 'react-router-dom';

function SendMessage() {
  return (
<div className='flex items-center justify-center p-4'>
    <section className="w-1/2 sm:px-6 lg:px-4 flex justify-center items-center">
        <article className='w-full'>
            <section className=" gap-x-1 gap-y-1">
                <article className="hover:text-blue-500 relative w-full h-20 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                    >
                    <div className="absolute inset-0  bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                        <h3 className="text-center">
                            <Link className="flex items-center justify-around text-center" to="/messages">
                          <div>
               <h3 className='font-bold'>Send us a message</h3>
               <h3>We typically reply in a few minutes</h3>
                          </div>
                          <div>
                            <IoSend/>
                          </div>
                            </Link>
                        </h3>
                    </div>
                </article>
            </section>
        </article>
    </section>
</div>


  )
}

export default SendMessage

