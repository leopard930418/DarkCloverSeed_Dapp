import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import Farm from "../../static/images/Picto DARK Farm CS.svg";
import Marketplace from "../../static/images/Picto DARK Marketplace.svg";
import SeedDaap from "../../static/images/PICTO DARK SEED$ DAPP.svg";
import affiliate from "../../static/images/CTA DARK AFFILIATE.svg";
import Button from "../Button";

const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `42px`,
  lineHeight: `56px`,
  textAlign: "center",
  textTransform: "uppercase",
  paddingTop: "30px",
  paddingBottom: "20px",
  color: `#FFFFFF`,
  "& > span": {
    color: `red`,
  },
  "@media (max-width: 768px)": {
    fontSize: `24px`,
    lineHeight: `30px`,
  },
});

const TipText = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `24px`,
  lineHeight: `24px`,
  textAlign: "center",
  textTransform: "uppercase",
  paddingTop: "12px",
  "@media (max-width: 360px)": {
    fontSize: "18px",
  },
});
const Image = styled("img")({
  width: "80%",
});

const Welcome = () => {
  return (
    <Box>
      <Title>
        Welcome to <span>CLOVER DSEED$</span>
      </Title>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-15px",
          marginBottom: "15px",
          "@media (max-width: 1200px)": {
            position: "unset",
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginY: "5px"
          }}
        >
          <a href="https://dark-clover.aff.fo/#/" target="_bland" rel="noreferrer">
            <Image src={affiliate} alt=""/>
          </a>
        </Box>
      </Box>
      <Box>
        <Grid container columnSpacing={8} rowSpacing={4}>
          {data.map((item, index) => {
            return (
              <Grid item xs={12} sm={112} md={6} lg={4} key={index}>
                <Paper
                  sx={{
                    height: "100%",
                    background: "transparent",
                    border: `3px solid ${item.color}`,
                    boxShadow: `0px 0px 16px ${item.color}`,
                  }}
                >
                  <div className="box-card">
                    <div className="card-img">
                      <img src={item.picture} alt="" />
                    </div>
                    <div className="card-content">
                      <Button
                        title={item.buttonText}
                        backgroundColor={item.color}
                        url={item.url}
                      />
                      <TipText
                        sx={{
                          color: item.color,
                          padding: "15px 0 13px 0",
                          height: "12px",
                        }}
                      >
                        {item?.title}
                      </TipText>
                    </div>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Link to="/whitepaper">
            <button className="box">WHITEPAPER</button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;

const data = [
  {
    picture: SeedDaap,
    title: "(mint)",
    buttonText: "My NFT",
    url: "/my-nft",
    color: "red",
  },
  {
    picture: Farm,
    title: "(stake & earn)",
    buttonText: "My LAND",
    url: "/my-land",
    color: "gray",
  },
  {
    picture: Marketplace,
    title: "",
    buttonText: "Marketplace",
    url: "/marketplace",
    color: "white",
  },
];


