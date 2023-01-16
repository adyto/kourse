import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between font-SourceSans items-center">
      <h1 className="font-semibold text-xl text-white">Kourse</h1>
      <div className="flex flex-row space-x-4">
        {['home', 'courses', 'post-a-job', 'contact'].map((value) => (
          <NavLink
            to={`/${value}` === '/home' ? '/' : value}
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-white/80'
            }
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
    </div>
  );
};

export default Navbar;
