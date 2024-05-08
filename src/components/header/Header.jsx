import React from "react";
import Navbar from "./Navbar";
import { Box, Button } from "@mui/material";
import { styles } from "../CustomStyles";
import Text from "@mui/material/Typography";
import UsersIcon from "../icons/UsersIcon";
import PlusIcon from "../icons/PlusIcon";

function Header() {
  return (
    <Box sx={styles.headerContainerStyle}>
      <Box sx={styles.headerLeftInnerboxStyle}>
        <Box sx={styles.headerIconBoxStyle}>
          <UsersIcon />
        </Box>
        <Text sx={styles.headerIconTextStyle}>Users</Text>
      </Box>

      <Navbar />

      <Button variant="contained">
        <Box sx={{width:"20px", height:"20px"}} ><PlusIcon/></Box>
        <Text sx={styles.buttonTextsStyle}>Add New User</Text>
      </Button>
    </Box>
  );
}

export default Header;
