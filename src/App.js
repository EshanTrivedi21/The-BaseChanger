import React, { useState } from "react";
import logic from "./logic";
import "./App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Theme } from "./assets/theme";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  const [inputType, setInputType] = useState("");
  const [outputType, setOutputType] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const clearAll = () => {
    setInputType("");
    setOutputType("");
    setInputValue("");
    setOutputValue("");
  };

  return (
    <>
      <Theme>
        <Grid container justifyContent="center">
          <Grid item mobile={12} tablet={8.5} laptop={5}>
            <Box
              sx={{
                width: "100%",
                minHeight: { mobile: "100vh", tablet: "auto", laptop: "auto" },
                backgroundColor: "white",
                my: "50vh",
                p: 7,
                py: { mobile: 10, tablet: 7, laptop: 7 },
                transform: "translateY(-50%)",
                overflow: "hidden",
              }}
            >
              <Typography variant="h4" align="center">
                The BaseChanger.
              </Typography>
              <Grid
                container
                justifyContent="center"
                spacing={2}
                rowGap={3}
                my="50px"
              >
                <Grid item laptop={6} tablet={6} mobile={12}>
                  <FormControl fullWidth>
                    <InputLabel id="inputType-label">From</InputLabel>
                    <Select
                      labelId="inputType-label"
                      id="inputType"
                      value={inputType}
                      label="From"
                      onChange={(e) => {
                        setInputType(e.target.value);
                      }}
                    >
                      <MenuItem value="Decimal">Decimal</MenuItem>
                      <MenuItem value="Binary">Binary</MenuItem>
                      <MenuItem value="Octal">Octal</MenuItem>
                      <MenuItem value="Hexadecimal">Hexadecimal</MenuItem>
                      <MenuItem value="BCD">BCD</MenuItem>
                      <MenuItem value="XS3">XS3</MenuItem>
                      <MenuItem value="Gray">Gray</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item laptop={6} tablet={6} mobile={12}>
                  <FormControl fullWidth>
                    <InputLabel id="outputType-label">To</InputLabel>
                    <Select
                      labelId="outputType-label"
                      id="outputType"
                      value={outputType}
                      label="To"
                      onChange={(e) => {
                        setOutputType(e.target.value);
                      }}
                    >
                      <MenuItem value="Decimal">Decimal</MenuItem>
                      <MenuItem value="Binary">Binary</MenuItem>
                      <MenuItem value="Octal">Octal</MenuItem>
                      <MenuItem value="Hexadecimal">Hexadecimal</MenuItem>
                      <MenuItem value="BCD">BCD</MenuItem>
                      <MenuItem value="XS3">XS3</MenuItem>
                      <MenuItem value="Gray">Gray</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item laptop={6} tablet={6} mobile={12}>
                  <TextField
                    type="number"
                    id="inputValue"
                    label="Input Value"
                    variant="outlined"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item laptop={6} tablet={6} mobile={12}>
                  <TextField
                    id="outputValue"
                    placeholder="Output Value"
                    value={outputValue}
                    variant="outlined"
                    fullWidth
                    disabled
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#001220",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent={{
                  mobile: "space-between",
                  tablet: "flex-end",
                  laptop: "flex-end",
                }}
                alignContent="center"
                columnSpacing={1}
                sx={{ marginTop: "70px" }}
              >
                <Grid item>
                  <Button variant="text" onClick={clearAll}>
                    Reset
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setOutputValue(logic(inputType, outputType, inputValue));
                    }}
                  >
                    Convert
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Theme>
    </>
  );
}

export default App;