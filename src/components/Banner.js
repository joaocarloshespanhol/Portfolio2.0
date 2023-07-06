import React from 'react';
import Image from '../assets/eu.png';
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import  {motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return ( 
  <section className='section' id='banner'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
        <div className='lg:mb-60 flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
              variants={fadeIn('up', 0.3 )}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='pl-1.5 text-[30px] lg:text-[] font-secondary font-ligt pt-24'>
            Prazer, me chamo João.
          </motion.h1>
        
        <motion.div 
              variants={fadeIn('up', 0.3 )}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[40px] lg:text-[60px] xl:text-[70px] font-secondary font-semibold uppercase leading-[1]'>
          
          <span className='mr-2'>E sou</span>
          <TypeAnimation  sequence={[
            'Dev Front',
            2000,
            'Designer',
            2000,
            'Marketing',
            2000,

          ]}
          speed={50}
          className='text-[#42A6E3]'
          wrapper='span'
          repeat={Infinity}
          />
        </motion.div>
        
        <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
          <motion.div 
            variants={fadeIn('up', 0.5 )}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className= 'text-[18px] lg:text-[28px] text-gradient btn-link'>
            <h1>
            SEJA BEM VINDO
              </h1>
          </motion.div>
        </div>

          <motion.div 
          variants={fadeIn('up', 0.5 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex text-[35px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href='https://github.com/joaocarloshespanhol'
          target='_blank'
          rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/joaocarloshespanhol/'
          target='_blank'
          rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href='https://www.instagram.com/jc.sites/'
          target='_blank'
          rel="noopener noreferrer">
            <FaInstagram />
          </a>
          </motion.div>

        </div>
        <motion.div
          variants={fadeIn('down', 0.5 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='pb-40'>

          <div className='hidden md:inline'>
            <img className='rounded-md md:mx-auto'src={Image} alt="" />
          </div>
          
        </motion.div>
        </div>
    </div>
  </section>
  );
};

export default Banner;
