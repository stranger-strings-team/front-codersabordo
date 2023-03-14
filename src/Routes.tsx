import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Onboarding from './pages/Onboarding/Onboarding';
import { NoMatch } from './pages/NoMatch';
import Layout from './components/Layout.tsx/Layout';
import Final from './pages/Final/Final';
import Profile from './pages/Profile/Profile';
import {IncompleteSection}  from './pages/IncompleteSection/IncompleteSection';
import Login from './pages/Login/Login';
import Welcome from './pages/Welcome/Welcome';
import Incorrect from './pages/Incorrect/Incorrect';
import CompletedSection from './pages/CompletedSection/CompletedSection';
import Register from './pages/RegisterPage/Register';


const CreateRoutes = () => (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/" element={<Layout />}>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/register' element={<Register />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/onboarding" element={<Onboarding/>}/>
        <Route path="/respuesta-incorrecta" element={<Incorrect/>}/>
        <Route path="/seccion-incompleta" element={<IncompleteSection/>}/>
        <Route path="/seccion-completada" element={<CompletedSection/>}/>
        <Route path="/final" element={<Final/>}/>
        <Route path="*" element={<NoMatch />} />
        <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
);

export default CreateRoutes;

