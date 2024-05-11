export const styles = {
  mainContainerStyle: {
    backgroundColor: "white",
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
  },
  headerLeftInnerboxStyle: {
    display: "flex",
    alignItems: "center",
    gap: 1,
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
    width: "100%",
    height: "40px",
    display: "flex",
    justifyContent: "center",
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
    padding:"0px"
  },

  tableCellIconStyle: {
    cursor: "pointer",
    color: "#82868C",
    fontSize: "30px",
    marginRight:"4px",
    transition: "all 0.15s ease-in",
    "&:hover": {
      backgroundColor: "#E6E6E6",
      opacity: 0.9,
      borderRadius:"4px",
      padding:"1px"
    },
  },
};
