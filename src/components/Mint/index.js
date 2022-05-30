import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "./Header";
import Cards from "./Cards";
const Mint = () => {
  
  return (
    <Box>
      <Container maxWidth="xl">
        <Header />
        <Cards />
      </Container>
    </Box>
  );
};

export default Mint;
