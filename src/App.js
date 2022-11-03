import { useContext } from "react";
import EmployeeList from "./components/employeeList/EmployeeList";
import EmployeeAdd from "./components/employeeAdd/EmployeeAdd";
import EmployeeUpdate from "./components/employeeUpdate/EmployeeUpdate";
import AppContext from "./context/AppContext";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function App() {
  const { appName } = useContext(AppContext);

  return (
    <div>
<<<<<<< HEAD
      <BrowserRouter>
        <nav>
          <div>
            <ul>
              <li>
                <Link to="/">Employee List</Link>
              </li>
              <li>
                <Link to="/add">Employee Add</Link>
              </li>
              <li>
                <Link to="/update">Employee Update</Link>
              </li>
            </ul>
          </div>
        </nav>
        <h1> {appName} </h1>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<EmployeeAdd />} />
          <Route path="/update" element={<EmployeeUpdate />} />
        </Routes>
        {/* {employees.map((emp) => (
      <p>{emp}</p>
    ))} */}
      </BrowserRouter>
=======
      <h1> {appName} </h1>
      <EmployeeList />
      <EmployeeAdd />
      <EmployeeUpdate />
>>>>>>> b5a91f59f293fd8aa7daa0adb4348af7f61ea6e3
    </div>
  );
}


