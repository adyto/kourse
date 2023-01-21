import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { TitleText, TypingText } from '../CustomTexts';
import TestimonyCard from './TestimonyCard';

const Testimony = () => {
  const testimonyCard = [
    {
      imgUrl: 'https://api.dicebear.com/5.x/micah/svg?seed=4',
      name: 'Sean Frost',
      title: 'Software Enginner',
      description:
        'Mencoba tantangan baru dengan switch carrer karena saya tidak bekecimpungan di dunia IT sebelumnnya, dengan mengenal Kourse materi yang diberikan sangat up-to-date dan menjadikan saya Software Enginner di suatu perusahaan.',
    },
    {
      imgUrl: 'https://api.dicebear.com/5.x/micah/svg?seed=12',
      name: 'Benjamin Dean',
      title: 'Front-End Developer',
      description:
        'Dengan membelejari ilmu Teknologi yang sedang pesat saat ini membuat diri saya tertantang untuk mencoba hal baru yang sebelumnya saya ketahui, dengan hadirnya platform pembelajaran ini menjadikan saya paham tentang bagian dari Front-End Developer',
    },
    {
      imgUrl: 'https://api.dicebear.com/5.x/micah/svg?seed=16',
      name: 'Vania Velixia',
      title: 'Full-Stack Developer',
      description:
        'Banyak ilmu yang saya pelajarin di platform Kourse ini yang sebelumnya saya ketahui, dengan mengetahui beberapa role penting pada bagian Full-Stack dan platform ini memberikan dampak baik untuk karrir saya, terimakasih Kourse sukses selalu.',
    },
    {
      imgUrl: 'https://api.dicebear.com/5.x/micah/svg?seed=32',
      name: 'Dovi Vomberton',
      title: 'Mobile Developer',
      description:
        'Banyak ilmu yang saya pelajarin di platform Kourse ini yang sebelumnya saya ketahui, dengan mengetahui beberapa role penting pada bagian Full-Stack dan platform ini memberikan dampak baik untuk karrir saya, terimakasih Kourse sukses selalu.',
    },
  ];
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
        className={'w-full  flex flex-col  '}
      >
        <TypingText title="Testimony" textStyles="text-center" />
        <TitleText
          title={'Join With Us and Define The Future Now!'}
          textStyles="text-center"
        />
        <div className="mt-12 flex flex-wrap gap-7 justify-center">
          {testimonyCard.map((item, index) => (
            <TestimonyCard key={index} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimony;
