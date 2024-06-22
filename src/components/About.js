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
        {inVew ? <CountUp start={10} end={100} duration={5} /> : null}
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
                  Desde muito novo sempre gostei de computador e criar,
                  e em 2019 decidi entrar pra faculdade e cursar sistemas de
                  informação, mergulhei de cabeça na área da tecnologia
                  e desde então nunca mais parei de aprender.
                  <br/>
                  Na universidade me interessei na parte visual das coisas, ter criatividade
                  pra tornar produto/sistema algo que funcione e alcançe o objetivo esperado.
                  E foi ai que me tornei desenvolvedor Frontend e comecei a oferecer sites
                  para empresas próximas, construí clientes e projetei alguns web sites,
                  institucionais, captação de clientes, páginas de lançamento, sistemas…
                  <br/>
                  Possuo experiência profissional de 5 anos trabalhando para Startups de tecnologia, como arquiteto de software,
                  Design responsivo, Design no figma, react, javascript, typescript, e-ecomerce, marketing digital entre outros. 
                  Hoje em dia trabalho como Freelancer, para empresas e clientes própios, sempre 
                  oferecendo serviços digitais de qualidade e com objetivo.
                  <br/>

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
