// src/components/Home.jsx
import React from 'react'
import { useContext } from 'react'
import {LanguageContext} from './Layout'
import {translations} from '../translations'

const Home = () => {
 
  const { language } = useContext(LanguageContext)
  const translation = translations[language]

  return (
    <div className="hero-container">
      <h1 className="hero-heading">{translation.welcome}</h1>
      <h3>{translation.homePage}</h3>
    </div>
  )
}

export default Home;

