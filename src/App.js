import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, Course, CourseDetails } from './container';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="course" element={<Course />} />
      <Route path="course/:slug" element={<CourseDetails />} />
    </Routes>
  );
};

export default App;
