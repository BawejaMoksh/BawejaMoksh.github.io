import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motions';

const sectionWrapper = (Component, idName) =>
    function hoc() {
        return (
            <motion.section variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{
                    once: true,
                    amount: 0.35
                }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
    }


export default sectionWrapper