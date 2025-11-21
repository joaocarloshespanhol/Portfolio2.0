// import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import { useState} from 'react';
// import emailjs from '@emailjs/browser';
// import ModalMessage from './ModalMessage/ModalMessage.js';
// import { FaSmile } from 'react-icons/fa';
import imagemContact from '../assets/imagemContact.png';
import linkedinIcon from '../assets/linkedin.png';
import whatsappIcon from '../assets/whatsapp.png';
import emailIcon from '../assets/email.png';  



const Contact = () => {
  // const [modal, setModal] = useState(false);
  // const [modalMessage, setModalMessage] = useState("");

  // function sendEmail(e) {
  //   e.preventDefault();
  //   if(name === '' || email === '' || message === ''){
  //     setModalMessage("Preencha todos os campos.");
  //     <FaSmile />
  //     setModal(true);
  //     return;
  //   }

  //   const templateParams = {
  //     from_name: name,
  //     email: email,
  //     message: message
  //   }
  //   emailjs.send("service_18kaxl7", "template_1c5jlfb", templateParams, "VdUxJxGTfPfCuiEtu")
  //   .then((response) => {
  //     console.log ("Email Enviado", response.status, response.text)
  //     setName('')
  //     setEmail('')
  //     setMessage('')
  //     setModalMessage("Mensagem enviada com sucesso.");
  //     setModal(true);

  //   }, (err) => {
  //       console.log("Erro: ", err)
  //   })
  // }

  // const [name, setName ] = useState('')
  // const [email, setEmail ] = useState('')
  // const [message, setMessage ] = useState('')

  return (
  <section className='py-16 lg:section xl:mt-[60%] lg:mt-[40%]' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex justify-center items-center'>
          <div>
            <h4 className='text-[20px] lg:text-[30px] h2 text-[#42A6E3] font-medium mb-2 tracking-wide'>Chegou até aqui?</h4>
            <h2 className='text-[50px] lg:text-[90px] leading-none mb-12'>
              Me envie <br/>
              uma mensagem!
            </h2>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 rounded-2xl flex flex-col gap-y-6 pb-12 p-8 items-start relative'>
          <div className='relative w-full'>
            <img 
              src={imagemContact} 
              alt="Contact" 
              className='w-[620px] mx-auto rounded-md' 
            />
            
            <div className='absolute top-[55%] right-[40%] transform -translate-y-1/2'>
              <a 
                href="https://www.linkedin.com/in/joaocarloshespanhol/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-full transition-all duration-300 rounded-lg flex items-center justify-center text-white font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105'>
                <img src={linkedinIcon} alt="LinkedIn" className='w-[320px]' />
              </a>
            </div>

            <div className='absolute top-[65%] right-[40%] transform -translate-y-1/2'>
              <a 
                href="https://api.whatsapp.com/send?phone=5516993074838" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-full transition-all duration-300 rounded-lg flex items-center justify-center text-white font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105'>
                <img src={whatsappIcon} alt="WhatsApp" className='w-[320px]' />
              </a>
            </div>

            <div className='absolute top-[75%] right-[40%] transform -translate-y-1/2'>
              <a 
                href="mailto:joaocarlos.hespanhol@hotmail.com" 
                className='w-full transition-all duration-300 rounded-lg flex items-center justify-center text-white font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105'>
                <img src={emailIcon} alt="Email" className='w-[320px]' />
              </a>
            </div>
          </div>
      </motion.div>

        {/* <motion.form
          onSubmit={sendEmail}
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-12 p-8 items-start'>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all'
          type="text"
          placeholder='Seu Nome'
          onChange={(e) => setName (e.target.value)}
          value={name}
          /> */}
          {/* <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all'
          type="text"
          placeholder='Seu Email'
          onChange={(e) => setEmail (e.target.value)}
          value={email}
          /> */}
          {/* <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all resize-none mb-12'
          placeholder='Deixa sua mensagem...'
          onChange={(e) => setMessage (e.target.value)}
          value={message}
          ></textarea> */}
          {/* <button className='btn btn-lg'>Enviar Mensagem</button> */}
          {/* </motion.form> */}
          {/* <ModalMessage
            open={modal}
            message={modalMessage}
            onClick={() => {
          setModal(false);
        }}
      /> */}

      </div>
    </div>
  </section>
  );
};

export default Contact;
