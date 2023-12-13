import { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";
import { AddLoanForm } from "./components/AddLoanForm";
import { LoansGrid } from "./components/LoansGrid";
import { Login } from "./components/Login";

function App() {

  const [session, setSession] = useState(localStorage)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    if(localStorage.length>0){
      setIsLogged(true)
    }
  },[session])

  return (
    isLogged 
    ?
    <div className="d-flex flex-column align-items-center">
      <Navbar />
      <AddLoanForm />
      <LoansGrid />
    </div>
    :
    <Login/>
  )
}

export default App
