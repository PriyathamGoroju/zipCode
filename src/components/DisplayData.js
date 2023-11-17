import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DisplayData = ({ postalCode, selectedCountry }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.zippopotam.us/${selectedCountry.toLowerCase()}/${postalCode}`
        );
        if (!response.ok) {
          throw new Error("Error fetching data from the API");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        toast.error("Invalid Postal code. Try again!",{
            position: "top-right",
          });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postalCode, selectedCountry]);

  return (
    <div>
      {loading && <CircularProgress />}
      {!loading && data && (
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            marginTop: "20px",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(205, 205, 215, 0.2)",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Data for {data.country}, {data["post code"]}
          </Typography>
          <TableContainer>
            <Table
              style={{
                backgroundColor: "transparent",
                backdropFilter: "blur(5px)",
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Place</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Latitude</TableCell>
                  <TableCell>Longitude</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.places.map((place, index) => (
                  <TableRow key={index}>
                    <TableCell>{place["place name"]}</TableCell>
                    <TableCell>{place.state}</TableCell>
                    <TableCell>{place.latitude}</TableCell>
                    <TableCell>{place.longitude}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default DisplayData;
