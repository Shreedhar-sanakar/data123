import "./App.css";
import BudgetModal from "./components/BudgetModal";
import DisplayGrid from "./components/DisplayGrid";
import Topbar from "./components/Topbar";


function App() {
  return (
    <div className="App">
      <Topbar />
      <BudgetModal />
      <DisplayGrid />
    </div>
  );
}

export default App;
