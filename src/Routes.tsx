import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Onboarding from './pages/Onboarding/Onboarding';


const CreateRoutes = () => (
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/onboarding" element={<Onboarding/>}/>
    </Routes>
);

export default CreateRoutes;

