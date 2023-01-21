import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { BsPinMapFill } from 'react-icons/bs';
import { GiGrowth } from 'react-icons/gi';
import { SiFastly } from 'react-icons/si';
import { RiTeamFill } from 'react-icons/ri';

const BenefitCard = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.25,
      }}
    >
      <div className="flex flex-col w-full gap-6 lg:hidden">
        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
          <div className="flex flex-col text-white">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate rerum quas quos labore accusantium sequi laborum.
              Placeat neque est dignissimos at mollitia inventore rerum aperiam
              commodi dicta! Vel, velit culpa?
            </h1>
            <h1>lorem321</h1>
          </div>
        </motion.div>
        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>123</motion.div>
        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>321</motion.div>
        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>123</motion.div>
      </div>
      <div className="flex flex-row gap-4 max-lg:hidden justify-center mb-4">
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex flex-col gap-6 max-w-lg border-none px-4 py-8 bg-white/10 items-center rounded-xl w-full text-white text-center"
        >
          <BsPinMapFill className="w-14 h-14 text-color-palette-2" />
          <p className="text-3xl mt-2 mb-8">Peta Roadmap</p>
          <p className="text-white/60">
            Menentukan Roadmap akan lebih menguntungkan sebelum memulai
            pembelajaran, dan memberikan jalur yang terbaik dari awal hinggal
            selesai pembelajaran.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex flex-col gap-6 max-w-lg border-none px-4 py-8 bg-white/10 items-center rounded-xl w-full text-white text-center"
        >
          <GiGrowth className="w-14 h-14 text-color-palette-2" />
          <p className="text-3xl mt-2 mb-8">Kurikulum Pembelajaran</p>
          <p className="text-white/60">
            Proses pembelajaran akan lebih diuntungkan dengan kurikulum yang
            standart internasional dan industrial yang terkini dengan pendekatan
            yang serupa, dan akan menguntunkan untuk diterapkan dikemudian hari.
          </p>
        </motion.div>
      </div>
      <div className="flex flex-row gap-4 max-lg:hidden justify-center">
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex flex-col gap-6 max-w-lg border-none px-4 py-8 bg-white/10 items-center rounded-xl w-full text-white text-center"
        >
          <SiFastly className="w-16 h-16 text-color-palette-2" />
          <p className="text-3xl mt-2 mb-8">Soft Skill </p>
          <p className="text-white/60">
            Ilmu soft skill sangat menguntungkan di kemudian hari yang
            memudahkan seorang dapat melakukan pengerjaan dengan mudah secara
            individual ataupun team, dapat diterapkan dimanapun saat berkarir.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex flex-col gap-6 max-w-lg border-none px-4 py-8 bg-white/10 items-center rounded-xl w-full text-white text-center"
        >
          <RiTeamFill className="w-16 h-16 text-color-palette-2" />
          <p className="text-3xl mt-2 mb-8">Hiring Partners</p>
          <p className="text-white/60">
            Kami telah bekerja sama dengan 550+ perusahaan dengan berbagai macam
            di bidangnya dengan pembelajaran yang relevant di industrial.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
