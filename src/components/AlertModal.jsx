import React, { useState, useEffect, useContext } from "react";
import { Alert, Box } from "@mui/material";
import { styles } from "./CustomStyles";
import { AlertContext } from "../context/AlertContext";

const AlertModal = () => {
  const {alert, showAlert, hideAlert} = useContext(AlertContext);

  useEffect(() => {
    setTimeout(() => {
      hideAlert()
    }, 3000);
  }, [alert]);

  console.log(alert);

  return (
    <>
      {alert && (
        <Box sx={styles.alertBoxStyle}>
          <Alert severity={alert.type}>{alert.message}</Alert>
        </Box>
      )}
    </>
  );
};

export default AlertModal;
