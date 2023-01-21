import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { TitleText, TypingText } from '../CustomTexts';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

const ProductThumbnail = () => {
  const [dataThumbnail, setDataThumbnail] = useState([]);

  useEffect(() => {
    const query = '*[_type == "course"]';

    client.fetch(query).then((data) => {
      setDataThumbnail(data.filter((res) => res.tags.includes('thumbnail')));
    });
  }, []);

  console.log(dataThumbnail);

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
        <TypingText title="Top Course" textStyles="text-center" />
        <TitleText
          title={'Tingkatkan Skill Keahlian'}
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className={'flex flex-col lg:flex-row gap-8 justify-center w-full'}
        >
          {dataThumbnail.map((item) => (
            <Link
              className="flex flex-col w-full border-none rounded-xl p-8 bg-white/10 gap-6"
              key={item.title}
              to={`/course/${item.slug.current}`}
            >
              <img
                src={urlFor(item.imgUrl)}
                className="w-full h-full rounded-xl"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl text-white font-bold">{item.title}</h1>
                <NumericFormat
                  displayType="text"
                  value={item.price}
                  thousandsGroupStyle="thousand"
                  thousandSeparator=","
                  className="text-white/60"
                />
              </div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductThumbnail;
