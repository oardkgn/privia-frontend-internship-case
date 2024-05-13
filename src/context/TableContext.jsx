import { createContext, useEffect, useReducer, useState } from "react";
import { getUsers } from "../server/api";

export const TableContext = createContext();

const TableContextProvider = ({ children }) => {
  let initialState = {
    users: [],
    filteredUsers:[],
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
    const response = await getUsers();
    tableDispatch({ type: "SET_USERS", payload: response.data });
    tableDispatch({ type: "SET_FILTERED_USERS", payload: response.data });
  };

  useEffect(() => {
    localStorage.setItem("usersTable", JSON.stringify(tableState));
  }, [tableState]);

  useEffect(() => {
    getUsersData();
  }, []);

  useEffect(() => {
    const filteredUsers = tableState.users.filter((user) =>
      tableState.filteredBy === "all" ? user : user.role === tableState.filteredBy
    );
    tableDispatch({ type: "SET_FILTERED_USERS", payload: filteredUsers });
  }, [tableState.filteredBy]);

  console.log(tableState);

  return (
    <TableContext.Provider value={{ tableState, tableDispatch, getUsersData }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
