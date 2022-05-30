import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import ProgresModal from "../Modals/ProgresModal";
import WinModal from "../Modals/WinModal";
import DARKFIELD from "../../static/images/DARK CLOVERFIELD.jpg";
import DARKYARD from "../../static/images/DARK CLOVERYARD.jpg";
import DARKPOT from "../../static/images/DARK CLOVERPOT.jpg";
import { getMintedTokenURI } from "../../functions/Utility";
import { setStakeStatus, setUnStakeData } from "../../store/actions";
import Joker from "../../static/images/JOKER DARK.svg";
import Potion from "../../static/images/PICTO POTION.svg";
import ExchangeModal from "../Modals/ExchangModal";

const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `20px`,
  lineHeight: `30px`,
  textAlign: "center",
  textTransform: "uppercase",
  paddingBottom: "10px",
  color: `#FFFFFF`,
  "@media (max-width: 360px)": {
    fontSize: "16px",
  },
});

const useStyles = makeStyles((theme) => ({
  card: {
    "@media (max-width: 650px)": {
      flexBasis: "100%",
      maxWidth: "100%",
    },
  },
  link: {
    backgroundColor: "#272727",
    padding: "4px 10px",
    color: "#FFFFFF",
    fontSize: "18px",
    fontWeight: "600",
    border: (props) => `2px solid ${props.color}`,
    backgroundSize: "cover",
    backgroundRepeat: "round",
    borderRadius: "10px",
    margin: "0 3px",
    cursor: "pointer",
    "@media (max-width: 750px)": {
      fontSize: "12px",
      paddingTop: "6px"
    },
    "@media (max-width: 600px)": {
      fontSize: "16px",
    },
    "@media (max-width: 380px)": {
      fontSize: "12px",
    },
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50px",
    color: (props) => props.color,
    border: (props) => `3px solid ${props.color}`,
    boxShadow: (props) => `0px 0px 0px ${props.color}`,
    borderRadius: "6px",
    fontSize: "22px",
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: `Maven Pro, sans-serif`,
    textDecoration: "none",
    marginBottom: "20px",
    marginTop: "10px",
    "@media (max-width: 360px)": {
      fontSize: "16px",
    },
  },
}));


const Icon = styled("img")({
  width: "35px",
  height: "35px",
  "@media (max-width: 360px)": {
    width: "20px",
    height: "20px",
  },
  "@media (max-width: 1200px)": {
    width: "30px",
    height: "30px",
  },
  "@media (max-width: 900px)": {
    width: "20px",
    height: "20px",
  },
});

const ButtonText = styled("span")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `500`,
  fontSize: `22px`,
  marginRight: `5px`,
  lineHeight: `28px`,
  textAlign: "center",
  textTransform: "capitalize",
  color: `white`,
  paddingLeft: "10px",
  "@media (max-width: 360px)": {
    fontSize: "16px",
  },
  "@media (max-width: 1200px)": {
    fontSize: "16px",
  },
  "@media (max-width: 900px)": {
    fontSize: "14px",
  },
});

const ExchangeBtn = ({ title, icon, onClick }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "60px",
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "linear-gradient(to right, red, #831717)",
          border: "3px solid red",
          boxShadow: "0px 0px 10px red",
          width: "350px",
          paddingY: "5px",
          paddingX: "10px",
          borderRadius: "8px",
          cursor: "pointer",
          "@media (max-width: 540px)": {
            width: "100%",
          },
          "@media (max-width: 1200px)": {
            marginTop: "-20px",
            width: "280px",
            paddingY: "0px",
            paddingX: "0px"
          },
          "@media (max-width: 1000px)": {
            marginTop: "-40px",
            width: "250px",
            paddingY: "0px",
            paddingX: "0px"
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignSelf: "center",
          }}
        >
          <ButtonText>{title}</ButtonText>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignSelf: "center",
          }}
        >
          <Icon src={icon} alt="" />
        </Box>
      </Box>
    </a>
  );
};

