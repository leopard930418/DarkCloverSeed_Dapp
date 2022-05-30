import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Social from "../Social";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Welcome />
        <Social />
      </Container>
      <Box
        sx={{
          paddingTop: "2rem"
        }}
      >
      </Box>
    </Box>
  );
};

export default Home;
