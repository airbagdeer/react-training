import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
  palette: {  
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
  },

  typography: {
    allVariants: {
      fontFamily: "Jost",
      fontSize: 20,
    },
  },

  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontsize: 14,
          transform: "rotate(-10deg)",
        },
      },
    },
  },
});
