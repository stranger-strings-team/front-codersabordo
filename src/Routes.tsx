import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Onboarding from './pages/Onboarding/Onboarding';
import { NoMatch } from './pages/NoMatch';
import Layout from './components/Layout.tsx/Layout';
import Final from './pages/Final/Final';
import Profile from './pages/Profile/Profile';
import CompletedSection from './pages/CompletedSection/CompletedSection';


const CreateRoutes = () => (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/" element={<Layout />}>
      <Route path="/profile" element={<Profile/>}/>
        <Route path="/onboarding" element={<Onboarding/>}/>
        <Route path="/seccion-completada" element={<CompletedSection/>}/>
        <Route path="/final" element={<Final/>}/>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
);

export default CreateRoutes;

