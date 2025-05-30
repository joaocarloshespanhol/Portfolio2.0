import React from 'react';
import {BiBriefcase, BiHomeAlt, BiMessage, BiUser} from 'react-icons/bi';
import {BsClipboardData} from 'react-icons/bs';
import { Link } from 'react-scroll';


const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-40'>
      <div className='container mx-auto'>

        <div className='w-[full] bg-black/25 h-[76px] backdrop-blur-2xl
        rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text text-white/50'>
          
          <Link
            to='banner'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt />
          </Link>

          <Link
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser />
          </Link>

          <Link
            to='services'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiBriefcase />
          </Link>

          <Link
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsClipboardData />
          </Link>
          
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiMessage />
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
