import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { sectionWrapper } from '../hoc';
import { slideIn } from '../utils/motions';
import { ZeroSlopeEnding } from 'three';
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: " ",
    email: " ",
    message: " ",

  })
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_q9uj1an', 'template_eh03tml',
      {
        from_name: form.name,
        to_name: 'Moksh',
        from_email: form.email,
        to_email: 'mbaweja_be21@thapar.edu',
        message: form.message,
      },
      '9_Ge_jMJCTwdYGNx9'
    )
      .then(() => {
        setLoading(false);
        alert('Thank You for your time I will get back to you as soon as possible');
        setForm({
          name: '',
          email: '',
          message: '',
        }), (error) => {
          setLoading(false)
          console.log(error);
          alert('Something went wrong')
        }

      }
      )
  };
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.25, 1)}
        className='flex-[0.75] bg-[#9a9a9a] black-gradient p-8 rounded-2xl'>
        <div className={styles.sectionSubText}>
          Get in Touch</div>
        <h3 className={styles.sectionHeadText}>
          Contact
        </h3>
        <form ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name='name' value={form.text}
              onChange={handleChange}

              className='bg-[#9a9a9a] py-4 px-6
              placeholder:text-secondary text-white rounded-lg outlined-none
              border-none font-medium'
              placeholder='what is your name' />

          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='email' name='email' value={form.email}
              onChange={handleChange}

              className='bg-[#9a9a9a] py-4 px-6
              placeholder:text-secondary text-white rounded-lg outlined-none
              border-none font-medium'
              placeholder='What is your email' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7' name='message' value={form.textarea}
              onChange={handleChange}

              className='bg-[#9a9a9a] py-4 px-6
              placeholder:text-secondary text-white rounded-lg outlined-none
              border-none font-medium'
              placeholder='what do you want to tell us' />
          </label>
          <button type='submit'
            className='bg-[#9a9a9a] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-black rounded'>
            {loading ? 'sending..' : 'send'}

          </button>

        </form>



      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.25, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />

      </motion.div>

    </div>


  )
}

export default sectionWrapper(Contact, "contact");
//template_eh03tml
//service_q9uj1an
//9_Ge_jMJCTwdYGNx9