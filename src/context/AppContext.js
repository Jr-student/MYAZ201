import { createContext } from "react";
import { data } from "../data/data";
import { useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [employees, setList] = useState(data);

  const [selectedEmployee, setSelectedEmployee] = useState({
    id: 0,
    firstName: "",
    lastName: "",
  });

  const values = {
    appName: "Employee App", // State üzerindeki bütün tanımları buradan yapacağız
    employees,
    setList,
    selectedEmployee,
    setSelectedEmployee,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