const Cards = () => {
  const { seeds_controller } = window;
  const connectStatus = useSelector((state) => state.isWalletConnect);
  // Progress Modal Handlers
  const [openProgressModal, setOpen] = useState(false);
  // WinModal Modal Handlers
  const [openWinModal, setopenWinModal] = useState(false);
  // ExchangeModal Modal Handlers
  const [openExchangeModal, setOpenExchangeModal] = useState(false);

  const [imageURI, setImageURI] = useState("");

  const rewardData = useSelector((state) => state.REWARD_RATES);

  const [landType, setLandType] = useState(0);

  const classes = useStyles();

  const dispatch = useDispatch();

  const data = [
    {
      picture: DARKFIELD,
      title: "DSeed$ daily rewards",
      buttonText: "Mint DARKFIELD",
      price: "100",
      color: "red",
      percentA: `${rewardData.fieldCarbon ? rewardData.fieldCarbon : 0}%`,
      percentB: `${rewardData.fieldPearl ? rewardData.fieldPearl : 0}%`,
      percentC: `${rewardData.fieldRuby ? rewardData.fieldRuby : 0}%`,
      percentD: `url("${Joker}")`,
    },
    {
      picture: DARKYARD,
      title: "DSeed$ daily rewards",
      buttonText: "Mint DARKYARD",
      price: "10",
      color: "gray",
      percentA: `${rewardData.yardCarbon ? rewardData.yardCarbon * 10 : 0}%`,
      percentB: `${rewardData.yardPearl ? rewardData.yardPearl * 10 : 0}%`,
      percentC: `${rewardData.yardRuby ? rewardData.yardRuby * 10 : 0}%`,
      percentD: `url("${Joker}")`,
    }
  ];

  const handleNFTMint = async (type) => {
    if (connectStatus && type) {
      setOpen(true);
      let tx;
      try {
        const entropy = Math.floor(Math.random() * 100000000);
        if (type.includes("DARKFIELD")) {
          tx = await seeds_controller.buyCloverField(entropy);
          setLandType(0);
        } else if (type.includes("DARKYARD")) {
          tx = await seeds_controller.buyCloverYard(entropy);
          setLandType(1);
        } 
        if (tx?.status) {
          const uri = await getMintedTokenURI();
          dispatch(setUnStakeData([]));
          dispatch(setStakeStatus([]));
          setImageURI(uri);
          setTimeout(progressCloseModal, 2000);
        } else {
          setTimeout(setOpen(false), 1000);
          alertify.error(String("User denied transaction signature.!"));
        }
      } catch (e) {
        setTimeout(setOpen(false), 1000);
        alertify.error(String(e));
      }
    } else {
      alertify.error(
        String("You need to connect your wallet before you try to mint!")
      );
    }
  };

  const progressCloseModal = () => {
    setOpen(false);
    handleClickWinModal();
    alertify.success(String("Transaction to mint Succeed!"));
  };

  const handleClickWinModal = () => {
    setopenWinModal(true);
  };

  const handleCloseWinModal = () => {
    setopenWinModal(false);
  };

  const PercentageButton = ({ color, percent, buttonText, background }) => {
    const classes = useStyles({ color, background });
    return (
      <a
        style={{ padding: `${Boolean(background) ? "2px 8px 0px" : ""}` }}
        className={classes.link}
      >
        {Boolean(background) && (
          <img src={Joker} width={29} height={25} alt="" />
        )}
        {percent}
      </a>
    );
  };

  const Button = ({ color, title }) => {
    const classes = useStyles({ color });
    return (
      <a
        onClick={(e) => handleNFTMint(e.target.text)}
        className={classes.button}
        style={{
          border: `3px solid ${color}`,
          boxShadow: `0px 0px 40px ${color}`,
        }}
      >
        {title}
      </a>
    );
  };

  return (
    <Box
      sx={{
        paddingTop: "30px",
        marginBottom: "10px",
      }}
    >
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {data.map((item, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={index}
              justifyContent="center"
              className={classes.card}
            >
              <Box
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: "8px",
                  border: `3px solid ${item.color}`,
                  boxShadow: `0px 0px 16px ${item.color}`,
                  paddingX: "20px",
                  paddingTop: "30px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "160px",
                    height: "165px",
                    marginX: "auto",
                    marginBottom: "10px",
                    alignItems: "flex-start",
                    "@media (max-width: 360px)": {
                      width: "100px",
                      height: "100px",
                    },
                  }}
                >
                  <img
                    src={item.picture}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <Box>
                  <Title>{item.title} </Title>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <PercentageButton
                    buttonText={item.buttonText}
                    color={item.color}
                    percent={item.percentA}
                  />
                  <PercentageButton
                    buttonText={item.buttonText}
                    color={item.color}
                    percent={item.percentB}
                  />
                  <PercentageButton
                    buttonText={item.buttonText}
                    color={item.color}
                    percent={item.percentC}
                  />
                  <PercentageButton
                    buttonText={item.buttonText}
                    color={item.color}
                    background={item.percentD}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button title={item.buttonText} color={item.color} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: `Maven Pro, sans-serif`,
                    fontStyle: `normal`,
                    fontWeight: `700`,
                    fontSize: `20px`,
                    lineHeight: `24px`,
                    textAlign: "center",
                    textTransform: "uppercase",
                    paddingY: "5px",
                    color: `#FFFFFF`,
                    marginY: "5px",
                    "@media (max-width: 360px)": {
                      fontSize: "16px",
                    },
                  }}
                >
                  {item.price} DSEED$
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <ProgresModal
        openProgressModal={openProgressModal}
        progressCloseModal={progressCloseModal}
        title="Mint In Progress..."
      />
      <WinModal
        openWinModal={openWinModal}
        handleCloseWinModal={handleCloseWinModal}
        image={imageURI}
        type={landType}
      />
      <ExchangeBtn title="EXCHANGE YOUR POTION" icon={Potion} onClick={() => setOpenExchangeModal(true)} />
      <ExchangeModal
        open={openExchangeModal}
        onClose={() => setOpenExchangeModal(false)}
      />
    </Box>
  );
};

export default Cards;

