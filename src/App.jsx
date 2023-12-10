import { Actions } from "./components/Actions";
import { AddLoanForm } from "./components/AddLoanForm";
import { LoansGrid } from "./components/LoansGrid";

function App() {

  return (
    <div className="d-flex flex-column align-items-center">
      <AddLoanForm />
      <LoansGrid />
    </div>
  )
}

export default App
