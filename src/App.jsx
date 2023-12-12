import { Navbar } from "./components/Navbar";
import { AddLoanForm } from "./components/AddLoanForm";
import { LoansGrid } from "./components/LoansGrid";

function App() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Navbar />
      <AddLoanForm />
      <LoansGrid />
    </div>
  )
}

export default App
