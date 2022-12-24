import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    primary: {
      main: "#001220",
      contrastText: "#A7233A",
    },
    secondary: {
      main: "#A7233A",
      contrastText: "#001220",
    },
  },
  typography: {
    allVariants: {
      color: "#001220",
    },
    h4: {
      fontSize: "2rem",
    }
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#001220",
          borderColor: "#001220"
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#001220", 
          backgroundColor: "#A7233A10",
          padding: "5px 30px",
          fontSize: "1.05rem",
        }
      }
    }
  }
});

export function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
