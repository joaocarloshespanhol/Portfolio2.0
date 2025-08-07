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
      <div className='lg:flex flex-col lg:flex-row lg:items-center p-1 md:p-16 lg:p-0 mt-20'>
        
        <motion.div 
        variants={fadeIn('down', 0.5 )}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className='flex-1 bg-about ml-10 hidden md:inline bg-no-repeat w-[640px] h-[640px] mix-blend-lighten rounded-md'>
          
        </motion.div>
        <div className='flex-1'>
          
        <div 
        className='text-[48px] text-center font-tertiary text-gradient pt-2'>
        {inVew ? <CountUp start={10} end={100} duration={5} /> : null}
        </div>

            <motion.div 
            variants={fadeIn('up', 0.5 )}
            className=' text-center font-primary text-[48px] leading-none'>
              + Projetos <br/>
              Realizados
            </motion.div>

            <div 
            className='whitespace-normal pt-8 flex-auto text-start mx-auto font-secondary lg:text-[17px] 2xl:text-[20px] font-normal text-[16px] p-4 max-w-[855px] w-full'>
              <div className=''>
                
                  Sou um desenvolvedor com aproximadamente 4 anos de experiência no setor de tecnologia,
                  tendo atuado tanto em empresas, diversos projetos e como profissional autônomo.
                  Durante esses anos, desenvolvi não apenas habilidades técnicas, mas também um forte relacionamento com clientes,
                  conduzindo todas as etapas do processo: desde a prospecção, entendimento do projeto, alinhamento de requisitos, entregas recorrentes,
                  ajustes e melhorias contínuas, novas funcionalidades, pesquisa de mercado e suporte pós-projeto.
                  Esse contato direto me proporcionou uma base sólida em comunicação, empatia, confiança e visão de produto.
                  <br/><br/>
                  Tenho experiência prática com arquitetura de software, design de interfaces, artes e prototipagem com Figma,
                  além de domínio em tecnologias como HTML, CSS, Tailwindcss, JavaScript, TypeScript, React e Next.js.
                  Também acumulo conhecimento em e-commerce e marketing digital, o que me permite contribuir
                  de forma estratégica em soluções voltadas ao usuário final.
                  <br/><br/>
                  Atualmente, atuo como desenvolvedor frontend no Consórcio Magalu, uma das empresas do Grupo Magalu.
                  O mercado de consórcios está em forte crescimento, impulsionado pelos altos juros do financiamento tradicional,
                  o que tem tornado o setor ainda mais dinâmico e desafiador e, consequentemente, uma excelente oportunidade
                  para evolução contínua e contribuição em projetos de grande escala.

              </div>
            </div>
        </div>  
      </div>
    </div>
  </section>
  );
};

export default About;
