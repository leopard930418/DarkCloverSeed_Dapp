import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import pancakeLogo from "../../static/images/CTA PANCAKESWAP DAPP DARK.svg";
import poocoin from "../../static/images/CTA POOCOIN DAPP DARK.svg";
import affiliate from "../../static/images/CTA DARK AFFILIATE.svg";
import { getBalance } from "../../functions/Utility";
import { useSelector } from "react-redux";

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
const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `32px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `red`,
  "@media (max-width: 500px)": {
    fontSize: `20px`,
  },
});

const StatTitle = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `22px`,
  lineHeight: `30px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `red`,
  paddingBottom: "20px",
});

const DigitContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  padding: "0",
});

const SingleDigit = styled("span")({
  display: "flex",
  flex: "0 1 25%",
  fontSize: "20px",
  fontWeight: "600",
  backgroundColor: "#10241B",
  border: "1px solid red",
  padding: "6px 4px",
  color: "white",
  textAlign: "center",
  justifyContent: "center",
  width: "100%",
  marginLeft: "5px",
  marginright: "5px",
});

const Image = styled("img")({
  width: "100%",
});

const Header = () => {
  const [balance, setBalance] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const wallet = useSelector((state) => state.coinbaseAddress)
  const unstake = useSelector((state) => state.UNSTAKE_DATA)

  useEffect(async () => {
    if (wallet) {
      const amt = await getBalance(wallet);
      setBalance(amt);
    } else {
      setBalance([0, 0, 0, 0, 0, 0, 0, 0]);
    }
  }, [wallet, unstake])

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "10px",
          "@media (max-width: 1000px)": {
            flexDirection: "column",
          },
        }}
      >
        <MainTitle>MY NFT</MainTitle>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            "@media (max-width: 1000px)": {
              position: "unset",
              transform: "initial",
            },
          }}
        >
          <Title>BUY DSEED$ ON</Title>
        </Box>
        <Box
          sx={{
            paddingX: "4px",
            maxWidth: "360px",
          }}
        >
          <StatTitle>MY DARK SEED$</StatTitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "10px",
            }}
          >
            <DigitContainer>
              <SingleDigit>{balance[7]}</SingleDigit>
              <SingleDigit>{balance[6]}</SingleDigit>
              <SingleDigit>{balance[5]}</SingleDigit>
              <SingleDigit>{balance[4]}</SingleDigit>
              <SingleDigit>{balance[3]}</SingleDigit>
              <SingleDigit>{balance[2]}</SingleDigit>
              <SingleDigit>{balance[1]}</SingleDigit>
              <SingleDigit>{balance[0]}</SingleDigit>
            </DigitContainer>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          "@media (max-width: 850px)": {
            flexDirection: "column",
            justifyContent: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            "@media (max-width: 850px)": {
              flexDirection: "column",
              width: "100%",
            },
          }}
        >
          <Grid container display="flex" spacing={3} justifyContent="center">
              <Grid item>
                <Button
                  icon={pancakeLogo}
                  link="https://pancakeswap.finance/swap?outputCurrency=0x359a83F4B65f5671e9aE2456FebF11c47ec8B678/"
                />
              </Grid>
              <Grid item>
                <Button
                  icon={poocoin}
                  link="https://poocoin.app/tokens/0x359a83F4B65f5671e9aE2456FebF11c47ec8B678"
                />
              </Grid>
              <Grid item>
                <Button
                  icon={affiliate}
                  link="https://dark-clover.aff.fo/#/"
                />
              </Grid>
            </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

const Button = ({ icon, link }) => {
  return (
    <div style={{width: "200px"}}>
      <a href={link} target="_blank" rel="noreferrer">
          <Image src={icon} alt=""/>
      </a>
    </div>
  );
};
