import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import React from "react";
import ReactPlayer from "react-player";
import AnimLogo from "../../static/images/LOGO SOLO GIF DARK CLOVER.gif";
import Desert from "../../static/images/Picto logo Dessert Finance.svg";
import pancakeLogo from "../../static/images/CTA PANCAKESWAP DAPP DARK.svg";
import poocoin from "../../static/images/CTA POOCOIN DAPP DARK.svg";
import affiliate from "../../static/images/CTA DARK AFFILIATE.svg";
import Size from "../../static/images/DARK SIZES.svg";
import Step1 from "../../static/images/STEP 1.svg";
import Step12 from "../../static/images/STEP 1.2.svg";
import Step2 from "../../static/images/STEP 2.svg";
import Step21 from "../../static/images/STEP 2.1.png";
import Step22 from "../../static/images/STEP 2.2.svg";
import Step23 from "../../static/images/STEP 2.3.svg";
import Nocompound from "../../static/images/DARK NO COMPOUND.png";
import Fullcompound from "../../static/images/DARK FULL COMPOUND.png";
import Godtable from "../../static/images/TABLEAU REWARDS DARK.png";
import Teasing from "../../static/images/Teasing 2 Dark.mp4";
import Faq from "./FAQ";
import Roadmap from "./Roadmap";
import Social from "../Social";
import Img from "react-cool-img";
import { makeStyles } from "@mui/styles";
import DarkLand from "./DarkLand.js";

const useStyles = makeStyles((theme) => ({
  percent: {
    display: "flex",
    marginTop: "40px",
    "@media (max-width: 600px)": {
      marginTop: "0px",
    },
  },
}));

const Icon = styled("img")({
  width: "30px",
  height: "30px",
  "@media (max-width: 360px)": {
    width: "20px",
    height: "20px",
  },
});

const Button = ({ icon, link }) => {
  return (
    <div style={{ width: "200px" }}>
      <a href={link} target="_blank" rel="noreferrer">
        <Image src={icon} alt="" />
      </a>
    </div>
  );
};

const Image = styled("img")({
  width: "100%",
});

