import React, { useState } from "react";
import { Button, Popover, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplyIcon from "@mui/icons-material/Reply";
import { styles } from "./CustomStyles";

const DoubleCheck = ({ open, id, confirmedDelete, anchorEl }) => {
  return (
    <Popover
      id={id || -1}
      open={open || false}
      anchorEl={anchorEl}
      onClose={() => confirmedDelete(null)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Typography sx={{ pb: 2, fontFamily: "Montserrat" }}>
        Are you sure to delete?
      </Typography>
      <div style={{ display: "flex", gap: "4px" }}>
        <Button
          style={{}}
          sx={styles.DCcancelButtonStyle}
          onClick={() => confirmedDelete(null)}
        >
          <ReplyIcon />
          <Typography>Cancel</Typography>
        </Button>
        <Button
          style={{}}
          sx={styles.DCdeleteButtonStyle}
          onClick={() => confirmedDelete(id)}
        >
          <DeleteIcon />
          <Typography>Delete</Typography>
        </Button>
      </div>
    </Popover>
  );
};

export default DoubleCheck;
