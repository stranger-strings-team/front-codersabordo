import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Onboarding from './pages/Onboarding/Onboarding';
import { NoMatch } from './pages/NoMatch';
import Layout from './components/Layout.tsx/Layout';


const CreateRoutes = () => (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/" element={<Layout />}>
        <Route path="/onboarding" element={<Onboarding/>}/>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
);

export default CreateRoutes;