const WhitePaper = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container maxWidth="md">
        <Box
          sx={{
            paddingY: "60px",
          }}
        >
          <Title className="gradienttext">ENTER THE DARKNESS</Title>
          <Subtitle>
            WELCOME TO <span style={{ color: "red" }}>DARK CLOVER</span>, A
            ZOMBIE APOCALYPTIC WORLD!
          </Subtitle>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              marginX: "auto",
              width: "160px",
              height: "165px",
            }}
          >
            <AnimLogoImage src={AnimLogo} alt="" />
          </Box>
          <Paragraph
            sx={{
              paddingTop: "30px",
              color: "white",
              fontSize: "24px",
              lineHeight: "32px",
              paddingBottom: "15px",
              textTransform: "none",
            }}
          >
            Dark Clover is a new and{" "}
            <span style={{ color: "red" }}> unique NFT game </span> <br />
            set in an apocalyptic world.
          </Paragraph>
          <Paragraph
            sx={{
              color: "white",
              fontSize: "28px",
              lineHeight: "36px",
              paddingBottom: "15px",
              textTransform: "none",
            }}
          >
            <span style={{ color: "red" }}> Buy DSEED$ </span> and plant them
            into your Dark Land <br />
            to get <span style={{ color: "red" }}> daily rewards.</span>
          </Paragraph>
          <Paragraph
            sx={{
              color: "red",
              fontSize: "18px",
              lineHeight: "36px",
              paddingY: "10px",
              textTransform: "none",
            }}
          >
            BUY DSEED$
          </Paragraph>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              paddingBottom: "45px",
              "@media (max-width: 540px)": {
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
                <Button icon={affiliate} link="https://dark-clover.aff.fo/#/" />
              </Grid>
            </Grid>
          </Box>
          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "24px",
              textTransform: "none",
            }}
          >
            Once upon a time...
          </Title>
          <Paragraph
            sx={{
              color: "white",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "40px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
              "@media (max-width: 768px)": {
                fontSize: "15px",
                lineHeight: "24px",
              },
            }}
          >
            A farmer called Connor discovered that planting Clover SEED$ in the
            Luckyland would guarantee to harvest{" "}
            <span style={{ color: "red" }}>4 leaf clovers</span>! His lucky
            clovers grew so big that he could get{" "}
            <span style={{ color: "red" }}>15% of SEED$ every day</span>; SEED$
            that he could regrow and could make him earn more and more. <br />
            <br />
            It didn't take long before other farmers rushed into this
            one-in-a-lifetime opportunity, and tap into this new found Eldorado.
            They quickly swapped their BNB to SEED$ to acquire Land and start
            growing clovers.
          </Paragraph>

          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "20px",
              textTransform: "none",
            }}
          >
            When the world plunged into terror...
          </Title>
          <Paragraph
            sx={{
              color: "white",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "45px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
              "@media (max-width: 768px)": {
                fontSize: "15px",
                lineHeight: "24px",
              },
            }}
          >
            After a while, too many Clover Farmers came to Luckyland, Connor
            soon became furious. He wanted to stay the luckiest one.
            <br />
            <br />
            In his secret lab, he started experimenting with new formulas...
            Crossing clover species... Crossing clover species with ancient dead
            plants...
            <br />
            <br />
            From there, one DEAD clover grew! A red monster clover. Connor got
            frightened! How could he kill a dead plant!? There was only one
            solution: burn it!
            <br />
            <br />
            Connor set fire to the clover and its ashes quickly spread
            everywhere, contaminating all his fields, yards and pots. The
            plants, his house, the sky and Connor himself became darker. Dead
            but alive... His zombie clovers became much bigger than the standard
            Clovers... and their SEED$ turned into DARK SEED$ (DSEED$)...
            <br />
            <br />
            The virus spread very quickly and contaminated Cloverland and all
            the farmers. Zombies now inhabited Cloverland all thirsting for
            blood and wanting more and more Dark SEED$ to own more and more
            lands.
            <br />
            <br />
            <ReactPlayer 
              url={Teasing}
              className="react-player"
              width="70%"
              height="70%"
              style={{margin: "auto"}}
              playing={false}
              controls={true}
            />
            <br />
            <br />
            These zombies are obsessed by one thing only: accumulate more and
            more DSEED$, so they can acquire more lands.
            <br />
            <br />
            In fact, the more lands they have, the more rewards they receive
            every day and in turn, the more they can buy new lands and extend
            their power. Thanks to these accumulated DSEED$, the zombies can have one
            of two lands sizes:
            <br />
            <br />
            <Img
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
              src={Size}
              alt=""
            />
          </Paragraph>
          <DarkLand />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              paddingBottom: "45px",
              "@media (max-width: 540px)": {
                flexDirection: "column",
                width: "100%",
              },
            }}
          >
            <Paragraph
              sx={{
                color: "red",
                fontSize: "18px",
                lineHeight: "36px",
                paddingBottom: "10px",
                textTransform: "none",
              }}
            >
              BUY DSEED$
            </Paragraph>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                paddingBottom: "45px",
                "@media (max-width: 540px)": {
                  flexDirection: "column",
                  width: "100%",
                },
              }}
            >
              <Grid
                container
                display="flex"
                spacing={3}
                justifyContent="center"
              >
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
          <Title
            className="gradienttext"
            sx={{
              color: "red",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "35px",
              textTransform: "none",
            }}
          >
            How does it work?
          </Title>
          <Paragraph
            sx={{
              color: "white",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "20px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
              "@media (max-width: 768px)": {
                fontSize: "15px",
                lineHeight: "24px",
              },
              "@media (max-width: 680px)": {
                wordBreak: "break-word",
              },
            }}
          >
            <span className="roadmap-title">1- Get DSEED$ Token</span>
            <br />
            DSEED$ Token Contract: 0x359a83F4B65f5671e9aE2456FebF11c47ec8B678
            <br />
            NFT Contract: 0xa754e37f3905f863438baae3E944C8a8FdD69B72
            <br />
            Staking Contract: 0x395D2e1443F6a9f4134777587df6b9d57Ce308A9
            <br />
            Controller Contract: 0x1a8C935320eB4Af2C02D22Bfb6C4Ae3e16C0aDb8
            <br />
            Picker Contract: 0x190D7a3601d7A62179F911d55AF510b99Fb493cF
            <br />
            Potion Contract: 0x63Fb09C914F0CbA624e9a4849090e4D798dE293F
            <br />
            Max Supply: <span style={{ color: "red" }}>1M DSEED$</span>
            <br />
            Price at launch: <span style={{ color: "red" }}>$1</span>
            <br />
            Liquidity Pool at launch:{" "}
            <span style={{ color: "red" }}>30 BNB(LP) + 22.5 BNB </span>
            (used to buy DSEED$ tokens to support the rise of the chart)
            <br />
            <br />
          </Paragraph>
          <span className="roadmap-title" style={{ textAlign: "center" }}>
            {" "}
            STEP 1 : BUY DARK SEED${" "}
          </span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "auto",
              marginY: "30px",
            }}
          >
            <Img style={{ width: "50%" }} src={Step1} alt="" />
            <Img style={{ width: "50%" }} src={Step12} alt="" />
          </Box>
          <span className="roadmap-title" style={{ textAlign: "center" }}>
            {" "}
            STEP 2 : MINT YOUR DARK LAND{" "}
          </span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "40px",
              marginBottom: "50px",
              "@media (max-width: 920px)": {
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                width: "45%",
                "@media (max-width: 920px)": {
                  margin: "auto",
                  width: "70%",
                },
              }}
            >
              <Img style={{ width: "100%" }} src={Step2} alt="" />
              <span
                style={{
                  textAlign: "center",
                  fontSize: "15px",
                  color: "#bbbbbb",
                  lineHeight: "20px",
                  fontWeight: "500",
                  display: "block",
                  marginTop: "20px",
                }}
              >
                Go on our dApp: link on MY LAND
              </span>
            </Box>
            <Box
              sx={{
                width: "45%",
                margin: "auto",
                "@media (max-width: 920px)": {
                  margin: "auto",
                  width: "70%",
                },
              }}
            >
              <Img style={{ width: "100%" }} src={Step21} alt="" />
              <span
                style={{
                  textAlign: "center",
                  fontSize: "15px",
                  color: "#bbbbbb",
                  lineHeight: "20px",
                  fontWeight: "500",
                  display: "block",
                  marginTop: "20px",
                }}
              >
                Select the land you want to mint
              </span>
            </Box>
          </Box>
          <Paragraph
            sx={{
              textAlign: "center",
              color: "#bbbbbb",
              fontSize: "24px",
              lineHeight: "28px",
              fontWeight: "700",
              display: "block",
              marginY: "55px",
            }}
          >
            And then 2 strategies:
          </Paragraph>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              "@media (max-width: 920px)": {
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                width: "45%",
                "@media (max-width: 920px)": {
                  margin: "auto",
                  width: "70%",
                },
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  marginBottom: "20px",
                  color: "red",
                  lineHeight: "20px",
                  fontWeight: "500",
                  display: "block",
                }}
              >
                Buy & Stake your land
              </span>
              <Img style={{ width: "100%" }} src={Step22} alt="" />
              <br />
              <span
                style={{
                  textAlign: "left",
                  paddingLeft: "30px",
                  fontSize: "17px",
                  color: "#bbbbbb",
                  lineHeight: "25px",
                  fontWeight: "500",
                  display: "block",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              >
                - Stake your Land NFT <br />
                - Bleed and feed them to earn daily rewards
                <br />
                - Take advantage of the compound interests & buy new lands to
                generate more and more daily profits! <br />
              </span>
            </Box>
            <Box
              sx={{
                width: "45%",
                marginLeft: "auto",
                "@media (max-width: 920px)": {
                  margin: "auto",
                  width: "70%",
                },
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  marginBottom: "20px",
                  color: "red",
                  lineHeight: "20px",
                  fontWeight: "500",
                  display: "block",
                  marginLeft: "auto",
                }}
              >
                Mint your NFT for the Marketplace
              </span>
              <Img style={{ width: "100%" }} src={Step23} alt="" />
              <br />
              <span
                style={{
                  textAlign: "left",
                  paddingLeft: "30px",
                  fontSize: "17px",
                  color: "#bbbbbb",
                  lineHeight: "25px",
                  fontWeight: "500",
                  display: "block",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              >
                - Mint your Land NFT <br />
                - Put it on sale on marketplaces (TofuNFT
                <br /> and NFTrade) <br />
                - Enjoy quick profits <br />
                <br />
                <br />
              </span>
            </Box>
          </Box>
          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              marginBottom: "40px",
              textTransform: "none",
            }}
          >
            The power of compound interest in Darkland
          </Title>
          <Paragraph
            sx={{
              color: "white",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "40px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
              "@media (max-width: 768px)": {
                fontSize: "15px",
                lineHeight: "24px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  width: "45%",
                }}
              >
                <Img style={{ width: "100%" }} src={Nocompound} alt="" />
                <br />
              </Box>
              <Box
                sx={{
                  width: "45%",
                  margin: "auto",
                }}
              >
                <Img style={{ width: "95%" }} src={Fullcompound} alt="" />
                <br />
              </Box>
            </Box>
          </Paragraph>
          <Paragraph
            sx={{
              color: "white",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "20px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
              "@media (max-width: 768px)": {
                fontSize: "15px",
                lineHeight: "24px",
              },
            }}
          >
            Turn 20 DSEED$ / day into 6,400 DSEED$ / day rewards in 1 month!
            Rather than reading a lengthy paragraph, imagine it with the help of
            some graphics.
            <br />
            <br />
            <span style={{ color: "red" }}>
              Hypothesis 1:
              <br />
              <br />
              NO COMPOUNDING OVER A PERIOD OF 1 MONTH
            </span>
            <br />
            <br />- You buy 1 DARKFIELD NFT. <br />- A DARKFIELD NFT costs 100
            DSEED$. <br />- A DARKFIELD NFT rewards up to 20 DSEED$ per
            day. <br />- You don't compound your dark DSEED$ Rewards.
            <br />
            <br />
            <span style={{ color: "red" }}>
              Hypothesis 2:
              <br />
              <br />
              COMPOUNDING YOUR DSEED$ REWARDS OVER A PERIOD OF 1 MONTH
            </span>
            <br />
            <br />- You buy 1 DARKFIELD NFT. <br />- A DARKFIELD NFT costs 100
            DSEED$. <br />- A DARKFIELD rewards up to 20 DSEED$ per day.{" "}
            <br />- It takes 5 days to buy your first new DARKFIELD NFT.
            <br />- Then you buy 1 new DARKFIELD NFT every 5 days over 1 month.
            <br />
            <br />
            This chart clearly shows the power of compounding.
          </Paragraph>
          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              marginY: "24px",
              textTransform: "none",
            }}
          >
            Affiliate VIP Program
          </Title>
          <Paragraph
            sx={{
              color: "white",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "60px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
              "@media (max-width: 768px)": {
                fontSize: "15px",
                lineHeight: "24px",
              },
            }}
          >
            <span
              style={{
                textAlign: "center",
                display: "block",
              }}
            >
              invite your friends and be rewarded!
            </span>
            <br />
            <br />
            During phase 1, many of you asked us for an affiliate program. Your
            wish is our command! Welcome Zombie friends!
            <br />
            After all, who can be our best ambassador? Who has everything to
            gain by making DARK Clover Known? You!
            <br />
            <br />
            You can invite and sponsor friends and be rewarded:
            <br />
            <br />
            <span
              style={{
                color: "red",
              }}
            >
              -For the Referrers:
            </span>
            <br />
            <br />
            Invite people to buy DSEED$ with your link and{" "}
            <span style={{ color: "red" }}>
              {" "}
              earn on all your referees' purchases!{" "}
            </span>{" "}
            <br />
            The more you invite, the greater your rewards!
            <br />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                marginTop: "30px"
              }}
            >
              <img src={Godtable} width="80%" />
            </Box>
            <br />
            <span style={{ color: "red" }}>Additionally:</span> earn 10% rewards
            on all affiliates of your affiliates, up to 15 levels!
            <br />
            <br />
            <span style={{ color: "red" }}>- For the Sponsored:</span>
            <br />
            <br />
            Buy DSEED$ with your Referral link and save 15% on buy fees!
            <br />
            <br />
            Now you know what you have to do to make your investment even more
            profitable!
            <br />
          </Paragraph>
          <Paragraph
            sx={{
              color: "red",
              fontSize: "18px",
              lineHeight: "36px",
              marginBottom: "50px",
              textTransform: "none",
            }}
          >
            BUY DSEED$
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                "@media (max-width: 540px)": {
                  flexDirection: "column",
                  width: "100%",
                },
                marginTop: "10px",
              }}
            >
              <Grid
                container
                display="flex"
                spacing={3}
                justifyContent="center"
              >
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
          </Paragraph>
          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "25px",
              textTransform: "none",
            }}
          >
            Security is Everything
          </Title>
          <Paragraph
            sx={{
              color: "#b9e7d6",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "25px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            The contracts will be audited by
          </Paragraph>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "250px",
              height: "250px",
              paddingBottom: "65px",
              marginX: "auto",
              alignItems: "flex-start",
            }}
          >
            <img
              src={Desert}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Roadmap />
          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "20px",
              textTransform: "none",
            }}
          >
            Contribute and give feedback
          </Title>
          <Paragraph
            sx={{
              color: "white",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "55px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
              "@media (max-width: 768px)": {
                fontSize: "15px",
                lineHeight: "24px",
              },
            }}
          >
            Clover SEED$ is constantly looking for feedback to improve our
            concept and user experience. Users who would like to contribute are
            welcome to contact us on{" "}
            <span style={{ color: "red" }}>support@clover-seeds.financial</span>
            .
          </Paragraph>
          <div>
            <Faq />
          </div>
          <Paragraph
            sx={{
              color: "red",
              fontSize: "18px",
              lineHeight: "36px",
              paddingBottom: "10px",
              textTransform: "none",
            }}
          >
            BUY DSEED$ and get Lucky!
          </Paragraph>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              paddingBottom: "45px",
              "@media (max-width: 540px)": {
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
                <Button icon={affiliate} link="https://dark-clover.aff.fo/#/" />
              </Grid>
            </Grid>
          </Box>
          <Social />
        </Box>
        <Paragraph
          sx={{
            color: "#ffffff",
            fontSize: "18px",
            lineHeight: "36px",
            textTransform: "none",
          }}
        >
          support@clover-seeds.financial
        </Paragraph>
      </Container>
      <Box
        sx={{
          paddingTop: "2rem",
        }}
      ></Box>
    </Box>
  );
};

export default WhitePaper;

const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `56px`,
  lineHeight: `80px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#FFFFFF`,
  "@media (max-width: 768px)": {
    fontSize: `42px`,
    lineHeight: `50px`,
  },
});
const Subtitle = styled("h2")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `24px`,
  lineHeight: `56px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `white`,
  marginBottom: "20px",
  "@media (max-width: 768px)": {
    fontSize: `30px`,
    lineHeight: `38px`,
  },
});
const AnimLogoImage = styled("img")({
  weight: "100%",
  height: "100%",
});
const Paragraph = styled("h1")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `28px`,
  lineHeight: `56px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#b9e7d6`,
  "@media (max-width: 768px)": {
    fontSize: `22px`,
    lineHeight: `30px`,
  },
});
