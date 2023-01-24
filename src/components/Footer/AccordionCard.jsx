import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/accordion';

const AccordionCard = () => {
  const dataFooter = [
    {
      title: 'Apakah pemula bisa ikut ?',
      desc: 'Bisa',
    },
    {
      title: 'Berapa Harga Coursenya ?',
      desc: 'Gratis',
    },
    {
      title: 'Apakah mendapatkan sertificate?',
      desc: 'Dapat',
    },
  ];
  return (
    <motion.div
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className="max-w-5xl mx-auto "
    >
      <Accordion allowToggle className="divide-y">
        {dataFooter.map((item) => (
          <AccordionItem key={item}>
            <AccordionButton className="py-4 px-2 w-full flex flex-row justify-between items-center text-white text-xl">
              <p>{item.title}</p>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel className="text-white px-2 py-2">
              {item.desc}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default AccordionCard;
