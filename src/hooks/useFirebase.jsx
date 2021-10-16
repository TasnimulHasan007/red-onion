import { useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"
import { useEffect } from "react"
import { useHistory } from "react-router"

// initialize firebase
initializeAuthentication()
// hook
const useFirebase = () => {
  // history
  const history = useHistory()
  // states
  const [user, setUser] = useState({})
  const [error, setError] = useState("")
  // auth
  const auth = getAuth()
  // google sign in
  const googleProvider = new GoogleAuthProvider()
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user)
        history.push("/home")
      })
      .catch((error) => {
        setError(error)
      })
  }
  // on auth changed
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user && setUser(user)
    })
  }, [])
  // sign out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch((error) => {
        setError(error)
      })
  }
  // return
  return {
    user,
    error,
    googleSignIn,
    logOut,
  }
}

export default useFirebase
