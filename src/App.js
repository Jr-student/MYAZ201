import { useContext } from "react";
import EmployeeList from "./components/employeeList/EmployeeList";
import EmployeeAdd from "./components/employeeAdd/EmployeeAdd";
import EmployeeUpdate from "./components/employeeUpdate/EmployeeUpdate";
import AppContext from "./context/AppContext";

export default function App() {
  const { appName} =
    useContext(AppContext);

  return (
    <div>
      <h1> {appName} </h1>
      <EmployeeList />
      <EmployeeAdd />
      <EmployeeUpdate />
    </div>
  );
}


