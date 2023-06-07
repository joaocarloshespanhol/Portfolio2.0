import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name:'UX/UI Design',
    description:
    'O profissional de UX/UI atua para beneficiar e otimizar a jornada do cliente. De um lado está o UI Designer, que busca interfaces acessíveis e elementos de interação do público. Por outro lado, o UX acompanha toda a jornada do usuário e como ele usufrui de todo o produto.',
  },
  {
    name:'Desenvolvedor',
    description:
    'O desenvolvedor front-end é o responsável por colocar em prática, através de códigos, o design de um site, interface ou sistema. Enquanto o design projeta o visual, o desenvolvedor front-end implementa esse design através de códigos, como HTML, CSS, JavaScript, Tailwindcss etc.',    
  },
  {
    name:'Marketing Digital',
    description:
    'Hoje é impossível pensar em estratégias de marketing sem que o pessoal de TI não seja acionado de alguma maneira para contribuir. Quando se fala em análise de dados e busca de ferramentas para elevar a performance da marca, atrair e se relacionar com clientes, potencializar vendas e aumentar a lucratividade.',
  },
];
const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row pt-12'>
          <motion.div
            variants={fadeIn('right', 0.3 )}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-service bg-no-repeat lg:bg-right mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2  text-[#42A6E3] mb-6 lg:text-[] text-[22]'> O que eu faço? </h2>
            <h3 className='h3 lg:text-[40] text-[20] max-w-[455px] mb-16'>
                Sou especialista em entender a persona do cliente,
                ajudando-o com soluções simples
                e elegantes, para que ele consiga alcançar 
                todos os objetivos. 
                Em prototipagem utilizo o Figma e no Desenvolvimento
                React e Tailwindcss.

            </h3>
            <a href='https://api.whatsapp.com/send?phone=5516993074838'
            target='_blank'
            rel="noopener noreferrer">
            <button className='btn btn-sm'>Entre em Contato</button>
            </a>
            </motion.div>
          <div className='flex'>
              <div>
                {services.map((service, index) => {
                  const {name, description} = service;
                  return (
                    <motion.div
                    variants={fadeIn('left', 0.5 )}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.5 }}
                      className='border-b border-white/20 h-[208px] mb-[30px] flex' key={index}>
                      <div className='max-w-[480px]'>
                        <h4 className='text-[#42A6E3] text-[30px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                        <p className='lg:text-[18px] text-[16px] font-secondary leading-tight'>{description}</p>
                      </div>
                      <div className='flex flex-col flex-1 items-end'>
                        <a href='https://www.alura.com.br/artigos/ux-design-em-t-front-end-a-ver-com-ux/'
                        target='_blank'
                        rel="noopener noreferrer">
                        <BsArrowUpRight />
                          </a>    
                      </div>
                    </motion.div>
                  );  
                })}
              </div>
          </div>   
        </div>
      </div>
    </section>
  );
};

export default Services;
