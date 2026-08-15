import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';



const About = () => {
  return ( 
  <section className='section' id='about'>
    <div className='container mx-auto justify-center items-center'>
      <div className='lg:flex flex-col lg:flex-row lg:items-center lg:gap-8 p-1 md:p-16 lg:p-0 mt-12'>
        
        <motion.div 
        variants={fadeIn('down', 0.5)}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className='flex-1 bg-about hidden md:inline bg-no-repeat w-[640px] h-[640px] mix-blend-lighten rounded-md lg:mr-8'>
          
        </motion.div>
        <div className='flex-1 lg:ml-0'>
            <div className='flex flex-col text-center text-[60px] font-black text-[#42A6E3]'>
              100+
            </div>
            <motion.div 
            variants={fadeIn('up', 0.5)}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className=' text-center font-primary text-[48px] leading-none'>
              Projetos <br/>
              Realizados
            </motion.div>

            <div 
            className='whitespace-normal pt-4 flex-auto text-start mx-auto font-secondary lg:text-[17px] 2xl:text-[20px] font-normal text-[16px] p-2 lg:p-0 max-w-[855px] w-full'>
              <div className='mt-8'>
                
                  Sou desenvolvedor com aproximadamente 4 anos de experiência no setor de tecnologia, 
                  tendo atuado tanto em empresas quanto em diversos projetos.
                  <br/><br/>
                  Tenho experiência prática com arquitetura de software, claude, harness, agents, design de
                  interfaces e prototipagem de Design Systems com Figma, desenvolvimento de apis utilizando
                  tecnologias como nest, express, node, docker, swagger, além de domínio em tecnologias
                  mas voltadas ao frontend como react (hooks, gestão de estado), next.js (SSR), typescript,
                  tailwindcss, recharts, chartjs (lib de gráficos) e versionamentos git (gitflow), github,
                  gitlab e fluxos de CI/CD.

              </div>
            </div>
        </div>  
      </div>
    </div>
  </section>
  );
};

export default About;
