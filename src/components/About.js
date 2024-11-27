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
                
                  Olá, prazer.
                  Sou um profissional com aproximadamente 4 anos de experiência no setor de tecnologia, com ampla
                  atuação em empresas e diversos projetos.
                  <br/>
                  Tenho habilidades em arquitetura de software, design
                  e prototipagem com Figma, em tecnologias como HTML, CSS, JavaScript, TypeScript, React e Next. 
                  Também possuo conhecimentos em e-commerce e marketing digital.
                  <br/>
                  Atualmente, trabalho como freelancer, oferecendo serviços digitais personalizados para
                  empresas e clientes próprios.

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
