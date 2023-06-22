import { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome } from '/node_modules/react-icons/ai';
import { AiOutlineShopping } from '/node_modules/react-icons/ai';
import { MdOutlineOndemandVideo } from '/node_modules/react-icons/md';
import { BsPersonVideo } from '/node_modules/react-icons/bs';

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] md:hidden'
      />
      {nav ? (
        <div className='fixed w-full h-sceen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a
            onClick={handleNav}
            href='/home'
            className='w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a
            onClick={handleNav}
            href='/about'
            className='w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <BsPersonVideo size={20} />
            <span className='pl-4'>About</span>
          </a>
          <a
            onClick={handleNav}
            href='/contents'
            className='w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <MdOutlineOndemandVideo size={20} />
            <span className='pl-4'>Contents</span>
          </a>
          <a
            href='/shopping'
            className='w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineShopping size={20} />
            <span className='pl-4'>Shopping</span>
          </a>
        </div>
      ) : (
        ''
      )}
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a
            href='/home'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineHome size={25} />
          </a>
          <a
            href='/about'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <BsPersonVideo size={25} />
          </a>
          <a
            href='/contents'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <MdOutlineOndemandVideo size={25} />
          </a>
          <a
            href='/shopping'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineShopping size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
