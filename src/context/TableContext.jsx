import { createContext, useEffect, useReducer, useState } from "react";

export const TableContext = createContext();

const TableContextProvider = ({ children }) => {
    
    let initialState = {
    usersData: [],
    filteredBy: "all",
    searchingTerm: "",
    selectedUsers: [],
  };

  const initialUsersTable = JSON.parse(localStorage.getItem("usersTable"));
  if (initialUsersTable) {
    initialState = initialUsersTable
  }

  
  

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_FILTERED_BY":
        return { ...state, filteredBy: action.payload };
      case "SET_SELECTED_USERS":
        return { ...state, selectedUsers: action.payload };
    }
  };

  const [tableState, tableDispatch] = useReducer(reducer, initialState);
  console.log(tableState);
  useEffect(() => {
    localStorage.setItem("usersTable", JSON.stringify(tableState));
  }, [tableState]);

  return (
    <TableContext.Provider value={{ tableState, tableDispatch }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
