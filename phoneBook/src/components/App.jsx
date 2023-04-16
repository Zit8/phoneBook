import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCompany from './AddCompany';
import Handbook from './Handbook';
import MainPage from './MainPage';
import Navbar from './Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
// import SignUp from './SignUp';

export default function App({ allCompany, user, usersHandbooks }) {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage allCompany={allCompany} user={user} />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/addcompany" element={<AddCompany />} />
        <Route path="/handbook" element={<Handbook usersHandbooks={usersHandbooks} user={user} />} />
      </Routes>
    </div>
  );
}
