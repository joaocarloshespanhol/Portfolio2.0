import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return ( 
    <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-8'>
        <motion.div
          variants={fadeIn('right', 0.3 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div> 
            <h2 className='h2 leading-tight lg:text-[40px] text-[#42A6E3]'>
              Meus últimos <br />
              Projetos
            </h2>
            <p className='h2 text-[10px] lg:text-[15px] max-w-lg mb-16'>
              Explore alguns dos meus
              projetos.</p>
            
            <button className='btn btn-sm'> Visualizar todos projetos</button>
            </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-6'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'> </div>

              <a href='https://vocenocontrole.vercel.app/'
              target='_blank'
              rel="noopener noreferrer">
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient text-[20px] lg:text-[30px] text-[#42A6E3]'> Sistema Financeiro.</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50'>
                <span className='text-gradient text-1xl lg:text-xl text-white'> vocenocontrole.vercel.app </span>
              </div></a>
        </div>
      </motion.div>

        <motion.div
          variants={fadeIn('left', 0.2 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'> </div>

              <a href='https://trafegoparatatuadores.com.br/'
              target='_blank'
              rel="noopener noreferrer">
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient text-[20px] lg:text-[30px] text-[#42A6E3]'> Site para Gestor de Tráfego.</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50'>
                <span className='text-gradient text-1xl lg:text-xl text-white'> www.trafegoparatatuadores.com.br </span>
              </div></a>
          </div>
          <div className='flex-1 mt-7'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'> </div>

              <a href='https://advisabellatonin.vercel.app/'
              target='_blank'
              rel="noopener noreferrer">
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient text-[20px] lg:text-[30px] text-[#42A6E3]'> Site para advogada. </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50'>
                <span className='text-gradient text-1xl lg:text-xl text-white'> www.advogadaisabellatonin.com.br </span>
              </div></a>
          </div>
        </div>
      </motion.div>

    </div>
  </div>  
  </section>
    );
};

export default Work;
