import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Timer from "../../functions/Timer";
const TabButtons = ({ buttons, changeTab, activeTab, onClick = () => { } }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "10px",
        marginLeft: "70px",
        marginRight: "40px",
        "@media (max-width: 890px)": {
          flexDirection: "column",
          justifyContent: "center",
        },
        "@media (max-width: 400px)": {
          marginLeft: "0",
          marginRight: "0",
        },
      }}
    >
      <MainTitle>MY LAND</MainTitle>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            "@media (max-width: 1170px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              
              paddingLeft: "80px",
              paddingRight: "0px",
              paddingTop: "14px",
              "@media (max-width: 1200px)": {
                maxWidth: "300px",
                marginX: "auto",
                marginBottom: "20px",
                padding: "0"
              },
            }}
          >
            {buttons.map((button, index) => {
              return (
                <button
                  key={index}
                  className={index === activeTab ? "activestaked" : ""}
                  onClick={() => changeTab(index)}
                >
                  {button}
                </button>
              );
            })}
          </Box>
          {/* 
              0: staked
              1: unstaked
          */}
          {activeTab === 1 ? (
            <LandsButton title="STAKE SELECTED NFT" onClick={() => onClick({ stakeNft: true })} />
          ) : (
            <LandsButton title="SELECT ALL LANDS" onClick={() => onClick({ selectAll: true })} />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          "@media (max-width: 890px)": {
            marginTop: "40px",
          },
        }}
      >
        <Timer />
      </Box>
    </Box>
  );
};

export default TabButtons;

const MainTitle = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `800`,
  fontSize: `50px`,
  textTransform: "uppercase",
  color: `red`,
  "@media (max-width: 500px)": {
    fontSize: `24px`,
    paddingBottom: "10px",
  },
});

const LandsButton = ({ title, onClick = () => { } }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        paddingLeft: "0px",
        "@media (max-width: 890px)": {
          marginLeft: "0px",
          maxWidth: "200px",
          marginX: "auto",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          width: "100%",
          height: "50px",
          color: "black",
          backgroundColor: "red",
          border: `3px solid red`,
          boxShadow: `0px 0px 18px red`,
          borderRadius: "6px",
          fontSize: "20px",
          cursor: "pointer",
          padding: "0px 10px",
          textTransform: "uppercase",
          fontWeight: "700",
          fontFamily: `Maven Pro, sans-serif`,
          textDecoration: "none",
          marginTop: "14px",
          "@media (max-width: 890px)": {
            fontSize: "16px",
            padding: "0px 15px",
          },
        }}
      >
        {title}
      </Box>
    </Box>
  );
};
