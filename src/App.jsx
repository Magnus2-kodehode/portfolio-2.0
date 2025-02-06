import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Error from './error';
import Home from './Pages/home';
import Projects from './Pages/projects';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='*' element={<Error/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </Router>
  );
};