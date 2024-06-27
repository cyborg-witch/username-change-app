import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {LanguageContext} from './Layout'
import {translations} from '../translations'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { language } = useContext(LanguageContext)
  const translation = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'john' && password === 'john123') {
      onLogin(username); 
      navigate('/profile'); 
    } else {
      setError(translation.invalidCredentials);
    }
  }

  return (
    <div className="container login-bg" >
    <div className="card">
      <h1>{translation.login}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{translation.username}:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>{translation.password}:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{translation.login}</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
    </div>
  )
}

export default Login;

