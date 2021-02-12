import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import { auth } from './firebase'

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
      if (user) return setFirebaseUser(user)
      setFirebaseUser(null)
    })
  }, [])
  return firebaseUser !== false ? (
    <Router>
      <Header firebaseUser={ firebaseUser }/>
      <Main />
    </Router>
  ) : (
      <p>cargando ...</p>
  )
}

export default App;
