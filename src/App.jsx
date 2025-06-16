import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Components/Header'

import Error from './error'
import Home from './Pages/home'
import Projects from './Pages/projects'

export default function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='*' element={<Error/>}/>
        <Route path='/portfolio-2.0/' element={<Home/>}/>
        <Route path='/portfolio-2.0/projects/' element={<Projects/>}/>
      </Routes>
    </Router>
  )
}