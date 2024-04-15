import React from 'react'
import { Tooltip } from './Tooltip'
import RecentMessage from './RecentMessage'

function Header() {
  return (
    <div className='bg-gradient-to-b from-indigo-500'>
        <div>
            <div className='font-Roboto text-5xl md:text-7xl h-96 flex flex-col justify-center items-center '>
             
              <Tooltip/>

                <h1 className='text-slate-700 '>Hello there.</h1>
                <h1 className='text-white '>How can we help?</h1>

            </div>
        </div>

          <RecentMessage/>
    </div>
  )
}

export default Header