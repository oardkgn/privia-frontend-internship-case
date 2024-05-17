export const styles = {
  mainContainerStyle: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 1,
    marginTop: 1,
  },
  headerContainerStyle: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    justifyContent: "space-between",
    paddingX: "14px",
    paddingY: "12px",
    borderBottom: "2px solid #EEEEEE",
    flexWrap: "wrap",
  },
  headerLeftInnerboxStyle: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    flex: "0 1 auto",
  },
  headerIconBoxStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    width: "40px",
    bgcolor: "#cfe8fc",
    borderRadius: "5px",
  },

  headerIconTextStyle: {
    fontFamily: "Montserrat",
    color: "#3A3C40",
    fontSize: "14px",
    fontWeight: "600",
  },
  headerNavbarBoxStyle: {
    position: "relative",
    order: 2,
    width: "100%",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    "@media (min-width: 850px)": {
      width: "auto",
      flex: 1,
      flexBasis: "auto",
      order: 0,
    },
  },
  headerTabsButtonsStyle: {
    
    minWidth:"70px",
    paddingX:"4px",
    fontSize:"9px",
    marginTop:"6px !important",
    "@media (min-width: 850px)": {
      minWidth:"90px",
      marginTop:"0px !important",
      fontSize:"13px",
      paddingX:"16px",
      paddingButton:"24px"
    },
  },
  buttonTextsStyle: {
    fontFamily: "Montserrat",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: 1.5,
    whiteSpace: "nowrap",
  },
  toolsBarContainerStyle: {
    display: "flex",
    margin: "20px 18px",
    justifyContent: "space-between",
  },

  toolsBarInnerBoxStyle: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "300px",
  },

  toolsBarDeleteBoxStyle: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "8px",
    marginLeft:"10px",
    gap:"0px",
    borderRadius: "4px",
    transition: "all 0.15s ease-in",
    "&:hover": {
      backgroundColor: "#E6E6E6",
      opacity: 0.9,
      boxShadow: "none",
    },
  },

  toolsBarSearchIconStyle: {
    position: "absolute",
    right: "-10px",
    zIndex: 10,
    color: "#82868C",
    width: "20px",
    height: "20px",
    marginRight: "16px",
  },

  toolsBarDeleteTextStyle: {
    fontFamily: "Montserrat",
    fontWeight: "500",
    lineHeight: "15px",
    fontSize: "13px",
    color: "#82868C",
  },

  toolsBarDeleteIconStyle: {
    color: "#82868C",
    width: "30px",
    height: "30px",
    marginRight: "4px",
  },
  tableCellStyle: {
    fontWeight: "600",
    padding: "0",
    textAlign: "left",
    fontFamily: "Montserrat",
  },
  tableHeadCellStyle: {
    padding: "0px",
  },

  tableCellIconStyle: {
    cursor: "pointer",
    color: "#82868C",
    fontSize: "30px",
    marginRight: "4px",
    transition: "all 0.15s ease-in",
    "&:hover": {
      backgroundColor: "#E6E6E6",
      opacity: 0.9,
      borderRadius: "4px",
    },
  },

  usersModalContainerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  usersModalBoxStyle: {
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    padding: "30px",
    width: "320px",
  },

  usersModalInputStyle: {
    marginBottom: "20px",
    fontFamily: "Montserrat",
    paddingX: "10px",
    paddingY: "5px",
    fontSize: "13px",
    border: "2px solid #E3E3E3",
    borderRadius: "10px",
    fontSize: "500",
    fontWeight: 500,
    color: "#636363",
    "& fieldset": { border: "none" },
  },

  alertBoxStyle: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "500px",
    textAlign: "center",
    zIndex: "9999",
  },
  DCcancelButtonStyle: {
    backgroundColor: "rgb(68, 184, 39, 0.4)",
    color: "#44b827",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgb(68, 184, 39, 0.8)",
      color: "#c4f5b8",
    },
  },
  DCdeleteButtonStyle: {
    backgroundColor: "rgb(224, 40, 40, 0.4)",
    color: "#e02828",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    textTransform: "capitalize",

    "&:hover": {
      backgroundColor: "rgb(224, 40, 40, 0.8)",
      color: "#f5c1c1",
    },
  },
};
