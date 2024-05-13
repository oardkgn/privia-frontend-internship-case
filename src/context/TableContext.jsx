import { createContext, useEffect, useReducer, useState } from "react";
import { getUsers } from "../server/api";

export const TableContext = createContext();

const TableContextProvider = ({ children }) => {
    
    let initialState = {
    users: [],
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
      case "SET_USERS":
        return { ...state, users: action.payload };
    }
  };

  const [tableState, tableDispatch] = useReducer(reducer, initialState);

  const getUsersData = async () => {
    const response = await getUsers();
    tableDispatch({ type: "SET_USERS", payload: response.data });
  };
 
  useEffect(() => {
    localStorage.setItem("usersTable", JSON.stringify(tableState));
  }, [tableState]);
  
  useEffect(() => {
    getUsersData();
  }, []);

  console.log(tableState);
  
  return (
    <TableContext.Provider value={{ tableState, tableDispatch, getUsersData }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
