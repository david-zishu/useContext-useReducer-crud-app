import { Home } from "./components/Home";
import { AddEmployee } from "./components/AddEmployee";
import { EditEmployee } from "./components/EditEmployee";
import { EmployeeProvider } from "./context/EmployeeContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <EmployeeProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </EmployeeProvider>
  );
}

export default App;
