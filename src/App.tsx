import React from 'react';
import './App.css';
import CurrentUserProvider from './context/CurrentUserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/Navbar/NavBar';
import LoginPage from './pages/Account/LoginPage';
import SignupPage from './pages/Account/SignupPage';
import AccountPage from './pages/Account/AccountPage';
import ProgramEditor from './pages/Programs/ProgramEditor';
import NewProgramPage from './pages/Programs/NewProgramPage';
import EmulationView from './pages/Programs/EmulationView';

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/editor/:program_id" element={<ProgramEditor />} />
          <Route path="/new/" element={<NewProgramPage />} />
          <Route path="/emulator/:program_id" element={<EmulationView />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
