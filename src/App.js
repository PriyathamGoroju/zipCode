import React, { useState } from "react";
import CountryMenuComponent from "./components/PostalInput";
import { Box } from "@mui/material";
import DisplayData from "./components/DisplayData";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [postalCode, setPostalCode] = useState(400093);
  const [submitCode, setSubmitCode] = useState(400093);

  const handleChange = () => {
    setSubmitCode(postalCode)
  }
  return (
    <Box sx={{ margin: "5%", paddingBottom:'20px', display:'flex', flexDirection:'column', justifyContent:'center', minHeight:'100vh', overflowY:'auto' }}>
      <Box sx={{maxWidth:'600px', alignSelf:"center", paddingY:'20px'}}>
      <CountryMenuComponent
        selectedCountry={selectedCountry}
        setPostalCode={setPostalCode}
        postalCode={postalCode}
        setSelectedCountry={setSelectedCountry}
        handleChange={handleChange}
      />
      </Box>
      <Box>
        <DisplayData postalCode={submitCode} selectedCountry={selectedCountry} />
      </Box>
    </Box>
  );
}

export default App;
