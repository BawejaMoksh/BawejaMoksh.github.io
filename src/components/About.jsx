import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motions';
import { sectionWrapper } from '../hoc';
import { StarsCanvas } from './canvas';
const ServiceCard = ({ index, title, icon }) => {
  return (
    <div><Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={
          fadeIn(
            'right', 'spring', 0.5 * index, 0.75
          )


        }
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className='bg-black black-gradient rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>


          <img src={icon} alt={title}
            className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt></div>
  )

}
const About = () => {
  return (

    <div >
      <motion.div variants={textVariant()}>
        <p className='text-white text-[30px]'>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[16px] max-w-3xl leading-[30px]'>
        I am a skilled developer with knowledge in JavaScript,Python,C#,C++ and frameworks like React.js and Three.js.
        I am eager to learn new things in the field of AI/ML and game industry.
        Let's work together to bring our ideas into life and achieve our goals together.

      </motion.p >
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />

        ))}

      </div>

    </div>


  )
}

export default sectionWrapper(About, "about")