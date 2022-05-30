import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CloverLogo from "../../static/images/CTA CLOVER (FOOTER DAPP).svg";
import DarkLogo from "../../static/images/CTA DARK (FOOTER DAPP).svg";
import Grid from "@mui/material/Grid";

const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `500`,
  fontSize: `16px`,
  lineHeight: `19px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#a6a6a6`,
  display: "block",
});
const EnsureText = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `16px`,
  lineHeight: `22px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#a6a6a6`,
  "& > a": {
    color: `red`,
    paddingLeft: "5px",
  },
  "@media (max-width: 1024px)": {
    fontSize: `10px`,
  },
});
const Image = styled("img")({
  width: "100%",
});
const Footer = () => {
  return (
    <Container maxWidth="100%">
      <Grid container rowSpacing={2} align="center" justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "@media (max-width: 900px)": {
                justifyContent: 'center',
                marginTop: "30px"
              },
            }}
          >
            <div style={{ width: "160px", paddingLeft: "12px"}}>
              <Link to="/">
                <Image src={DarkLogo} alt="" />
              </Link>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Box>
            <Title>
              ©2022 Copyright DARK.CLOVER-SEEDS.COM
            </Title>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Box>
            <Box
              sx={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                paddingY: "10px",
                borderRadius: "5px",
              }}
            >
              <EnsureText>
                Ensure you are at{" "}
                <a href="https://dark.clover-seeds.com">
                  https://dark.clover-seeds.com
                </a>
              </EnsureText>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
