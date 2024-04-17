import React from 'react'
import Logo from '../assets/logo.webp'
function Navbar() {
  return (
    <nav className='flex flex-row px-24 py-6 justify-between items-center  overflow-hidden fixed top-0 w-full left-0 bg-white'>
        <div>
          <img src={Logo} alt="" srcset="" className='h-12 rounded-md' />
        </div>
        <div className='flex flex-row justify-between gap-4 font-medium'>
          <l1>Emotions</l1>
          <l1>Manifesto</l1>
          <l1>Self-awareness test</l1>
          <l1>Work With Us</l1>
        </div>
        <div>
          <button className='bg-black rounded-3xl text-white px-5 py-3 font-medium'>Download app</button>
        </div>
    </nav>
  )
}

export default Navbar;
