import { useReducer, createContext } from "react";
import appReducer from "./AppReducer";

const initialState = {
  employees: [
    {
      id: 1,
      name: "Daren Sammy",
      location: "Newzeland",
      designation: "Python Developer",
    },
  ],
};

export const EmployeeContext = createContext(initialState);

export const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addEmployee = (employee) => {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee,
    });
  };

  const editEmployee = (employee) => {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employee,
    });
  };

  const removeEmployee = (id) => {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id,
    });
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees: state.employees,
        addEmployee,
        editEmployee,
        removeEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
