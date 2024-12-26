import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'



const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const mainRef = useRef(null);

  // Toggle the theme
  const ThemeChanger = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.setAttribute('id', theme); // Update the root element's ID
    }
  }, [theme]);
 
  return (

    <div ref={mainRef}
    className=''>
      <Navbar theme={theme} ThemeChanger={ThemeChanger} />
      <Routes>
        <Route path='/' element={<Home theme={theme}/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
     

    </div>
  )
}

export default App