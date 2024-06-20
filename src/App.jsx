/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpForm from './pages/signUpForm'; // Corrected import statement
// import SetUp from './pages/setup';
import EmailVerification from './pages/emailVerification';
// import Roles from './pages/roles';
import Login from './pages/login';
import Landing from './pages/landing/landing'; 
import Layout from './pages/layout'; 
import Team from './pages/team'; 
import SubmitTickets from './components/submitTickets'; 
import Uassigned from './pages/unassigned'; 
import Assigned from './pages/assigned';
import TeamPerformance from './pages/teamPerformance'
import Overview from './pages/overview'
import Discussion from './pages/discussion'





function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />} /> 
        <Route path='/signup' element={<SignUpForm />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/emailverification' element={<EmailVerification />} />
        <Route path="/assigned" element={<Assigned />} /> 
        <Route path='/team' element={<Team />} />
        <Route path='/submitTickets' element={<SubmitTickets />} />
        <Route path='/dashboard' element={<Layout />} /> 
        <Route path='/unassigned' element={<Uassigned />} /> 
        <Route path='/teamPerformance' element={<TeamPerformance />} /> 
        <Route path='/overview' element={<Overview />} /> 
        <Route path='/discussion' element={<Discussion />} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
