import React, { useState } from 'react';
import CardBanner from './CardBanner';

const MainBanner = () => {
  const [active, setActive] = useState('fullstack');

  const descBanner = [
    {
      id: 'fullstack',
      title: 'Full-Stack Developer',
      imgUrl: '/banner-1.png',
    },
    {
      id: 'frontend',
      title: 'Front-End Developer',
      imgUrl: '/banner-2.png',
    },
    {
      id: 'backend',
      title: 'Back-End Developer',
      imgUrl: '/banner-3.png',
    },
  ];

  return (
    <div className="py-28">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-2">
        <div className="flex flex-col max-w-2xl">
          <h1 className="font-Poppins text-[54px] text-white mb-4">
            Elevate Your Career to the Next Level
          </h1>
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
        </div>
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
        {/* <img src={'/banner.png'} /> */}
      </div>
    </div>
  );
};

export default MainBanner;
