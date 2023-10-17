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
      <div className='lg:flex flex-col lg:flex-row lg:items-center p-1 md:p-16 lg:p-0'>
        
        <motion.div 
        variants={fadeIn('down', 0.5 )}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className='flex-1 bg-about hidden md:inline bg-no-repeat w-[640px] h-[640px] mix-blend-lighten rounded-md'>
          
        </motion.div>
        <div className='flex-1'>
          
        <div 
        className='text-[48px] text-center font-tertiary text-gradient pt-2'>
        {inVew ? <CountUp start={0} end={50} duration={5} /> : null}
        </div>

            <motion.div 
            variants={fadeIn('up', 0.5 )}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className=' text-center font-primary text-[48px] leading-none'>
              + Projetos <br/>
              Realizados
            </motion.div>

            <motion.div 
            
              variants={fadeIn('up', 0.5 )}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            className='whitespace-normal pt-8 flex-auto text-start mx-auto font-secondary lg:text-[18px] font-normal text-[16px] p-2 max-w-[855px] lg:w-[400px] xl:w-[500px]'>
              <div className=''>
                  Desde muito cedo sempre gostei bastante de computador
                  e em 2019 decidi entrar pra faculdade e cursar sistemas de
                  informação, mergulhei de cabeça na área da tecnologia
                  e desde então nunca mais parei de aprender.
                  <br/>
                  Na universidade me interessei em projetar telas, construir algo visualmente bonito, que chamasse atenção
                  e ao mesmo tempo funcional, pra tornar a experiência do usuário única.
                  E foi ai que me tornei desenvolvedor Frontend e comecei a oferecer sites
                  para empresas próximas, construí clientes e projetei alguns web sites,
                  institucionais, captação de clientes…
                  <br/>
                  Minha última experiência profissional foi em uma Startup de tecnologia, atuava como arquiteto de software,
                  projetava as telas e desenvolvia a parte de Frontend dos sistemas.
                  Era também, responsavel pelo marketing, como apresentações para potenciais clientes.
              </div>
            </motion.div>
            <div className='text-center mt-8'>
            <a href='https://api.whatsapp.com/send?phone=5516993074838'
              target='_blank'
              rel="noopener noreferrer">
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
