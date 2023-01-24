import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';
import { TitleText, TypingText } from '../CustomTexts';
import AccordionCard from './AccordionCard';

const Footer = () => {
  return (
    <section className="py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={'show'}
        viewport={{
          once: false,
          amount: 0.25,
        }}
        className="w-full flex flex-col"
      >
        <TypingText title="All The Best" textStyles={'text-center'} />
        <TitleText
          title={'Frequently Asked Questions '}
          textStyles="text-center"
        />
        <div className="my-20">
          <AccordionCard />
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
