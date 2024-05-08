import React from "react";
import Header from "../components/header/Header";
import { Container } from "@mui/material";
import { styles } from "../components/CustomStyles";
import ToolsBar from "../components/tools_bar/ToolsBar";
import UsersList from "../components/users_list/UsersList";

function Home() {
  return (
    <Container style={{padding:"0px"}} sx={styles.mainContainerStyle} maxWidth="lg">
      <Header />
      <ToolsBar />
      <UsersList />
    </Container>
  );
}

export default Home;
