import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Insights from '../pages/Insights/Insights';
import About from '../pages/About/About';
import Register from '../pages/Register/Register';
import Profile from '../pages/Profile/Profile';

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </RouterRoutes>
  );
}
