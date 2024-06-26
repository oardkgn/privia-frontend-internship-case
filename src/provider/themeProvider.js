import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2940D3",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          fontFamily: "Montserrat",
          gap: "8px",
          paddingInline: "24px",
          borderRadius: 4,
          boxShadow: "none",
          height: "40px",
          transition: "all 0.15s ease-in",
          "&:hover": {
            backgroundColor: "#2940D3",
            opacity: 0.9,
            boxShadow: "none",
          },
        },
      },
    },

    
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "13px",
          lineHeight: 1.5,
          paddingBottom: "22.5px",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          display:"flex",
          gap:"0px"
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          height: "30px",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          padding: "14px",
          borderRadius:"5px",
          boxShadow:"rgba(100, 100, 100, 0.24) 0px 3px 8px!important",
          fontFamily: "Montserrat",
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#F5F6F8",
          fontWeight: 600,
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: "left",
        },
      },
    },


    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          padding: "0px !important",
        },
        displayedRows: {
          display: "none",
        },
        spacer: {
          display: "none",
        },
      },
    },

    MuiToolbar: {
        styleOverrides: {
            root: {
                display: "flex",
                justifyContent: "left",
                marginLeft:"20px",
                "@media (min-width: 850px)": {
                  justifyContent: "center",
                  fontSize:"13px",
                  paddingX:"16px"
                },
            },
        },
    },


    MuiSelect: {
      styleOverrides: {
          root: {
              fontFamily: "Montserrat",
              fontSize: "13px",
              fontWeight: 500,
              height:"45px",
              borderRadius: "8px",
              color:"#636363",
              marginBottom:"20px",
              paddingLeft:"0px !important"
          },
      },
  },
    

    MuiPaginationItem: {
      styleOverrides: {
        icon: {
          fontSize: 24,
          color: "#82868C",
        },
        page: {
          fontSize: 13,
          fontWeight: 600,
          fontFamily: "Montserrat",
          borderRadius: 8,
          color: "#E3E6EB",
          "&.Mui-selected": {
            color: "#fff",
            backgroundColor: "#2940D3",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#2940D3",
          },
          "&:hover": {
            color: "#fff",
            backgroundColor: "#E3E6EB",
          },
        },
      },
    },
  },
});
