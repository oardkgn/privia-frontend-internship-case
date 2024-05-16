import { createContext, useEffect, useReducer, useState } from "react";
import { getUsers } from "../server/api";

export const TableContext = createContext();

const TableContextProvider = ({ children }) => {
  let initialState = {
    users: [],
    filteredUsers: [],
    filteredBy: "all",
    searchingTerm: "",
    selectedUsers: [],
  };

  const initialUsersTable = JSON.parse(localStorage.getItem("usersTable"));
  if (initialUsersTable) {
    initialState = initialUsersTable;
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_FILTERED_BY":
        return { ...state, filteredBy: action.payload };
      case "SET_SEARCHING_TERM":
        return { ...state, searchingTerm: action.payload };
      case "SET_SELECTED_USERS":
        return { ...state, selectedUsers: action.payload };
      case "SET_USERS":
        return { ...state, users: action.payload };
      case "SET_FILTERED_USERS":
        return { ...state, filteredUsers: action.payload };
    }
  };

  const [tableState, tableDispatch] = useReducer(reducer, initialState);

  const getUsersData = async () => {
    const users = await getUsers();
    tableDispatch({ type: "SET_USERS", payload: users.data });
    getFilteredData(users.data);
  };

  useEffect(() => {
    localStorage.setItem("usersTable", JSON.stringify(tableState));
  }, [tableState]);

  useEffect(() => {
    getUsersData();
  }, []);


  const getFilteredData = (users) => { 
    if (users) {
      const filteredUsers = users.filter((user) =>
        tableState.filteredBy === "all"
          ? user.username
              .toLowerCase()
              .includes(tableState.searchingTerm.toLowerCase()) ||
            user.email
              .toLowerCase()
              .includes(tableState.searchingTerm.toLowerCase())
          : user.role === tableState.filteredBy &&
            (user.username
              .toLowerCase()
              .includes(tableState.searchingTerm.toLowerCase()) ||
              user.email
                .toLowerCase()
                .includes(tableState.searchingTerm.toLowerCase()))
      );
    
      tableDispatch({ type: "SET_FILTERED_USERS", payload: filteredUsers });
    }
  };

  useEffect(() => {
    getFilteredData();
  }, [tableState.filteredBy, tableState.searchingTerm]);

  return (
    <TableContext.Provider value={{ tableState, tableDispatch, getUsersData }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
