import React from 'react'
import { BsChatRightText } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { Link,useLocation  } from 'react-router-dom';

function Footer() {
  const location = useLocation()
  return (
    
    <div className='font-serif h-24 fixed bottom-0 left-0 w-full z-10 bg-white'>
    <div className='flex justify-evenly '>
         <Link to="/" className={`flex flex-col items-center justify-center hover:text-blue-600 hover:scale-110 cursor-pointer ${location.pathname === '/' ? 'text-blue-600' : ''}`}>
      <RiHomeSmile2Fill/>
      <p>Home</p>
          </Link>

    <Link to="/messages" className={`flex flex-col items-center justify-center hover:text-blue-600 hover:scale-110 cursor-pointer ${location.pathname === '/messages' ? 'text-blue-600' : ''}`}>
<BsChatRightText/>
<p>Messages</p>
    </Link>

      <Link to='/help' className='flex flex-col items-center justify-center hover:text-blue-600 hover:scale-110 cursor-pointer'>
      <BiHelpCircle/>
      <p>Help</p>
          </Link>

          <Link to='/news' className='flex flex-col items-center justify-center hover:text-blue-600 hover:scale-110 cursor-pointer'>
      <HiOutlineSpeakerphone/>
      <p>News</p>
          </Link>
          </div>
          </div>
  )
}

export default Footer