import React from 'react';
import './App.css';
import CurrentUserProvider from './context/CurrentUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import LoginPage from './pages/Account/LoginPage';
import SignupPage from './pages/Account/SignupPage';

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
