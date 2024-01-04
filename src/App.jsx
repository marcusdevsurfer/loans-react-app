import { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";
import { LoansGrid } from "./components/LoansGrid";
import { Login } from "./components/Login";

function App() {

  const [session, setSession] = useState(sessionStorage.getItem('user'))
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const userObj = JSON.parse(session)
    userObj ? setIsLogged(true) : setIsLogged(false)
  }, [session])


  return (
    isLogged
      ?
      <div className="d-flex flex-column">
        <Navbar />
        <LoansGrid />
      </div>
      :
      <Login />
  )
}

export default App
