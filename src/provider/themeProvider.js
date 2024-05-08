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
  },
  
});