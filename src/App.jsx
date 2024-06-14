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





function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />} /> 
        <Route path='/signup' element={<SignUpForm />} /> {/* Corrected component name */}
        <Route path='/login' element={<Login />} />
        <Route path='/emailverification' element={<EmailVerification />} />
        <Route path="/assigned" element={<Assigned />} /> 
        <Route path='/team' element={<Team />} />
        <Route path='/submitTickets' element={<SubmitTickets />} />
        <Route path='/dashboard' element={<Layout />} /> 
        <Route path='/unassigned' element={<Uassigned />} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
