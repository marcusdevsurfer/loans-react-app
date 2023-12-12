import { Navbar } from "./components/Navbar";
import { AddLoanForm } from "./components/AddLoanForm";
import { LoansGrid } from "./components/LoansGrid";

function App() {
  const env = import.meta.env
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>ENV MODE : {env.VITE_MODE}</h1>
      <Navbar />
      <AddLoanForm />
      <LoansGrid />
    </div>
  )
}

export default App
