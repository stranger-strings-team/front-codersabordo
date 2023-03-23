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
import OpenQuestion from './pages/OpenQuestion/OpenQuestion';
import Roadmap from './pages/Roadmap/Roadmap';
import QuestionEdit from './AdminPages/QuestionEdit/QuestionEdit';
import PostQuestionForm from "./pages/PostQuestion/PostQuestionForm";
import Admin from './pages/Admin/Admin';
import QuizQuestions from './AdminPages/quizQuestions/QuizQuestions';
import CreateAdmin from './pages/ProfilesAdmin/ProfilesAdmin';
import CreatePassword from './pages/CreatePassword/CreatePassword';
import EliminateQuestion from './pages/EliminateQuestion/EliminateQuestion'




const CreateRoutes = () => (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/" element={<Layout />}>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/register' element={<Register />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/open-question" element={<OpenQuestion/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/create-admin" element={<CreateAdmin/>}/>
        <Route path="/create-password" element={<CreatePassword/>}/>
        <Route path="/eliminate-question" element={<EliminateQuestion/>} />       
        <Route path="/onboarding" element={<Onboarding/>}/>
        <Route path="/incorrect-answer" element={<Incorrect/>}/>
        <Route path="/incomplete-section" element={<IncompleteSection/>}/>
        <Route path="/completed-section" element={<CompletedSection/>}/>
        <Route path="/final" element={<Final/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/roadmap" element={<Roadmap />}/>
        <Route path="/admin/question/post" element={<PostQuestionForm />}/>
        <Route path="/admin/quiz" element={<QuizQuestions />}/>
        <Route path="*" element={<NoMatch />} />
        <Route path="/admin/question/path" element={<QuestionEdit />} />
      </Route>
    </Routes>
);

export default CreateRoutes;

