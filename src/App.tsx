import React from 'react';
import './App.css';
import CurrentUserProvider from './context/CurrentUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
