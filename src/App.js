import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './components/Login';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {

  const [username, setUsername] = useState('')
  const [playerName, setPlayerName] = useState('JohnyBadName')

  function handleUserName (username) {
    setUsername(username)
  }
  const handleUpdatePlayerName = (playerName) => {
    setPlayerName(playerName);
  }

  
  return (
    <>
     <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleUserName} />} />
          <Route path="/profile" element={<Profile username={playerName} onUpdatePlayerName={handleUpdatePlayerName} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
   
 
     </BrowserRouter>
    </>
   
  );
};

export default App;
