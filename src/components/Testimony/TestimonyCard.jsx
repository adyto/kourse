import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const TestimonyCard = ({ imgUrl, title, name, description, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex flex-row  gap-2 bg-white/10  max-w-2xl p-6 rounded-2xl items-center"
    >
      <img
        src={imgUrl}
        className="rounded-3xl w-full lg:w-64 h-60 object-cover"
      />
      <div className="flex flex-col ">
        <h1 className="text-white text-xl font-bold">{name}</h1>
        <h2 className="text-white/60">{title}</h2>
        <h3 className="text-white/60 mt-4">{description}</h3>
      </div>
    </motion.div>
  );
};

export default TestimonyCard;
