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
                display:"flex",
                gap:"8px",
                paddingInline:"24px",
                borderRadius: 4,
                boxShadow:"none",
                height:"40px",
                transition: "all 0.15s ease-in",
                '&:hover': {
                    backgroundColor: '#2940D3',
                    opacity: 0.9,
                    boxShadow:"none",
                },
            },
        },
    },
    MuiTab: {
        styleOverrides: {
            root: {
                fontFamily: 'Montserrat',
                textTransform: "none",
                fontWeight: 600,
                fontSize: "13px",
                lineHeight: 1.5,
                paddingBottom:"22.5px"
            },
        },
    },
    MuiTextField: {
        styleOverrides: {
            root: {
                height:"30px"
            },
        },
    },
    
    MuiTableRow:{
        styleOverrides: {
            root: {
                boxSizing: 'border-box',
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
                textAlign:"left",
            },
        },
    },

    MuiTablePagination: {
        display: "flex",
        alignItems: "center",
        styleOverrides: {
            toolbar: {
                padding: '0'
            },
            displayedRows: {
                display: "none",
            },
            spacer: {
                display: "none",
            },
        },
    },

    MuiPaginationItem: {
        styleOverrides: {
            icon: {
                fontSize: 24,
                color: "#82868C"
            },
            page: {
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "Montserrat",
                borderRadius: 8,
                color: "#E3E6EB",
                '&.Mui-selected': {
                    color: "#fff",
                    backgroundColor: "#2940D3",
                },
                '&.Mui-selected:hover': {
                    backgroundColor: "#2940D3",
                },
                '&:hover': {
                    color: "#fff",
                    backgroundColor: "#E3E6EB",
                },
            },
        },
    },


  },
  
});
