import { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";
import { AddLoanForm } from "./components/AddLoanForm";
import { LoansGrid } from "./components/LoansGrid";
import { Login } from "./components/Login";

function App() {

  const [session, setSession] = useState(localStorage.getItem('user'))
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const userString = localStorage.getItem('user')
    const userObj = JSON.parse(userString)
    userObj ? setIsLogged(true) : setIsLogged(false)
  }, [session])


  return (
    isLogged
      ?
      <div className="d-flex flex-column align-items-center">
        <Navbar />
        <AddLoanForm />
        <LoansGrid />
      </div>
      :
      <Login />
  )
}

export default App
