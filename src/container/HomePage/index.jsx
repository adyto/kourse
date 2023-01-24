import React from 'react';
import Navbar from '../../components/Navbar';
import { MainBanner } from '../index';
import {
  BenefitCard,
  MarqueeSkills,
  Testimony,
  ProductThumbnail,
  Footer,
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
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
