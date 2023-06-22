import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => (
        setNav(!nav)
    )
  return (
    <div className='w-full h-[90px] bg-neutral-950 border-b-2 border-red-900'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
            <h1 className='text-red-900 font-bold text-xm cursor-pointer hover:scale-110 ease-in duration-200'>ENHA</h1>
        </div>
        <div className='hidden md:flex'>
            <ul className='flex text-white items-center'>
                <li className='cursor-pointer hover:scale-110 ease-in duration-200'><a href='/home'>Home</a></li>
                <li className='cursor-pointer hover:scale-110 ease-in duration-200'><a href='/about'>About</a></li>
                <li className='cursor-pointer hover:scale-110 ease-in duration-200'><a href='/contents'>Contents</a></li>
                <li className='cursor-pointer hover:scale-110 ease-in duration-200'><a href='/contact'>Contact</a></li>
                <button className='ml-4'>Sign Up</button>
            </ul>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
        </div>
        <div className= {nav ? 'w-full bg-black text-white absolute top-[90px] left-0 justify-center text-center' : 'absolute left-[-100%]'} >

        <ul>
                <li className='cursor-pointer hover:scale-110 ease-in duration-200'><a href='/'>Home</a></li>
                <li className='cursor-pointer hover:scale-110 ease-in duration-200'><a href='/about'>About</a></li>
                <li className='cursor-pointer hover:scale-110 ease-in duration-200'><a href='/contents'>Contents</a></li>
                <li className='cursor-pointer hover:scale-110 ease-in duration-200'><a href='/contact'>Contact</a></li>
                <button className='m-8'>Sign Up</button>
            </ul>
        </div>
        
        </div>
    </div>
  )
}

export default Navbar