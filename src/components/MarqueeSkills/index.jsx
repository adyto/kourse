import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeSkills = () => {
  const dataSkills = [
    {
      name: 'Vue',
      title: 'front-end-developer',
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    },
    {
      name: 'flutter',
      title: 'mobile-developer',
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    },
    {
      name: 'laravel',
      title: 'back-end-developer',
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
    },
    {
      name: 'angular',
      title: 'front-end-developer',
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    },
    {
      name: 'golang',
      title: 'back-end-developer',
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
    },
    {
      name: 'kotlin',
      title: 'mobile-developer',
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    },
    {
      name: 'react',
      title: 'front-end-developer',
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'spring boot',
      title: 'back-end-developer',
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    },
    {
      name: 'figma',
      title: 'ui-ux-design',
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    },
    {
      name: 'python',
      title: 'data-science',
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
  ];
  console.log(dataSkills.slice(0, 1));
  return (
    <div className="flex flex-col gap-6 pb-20">
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {dataSkills.slice(0, 5).map((item) => (
          <div
            className="cursor-pointer scale-90 duration-500 transition-transform items-center  bg-white/10 flex flex-row  h-28 w-72 mx-auto p-4 rounded-xl space-x-2 hover:scale-100 "
            key={item.name}
          >
            <img src={item.imgUrl} className="w-20 h-auto" />
            <div className="flex flex-col">
              <h1 className="text-white font-bold capitalize text-xl">
                {item.name}
              </h1>
              <h2 className="text-white/60 text-sm">
                {item.title === 'front-end-developer'
                  ? 'Front-End Developer'
                  : item.title === 'back-end-developer'
                  ? 'Back-End Developer'
                  : item.title === 'mobile-developer'
                  ? 'Mobile Developer'
                  : item.title}
              </h2>
            </div>
          </div>
        ))}
      </Marquee>
      <Marquee
        pauseOnHover={true}
        speed={50}
        gradient={false}
        direction="right"
      >
        {dataSkills.slice(5, 11).map((item) => (
          <div
            className="cursor-pointer scale-90 duration-500 transition-transform items-center  bg-white/10 flex flex-row  h-28 w-72 mx-auto p-4 rounded-xl space-x-2 hover:scale-100 "
            key={item.name}
          >
            <img src={item.imgUrl} className="w-20 h-auto" />
            <div className="flex flex-col">
              <h1 className="text-white font-bold capitalize text-xl">
                {item.name}
              </h1>
              <h2 className="text-white/60 text-sm">
                {item.title === 'front-end-developer'
                  ? 'Front-End Developer'
                  : item.title === 'back-end-developer'
                  ? 'Back-End Developer'
                  : item.title === 'mobile-developer'
                  ? 'Mobile Developer'
                  : item.title}
              </h2>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSkills;
