import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import countries from "../shared/countryCodes";

const CountryMenuComponent = ({ postalCode, setPostalCode, selectedCountry, setSelectedCountry, handleChange }) => {
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(205, 205, 215, 0.2)',
        borderRadius: '6px',
        padding: '20px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <FormControl fullWidth sx={{ gap: 2 }} id="formControl">
        <InputLabel htmlFor="selectCountry">
          Select a Country:
        </InputLabel>
        <Select
          label="Select a Country"
          id="selectCountry"
          value={selectedCountry}
          onChange={handleCountryChange}
          sx={{ backgroundColor: 'transparent' }}
        >
          {countries.map((country) => (
            <MenuItem key={country.code} value={country.code}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="Postal Code"
          id="postalCode"
          value={postalCode}
          onChange={(e) => {
            setPostalCode(e.target.value);
          }}
          sx={{ backgroundColor: 'transparent', color: '#fff' }}
        />
        <Button onClick={handleChange} variant="contained" sx={{ padding: '10px' }} id="button">
          Submit
        </Button>
      </FormControl>
    </div>
  );
};

export default CountryMenuComponent;
