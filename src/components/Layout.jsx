import React, { createContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import imageUrl from "../assets/images/user-2.png"

export const LanguageContext = createContext()
const Layout = () => {
    const [language, setLanguage] = useState('en')
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
      }
  return (
    <LanguageContext.Provider value={{ language}}>
    <div>
           
        <nav className="navbar">
          <div className="logo">
            <Link to="/">Dragon warrior</Link>
          </div>
          <div className="nav-links">
            <Link to="/login">
            <img
              src={imageUrl}
              className="login-icon"
                    />
            </Link>
            <div className="language-switcher">
             <select value={language} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="zh">中文</option>
            </select>
            </div>
          </div>
        </nav>
        <main> <Outlet/></main>
    
    </div>
    </LanguageContext.Provider>
  )
}

export default Layout
