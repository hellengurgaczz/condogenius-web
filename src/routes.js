import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/home/home';
import Login from './components/login/login';

const RoutesConfig = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default RoutesConfig;