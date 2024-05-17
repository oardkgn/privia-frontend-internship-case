import React from "react";
import Header from "../components/header/Header";
import {Container } from "@mui/material";
import { styles } from "../components/CustomStyles";
import ToolsBar from "../components/tools_bar/ToolsBar";
import UsersTable from "../components/users_list/UsersTable"
import AlertModal from "../components/AlertModal";
import DoubleCheckPopup from "../components/DoubleCheckPopup";

function Home() {
  
  return (
    <Container style={{padding:"0px"}} sx={styles.mainContainerStyle} maxWidth="lg">
      <Header />
      <ToolsBar />
      <UsersTable />
      <AlertModal />
      <DoubleCheckPopup />
    </Container>
  );
}

export default Home;
