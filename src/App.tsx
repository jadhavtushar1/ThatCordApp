import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePAge';
import VideoContainer from './Components/VideoComponent/VideoContainer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path='/' Component={LoginPage}/> 
          <Route path='/thatCord' Component={HomePage}/>
          </Routes>
          </BrowserRouter>
   
    </div>
  );
}

export default App;
