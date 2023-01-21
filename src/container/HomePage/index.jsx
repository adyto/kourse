import React from 'react';
import Navbar from '../../components/Navbar';
import { MainBanner } from '../index';
import {
  BenefitCard,
  MarqueeSkills,
  Testimony,
  ProductThumbnail,
} from '../../components';

const HomePage = () => {
  return (
    <div className="bg-color-palette-1 font-Poppins">
      <div className="container mx-auto py-14">
        <Navbar />
        <MainBanner />
        <BenefitCard />
      </div>
      <MarqueeSkills />
      <div className="container mx-auto">
        <ProductThumbnail />
        <Testimony />
        <div className="w-full h-10  text-white text-center font-semibold text-2xl">
          Footer
        </div>
      </div>
    </div>
  );
};

export default HomePage;
