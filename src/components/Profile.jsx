import React, { useState, useContext } from 'react'
import {LanguageContext} from './Layout'
import {translations} from '../translations'

const Profile = ({ username, onUpdatePlayerName }) => {
  const { language } = useContext(LanguageContext)
  const translation = translations[language]
  const [newPlayerName, setNewPlayerName] = useState('')
  const [error, setError] = useState('')

  const badWords = ["poop", "damn", "拉屎", "n00b"];

  const handlePlayerNameChange = (e) => {
    setNewPlayerName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (badWords.some(word => newPlayerName.toLowerCase().includes(word))) {
      setError(translation.badWordError)
    } else {
      setError('')
      onUpdatePlayerName(newPlayerName)
    }
     setNewPlayerName('')
  }

  return (
    <div className="container profile-bg">
      <div className="card ">
      <h1>{translation.profilePage}</h1>
      <h2 >{translation.playerName}: {username}</h2>
      <h3>{translation.score}: 389</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="playerName" >{translation.changeName}</label>
        <input
          type="text"
          id="playerName"
          value={newPlayerName}
          onChange={handlePlayerNameChange}
        />
        <button type="submit" >{translation.update}</button>
        {error && <p className="error">{error}</p>}
      </form>
      </div>
    </div>
  )
}

export default Profile;
