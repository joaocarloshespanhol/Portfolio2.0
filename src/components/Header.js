import React from 'react';
import Logo from '../assets/newlogo.svg';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='banner'>
          <img src={Logo} alt='' />
        </a>
        <a href='https://api.whatsapp.com/send?phone=5516993074838'
        target='_blank'
        rel="noopener">
        <button className='md-2 btn btn-sm font-primary'>Contate-me</button>
      </a></div>
    </div>
  </header>
};

export default Header;
