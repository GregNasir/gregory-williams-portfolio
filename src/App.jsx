// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  return (
    <>

    
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<About/>} />
          <Route path='home' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='portfolio' element={<Portfolio/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='resume' element={<Resume/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
