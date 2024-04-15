import React from 'react'
import { Link } from 'react-scroll'
import { BiLogoReact } from "react-icons/bi";
import { Tooltip } from './Tooltip';
function Navbar() {
  return (
    <div>
       <nav className='flex h-16 items-center sticky bg-indigo-500'> 
        <div className='w-1/2 px-1'>
       <img src="./logo-1.jpeg" alt="" width={50} className='border-black border-1 rounded-md '/>
        </div>
        <div>
     
        </div>
       </nav>
    </div>
  )
}

export default Navbar