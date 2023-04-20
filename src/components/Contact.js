import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ModalMessage from './ModalMessage/ModalMessage.js';
import { FaSmile } from 'react-icons/fa';



const Contact = () => {
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if(name === '' || email === '' || message === ''){
      setModalMessage("Preencha todos os campos.");
      <FaSmile />
      setModal(true);
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }
    emailjs.send("service_18kaxl7", "template_1c5jlfb", templateParams, "VdUxJxGTfPfCuiEtu")
    .then((response) => {
      console.log ("Email Enviado", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
      setModalMessage("Mensagem enviada com sucesso.");
      setModal(true);

    }, (err) => {
        console.log("Erro: ", err)
    })
  }

  const [name, setName ] = useState('')
  const [email, setEmail ] = useState('')
  const [message, setMessage ] = useState('')

  return (
  <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
        variants={fadeIn('right', 0.3 )}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-[20px] lg:text-[30px] h2 text-[#42A6E3] font-medium mb-2 tracking-wide'>Chegou até aqui?</h4>
            <h2 className='text-[50px] lg:text-[90px] leading-none mb-12'>
              Me envie <br/>
              uma mensagem!
            </h2>
        </div>
      </motion.div>

        <motion.form
          onSubmit={sendEmail}
          variants={fadeIn('left', 0.3 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-12 p-8 items-start'>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all'
          type="text"
          placeholder='Seu Nome'
          onChange={(e) => setName (e.target.value)}
          value={name}
          />
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all'
          type="text"
          placeholder='Seu Email'
          onChange={(e) => setEmail (e.target.value)}
          value={email}
          />
          <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all resize-none mb-12'
          placeholder='Deixa sua mensagem...'
          onChange={(e) => setMessage (e.target.value)}
          value={message}
          ></textarea>
          <button className='btn btn-lg'>Enviar Mensagem</button>
          </motion.form>
          <ModalMessage
            open={modal}
            message={modalMessage}
            onClick={() => {
          setModal(false);
        }}
      />

      </div>
    </div>
  </section>
  );
};

export default Contact;
