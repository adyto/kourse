import React from 'react';
import Navbar from '../../components/Navbar';
import { MainBanner, StepBanner } from '../index';

const HomePage = () => {
  return (
    <div className="bg-color-palette-1 h-full">
      <div className="container mx-auto py-14">
        <Navbar />
        <MainBanner />
        <StepBanner />
      </div>
    </div>
  );
};

export default HomePage;
