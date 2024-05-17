import { useEffect, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styles } from "../CustomStyles";
import { useContext } from "react";
import { TableContext } from "../../context/TableContext";

export default function Navbar() {
  const {tableState,tableDispatch} = useContext(TableContext);
  const [value, setValue] = useState(tableState.filteredBy);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    tableDispatch({ type: "SET_FILTERED_BY", payload:newValue  })
  };

  return (
    <Box sx={styles.headerNavbarBoxStyle}>
      <Box sx={{ outlineColor: "divider", position:"absolute"}}>
        <Tabs
          value={value}
          onChange={handleChange}
        >
         <Tab sx={styles.headerTabsButtonsStyle} value="all" label="All Users" />
        <Tab sx={styles.headerTabsButtonsStyle} value="contributor" label="Contributor" />
        <Tab sx={styles.headerTabsButtonsStyle} value="author" label="Author" />
        <Tab sx={styles.headerTabsButtonsStyle} value="administrator" label="Administrator" />
        <Tab sx={styles.headerTabsButtonsStyle} value="subscriber" label="Subscriber" />
        </Tabs>
      </Box>
    </Box>
  );
}
