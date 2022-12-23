import "./App.css";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
      <Box
        justify="center"
        sx={{
          width: "30vw",
          height: "30vw",
          backgroundColor: "white",
          padding: { lg: 0, md: 2, sm: 0 },
          m: "auto",
          my: "50vh",
          transform: "translateY(-50%)",
          overflow: "hidden",
        }}
      >
      </Box>
    </>
  );
}

export default App;
