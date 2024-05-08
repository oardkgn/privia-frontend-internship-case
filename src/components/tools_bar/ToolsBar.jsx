import { Box, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Text from "@mui/material/Typography";
import { styles } from "../CustomStyles";

function ToolsBar() {
  return (
    <Box sx={styles.toolsBarContainerStyle}>
      <Box sx={styles.toolsBarInnerBoxStyle}>
        <SearchIcon sx={styles.toolsBarSearchIconStyle} />
        <FormControl sx={{width:"100%", outline:"none "}} variant="standard">
          <Input
            placeholder="Search"
            sx={{fontWeight: "500",fontFamily:"Montserrat", bgcolor:"#E6E6E6", borderRadius:"4px 4px 0px 0px", padding:"4px 30px 4px 10px ", fontSize:"14px" }}
          />
        </FormControl>
      </Box>
      <Box
        sx={styles.toolsBarDeleteBoxStyle}
      >
        <DeleteIcon sx={styles.toolsBarDeleteIconStyle} />
        <Text sx={styles.toolsBarDeleteTextStyle}>Delete</Text>
      </Box>
    </Box>
  );
}

export default ToolsBar;
