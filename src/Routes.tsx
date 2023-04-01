import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/GamePages/Home/Home';
import Layout from './components/Layout/Layout';
import CompletedSection from './pages/GamePages/CompletedSection/CompletedSection';
import Admin from './pages/AdminPages/Admin/Admin';
import Welcome from './pages/GamePages/Welcome/Welcome';
import Login from './pages/GamePages/Login/Login';
import Register from './pages/GamePages/RegisterPage/Register';
import Onboarding from './pages/GamePages/Onboarding/Onboarding';
import Roadmap from './pages/GamePages/Roadmap/Roadmap';
import Profile from './pages/GamePages/Profile/Profile';
import CreatePassword from './pages/GamePages/CreatePassword/CreatePassword';
import ProfilesAdmin from './pages/AdminPages/ProfilesAdmin/ProfilesAdmin';
import OpenQuestion from './pages/GamePages/OpenQuestion/OpenQuestion';
import Final from './pages/GamePages/Final/Final';
import QuizQuestions from './pages/AdminPages/quizQuestions/QuizQuestions';
import PostQuestionForm from './pages/AdminPages/PatchQuestion/PatchQuestion';
import PatchQuestion from './pages/AdminPages/PatchQuestion/PatchQuestion';
import EliminateQuestion from './pages/AdminPages/EliminateQuestion/EliminateQuestion';
import CoderProgress from './pages/AdminPages/CoderProgress/CoderProgress';
import { NoMatch } from './pages/GamePages/NoMatch/NoMatch';




const CreateRoutes = () => (
  
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/" element={<Layout />}>
        <Route path='/welcome' element={<Welcome />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register />} />
        <Route path="/roadmap" element={<Roadmap />}/>
        <Route path="/onboarding/:section" element={<Onboarding />}/>
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
        <Route path="/admin/question/edit" element={<PatchQuestion />} />
        <Route path="/admin/question/delete" element={<EliminateQuestion/>} />
        <Route path="/admin/admins" element={<ProfilesAdmin/>} />
        <Route path='/admin/coders' element={<CoderProgress />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
);

export default CreateRoutes;

