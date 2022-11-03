import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Employee from "../employee/Employee";

export default function EmployeeList() {
  
  const { employees, setList, setSelectedEmployee } = useContext(AppContext);
  const handleClearAll = () => {
    setList([]);
  };
  const handleGetAll = () => {
    setList(employees);
  };
  const handleRemove = (id) => {
    setList(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div>
      <h3>Employee List ({employees.length})</h3>
      {employees.map((emp, index) => (
        <Employee
          setSelectedEmployee={setSelectedEmployee}
          key={index}
          employee={emp}
          handleRemove={handleRemove}
        />
      ))}
      <button onClick={handleClearAll}>Clear All</button>
      <button onClick={handleGetAll}>Get All</button>
    </div>
  );
}
