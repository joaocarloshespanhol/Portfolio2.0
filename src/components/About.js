import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';



const About = () => {
  const [ref, inVew] = useInView({
    threshold: 0.5,
  });
  
  return ( 
  <section className='section' id='about' ref={ref}>
    <div className='cointainer mx-auto'>
      <div className='lg:flex flex-col gap-y-10 lg:flex-row lg:items-center'>
        
        <motion.div 
        variants={fadeIn('down', 0.5 )}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className='flex-1 bg-about bg-no-repeat ml-5 lg:items-start lg:w-[340px] h-[640px] mix-blend-lighten rounded-md '>
          
        </motion.div>
        <div className='flex-1'>
          
        <div 
        className='text-[48px] text-center font-tertiary text-gradient pt-1 mb-2'>
        {inVew ? <CountUp start={0} end={20} duration={5} /> : null}
        </div>

            <motion.div 
            variants={fadeIn('up', 0.5 )}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className=' text-center font-primary text-[48px] tracking-[8px] leading-none'>
              + Projetos <br/>
              Realizados
            </motion.div>
          
            
            
            <motion.div 
            
              variants={fadeIn('up', 0.5 )}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            className='whitespace-normal pt-10 flex-auto text-center font-secondary  lg:text-[28px] text-[16px]  '>
              <h2>
                  Atualmente trabalhando para uma<br/>
                  Startup de Recife-PE,
                  com foco em design, mkt e desenvolvimento Front-End.<br/>
                  <br/>
                  Atuo também com criação de sites como Freelance,<br/> com três sites de clientes no ar.<br/> 
                  E cuido do site de um E-commerce de Embalagens,<br/> participando junto com a equipe de Marketing.<br/>
                  
                  
              </h2>
            </motion.div>
            <div className='text-center mt-8'>
            <a href='https://api.whatsapp.com/send?phone=5516993074838'
              target='_blank'
              rel="noopener">
              <motion.button 
              variants={fadeIn('up', 0.5 )}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='btn btn-lg '> Vamos Conversar
              </motion.button></a>
              
            </div>
        </div>  
      </div>
    </div>
  </section>
  );
};

export default About;
