import { Box, Button, CircularProgress, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Text from "@mui/material/Typography";
import { styles } from "../CustomStyles";
import { TableContext } from "../../context/TableContext";
import { deleteSelectedUsers } from "../../server/api";
import { AlertContext } from "../../context/AlertContext";
import DoubleCheck from "../DoubleCheckPopup";
import { useEffect } from "react";

function ToolsBar() {
  const [searchText, setSearchText] = useState("");
  const { tableState, getUsersData, tableDispatch } = useContext(TableContext);
  const { loading, setLoading } = useContext(AlertContext);
  const { showAlert } = useContext(AlertContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const confirmedDelete = async (action) => {
    if (action) {
      setAnchorEl(null);
      setLoading(true);
      try {
        const response = await deleteSelectedUsers(tableState.selectedUsers);
        showAlert("success", "Users deleted successfully.");
        getUsersData();
        tableDispatch({ type: "SET_SELECTED_USERS", payload: [] });
        setLoading(false);
      } catch (error) {
        console.error("Error deleting selected users:", error);
        setLoading(false);
      }
    }
    setAnchorEl(null);
  };

  const DCOpen = Boolean(anchorEl);

  const selectedUsersDelDoubleControl = async (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    tableDispatch({ type: "SET_SEARCHING_TERM", payload:searchText  })
  }, [searchText])
  

  return (
    <Box sx={styles.toolsBarContainerStyle}>
        <Box sx={styles.toolsBarInnerBoxStyle}>
          <SearchIcon sx={styles.toolsBarSearchIconStyle} />

          <FormControl
            sx={{ width: "100%", outline: "none " }}
            variant="standard"
          >
            <Input
              placeholder="Search"
              disableUnderline
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              value={searchText}
              sx={{
                fontWeight: "500",
                fontFamily: "Montserrat",
                bgcolor: "#F5F6F8",
                borderRadius: "5px",
                padding: "8px 30px 8px 10px ",
                fontSize: "14px",
              }}
            />
          </FormControl>
        </Box>
   
      <Button
        disabled={loading || tableState.selectedUsers.length == 0}
        sx={styles.toolsBarDeleteBoxStyle}
        onClick={(e) => selectedUsersDelDoubleControl(e)}
      >
        {loading ? (
          <CircularProgress sx={{ paddingX: "10px", paddingY: "5px" }} />
        ) : (
          <>
            <DeleteIcon sx={styles.toolsBarDeleteIconStyle} />
            <Text sx={styles.toolsBarDeleteTextStyle}>Delete</Text>
          </>
        )}
      </Button>
      {anchorEl && (
        <DoubleCheck
          open={DCOpen}
          id={-1}
          confirmedDelete={confirmedDelete}
          anchorEl={anchorEl}
        />
      )}
    </Box>
  );
}

export default ToolsBar;
