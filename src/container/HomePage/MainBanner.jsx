import React, { useState } from 'react';
import CardBanner from './CardBanner';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, planetVariants } from '../../utils/motion';
import { TitleText, TypingText } from '../../components/CustomTexts';

const MainBanner = () => {
  const [active, setActive] = useState('fullstack');

  const descBanner = [
    {
      id: 'fullstack',
      title: 'Full-Stack Developer',
      imgUrl: '/banner-1.jpg',
    },
    {
      id: 'frontend',
      title: 'Front-End Developer',
      imgUrl: '/banner-2.jpg',
    },
    {
      id: 'backend',
      title: 'Back-End Developer',
      imgUrl: '/banner-3.jpg',
    },
  ];

  return (
    <section className="py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full flex flex-col-reverse lg:flex-row items-center gap-2 mx-auto"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className={' flex justify-center flex-col'}
        >
          <TitleText title={'Elevate Your Career to the Next Level'} />
          <h2 className="max-w-lg text-white/60 mb-12">
            Get expert-led instruction from experienced professionals in
            Industry and gain valuable skills and knowledge that can be applied
            to your career or personal life.
          </h2>
          <div className="flex flex-row gap-5">
            <button className="bg-color-palette-2 text-white py-3 px-4 rounded-full font-semibold">
              Find a Course
            </button>
            <button className="text-color-palette-2 font-semibold underline-offset-4 underline">
              Learn More
            </button>
          </div>
        </motion.div>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] w-full gap-5">
          {descBanner.map((value, index) => (
            <CardBanner
              key={value.id}
              {...value}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MainBanner;
