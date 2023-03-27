import React, { useState } from 'react';
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
import OpenQuestion from './pages/OpenQuestion/OpenQuestion';
import Roadmap from './pages/Roadmap/Roadmap';
import PostQuestionForm from "./pages/PostQuestion/PostQuestionForm";
import CoderProgres from './AdminPages/CoderProgres/CoderProgres';
import Admin from './AdminPages/Admin/Admin';
import QuizQuestions from './AdminPages/quizQuestions/QuizQuestions';
import CreateAdmin from './pages/ProfilesAdmin/ProfilesAdmin';
import CreatePassword from './pages/CreatePassword/CreatePassword';
import EliminateQuestion from './AdminPages/EliminateQuestion/EliminateQuestion'



const CreateRoutes = () => (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/" element={<Layout />}>
        <Route path='/welcome' element={<Welcome />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register />} />
        <Route path="/roadmap" element={<Roadmap />}/>
        <Route path="/onboarding" element={<Onboarding section={0}/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/create-password" element={<CreatePassword/>}/>
        <Route path="/open-question" element={<OpenQuestion/>}/>
        <Route path="/completed-section" element={<CompletedSection/>}/>
        <Route path="/final" element={<Final/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/roadmap" element={<Roadmap />}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/question" element={<QuizQuestions />}/>
        <Route path="/admin/question/post" element={<PostQuestionForm />}/>
        <Route path="/admin/question/delete" element={<EliminateQuestion/>} />
        <Route path="/admin/admins" element={<CreateAdmin/>} />
        <Route path='/admin/coders' element={<CoderProgres />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
);

export default CreateRoutes;

