import { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styles } from "../CustomStyles";


export default function Navbar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.headerNavbarBoxStyle}>
      <Box sx={{ outlineColor: "divider", position:"absolute"}}>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label="All Users"  />
          <Tab label="Contributor"  />
          <Tab label="Author"  />
          <Tab label="Administrator"  />
          <Tab label="Subscriber"  />
        </Tabs>
      </Box>
    </Box>
  );
}
