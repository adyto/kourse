import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView={'show'}
      className={`flex flex-row justify-between font-SourceSans items-center   relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <h1 className="font-semibold text-xl text-white">Kourse</h1>
      <div className="flex flex-row space-x-4">
        {['home', 'courses', 'post-a-job', 'contact'].map((value) => (
          <NavLink
            to={`/${value}` === '/home' ? '/' : value}
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-white/80'
            }
            key={value}
            end
          >
            <span
              className={value === 'post-a-job' ? 'normal-case' : 'capitalize'}
            >
              {value === 'post-a-job' ? 'Post a Job' : value}
            </span>
          </NavLink>
        ))}
      </div>
      <h2 className="font-semibold px-6 py-3 border-none rounded-lg bg-white/10 text-white">
        Sign Up
      </h2>
    </motion.div>
  );
};

export default Navbar;
