import React, { useState, useContext, useEffect } from "react";
import { auth } from '../firebase'

const AuthContext = React.createContext();

// Custom hook
// useContext returns the current context value for this context 
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  // just want this to run once
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    // this will unsubscribe from onAuthStateChanged listener
    // whenever this component unmounts
    return unsubscribe
  }, [])

  const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password)
  const login = (email, password) => auth.signInWithEmailAndPassword(email, password)
  const logout = () => auth.signOut()
  const resetPassword = (email) => auth.sendPasswordResetEmail(email)
  const updateProfile = (name) => auth.currentUser.updateProfile({ displayName: name})

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
    )
};
