import React, { useState } from "react";
import Navbar from "./Navbar";
import { Box, Button } from "@mui/material";
import { styles } from "../CustomStyles";
import Text from "@mui/material/Typography";
import UsersIcon from "../icons/UsersIcon";
import PlusIcon from "../icons/PlusIcon";
import UserModal from "../modals/UserModal";

function Header() {

  const [showUserModal, setShowUserModal] = useState(false);

  return (
    <Box sx={styles.headerContainerStyle}>
      <Box sx={styles.headerLeftInnerboxStyle}>
        <Box sx={styles.headerIconBoxStyle}>
          <UsersIcon />
        </Box>
        <Text sx={styles.headerIconTextStyle}>Users</Text>
      </Box>

      <Navbar />

      <Button sx={{ marginLeft:"0px"}} onClick={() => {setShowUserModal(true)}} variant="contained">
        <Box sx={{width:"20px", height:"20px"}} ><PlusIcon/></Box>
        <Text sx={styles.buttonTextsStyle}>Add New User</Text>
      </Button>
      <UserModal type={"create"} id={null} showUserModal={showUserModal} setShowUserModal={setShowUserModal}/>
    </Box>
  );
}

export default Header;
