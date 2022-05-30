import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Modal } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import alertify from "alertifyjs";
import { styled } from "@mui/material/styles";
import ProgresModal from "../Modals/ProgresModal";
import WinModal from "../Modals/WinModal";
import WinPoorModal from "../Modals/WinPoorModal";
import Dark from "../../static/images/DARK POTION.jpg";
import Poor from "../../static/images/POOR POTION.jpg";
import Img from "../../static/images/BACKGROUND POP-UP LUCKY DARK.svg";
import CloseIcon from "../../static/images/cancel.png";
import { darkPotionAmount, poorPotionAmount, getMintedTokenURI } from "../../functions/Utility";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "60%",
  height: "70%",
  transform: "translate(-50%, -50%)",
  backgroundImage: `url("${Img}")`,
  backgroundSize: "cover",
  outline: "none",
  overflow: "auto",
  "@media (max-width: 1200px)": {
    width: "50%",
    height: "50%",
  },
  "@media (max-width: 900px)": {
    width: "50%",
    height: "100%",
  },
  "@media (max-width: 600px)": {
    width: "50%",
    height: "90%",
  },
  "@media (max-width: 450px)": {
    width: "50%",
    height: "80%",
  },
  "@media (max-width: 360px)": {
    width: "50%",
    height: "70%",
  },
};

const DigitContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  padding: "0",
});

const SingleDigit = styled("span")({
  display: "flex",
  flex: "0 1 25%",
  fontSize: "26px",
  fontWeight: "600",
  backgroundColor: "#222828",
  border: "1px solid red",
  padding: "1px 5px",
  color: "white",
  textAlign: "center",
  justifyContent: "center",
  width: "100%",
  marginLeft: "5px",
  marginright: "5px",
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
});

function ExchangeModal({ open, onClose }) {
  const [darkAMT, setDarkAMT] = useState([0, 0, 0]);
  const [poorAMT, setPoorAMT] = useState([0, 0, 0]);
  const walletAddress = useSelector((state) => state.coinbaseAddress);
  const [imageURI, setImageURI] = useState();
  const [openProgressModal, setOpen] = useState(false);
  // WinModal Modal Handlers
  const [openWinModal, setopenWinModal] = useState(false);
  const [openWinPoorModal, setopenWinPoorModal] = useState(false);
  const [mintType, setMintType] = useState(0);

  const Button = ({ onClick }) => {
    return (
      <a onClick={onClick}>
        <Box
          sx={{
            width: "50px",
            marginTop: "15px",
            padding: "auto",
            color: "gray",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            filter: 'invert(1)'
          }}
        >
          <img src={CloseIcon} width="20px" heigh="24px" />
        </Box>
      </a>
    );
  };

  const ExchangeBtn = ({ type = "" }) => {
    return (
      <>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        onClick={() => handleExchange(type)}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              background: "linear-gradient(to right, red, #831717)",
              border: "3px solid red",
              boxShadow: "0px 0px 10px red",
              width: "350px",
              paddingY: "10px",
              paddingX: "10px",
              borderRadius: "8px",
              cursor: "pointer",
              "@media (max-width: 540px)": {
                width: "100%",
              },
              "@media (max-width: 1200px)": {
                width: "80%",
                height: "80%",
              },
              "@media (max-width: 900px)": {
                marginBottom: "20px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignSelf: "center",
              }}
            >
              <ButtonText>EXCHANGE</ButtonText>
            </Box>
          </Box>
        </Box>
      </>
    );
  };

  const handleExchange = async (type) => {
    if (walletAddress) {
      setOpen(true);
      let tx;
      try {
        const entropy = Math.floor(Math.random() * 100000000);
        if (type == 0) {
          tx = await window.seeds_controller.mintUsingPotion(entropy, true);
        } else {
          tx = await window.seeds_controller.mintUsingPotion(entropy, false);
        }
        if (tx?.status) {
          updatePotionAmount();
          if (type == 0) {
            const uri = await getMintedTokenURI();
            setImageURI(uri);
            setTimeout(progressCloseModal(true), 2000);
          } else {
            setTimeout(progressCloseModal(false), 2000);
          }
          setMintType(type + 3);
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
  }

  const progressCloseModal = (isDark) => {
    setOpen(false);
    if (isDark) {
      handleClickWinModal();
    } else {
      handleClickWinPoorModal();
    }
    alertify.success(String("Transaction to mint Succeed!"));
  };

  const handleClickWinModal = () => {
    setopenWinModal(true);
  };

  const handleClickWinPoorModal = () => {
    setopenWinPoorModal(true);
  };

  const handleCloseWinModal = () => {
    setopenWinModal(false);
  };

  const handleCloseWinPoorModal = () => {
    setopenWinPoorModal(false);
  };

  const updatePotionAmount = async () => {
    try {
      const darkAmt = await darkPotionAmount(walletAddress);
      const poorAmt = await poorPotionAmount(walletAddress);
      setDarkAMT(darkAmt)
      setPoorAMT(poorAmt)
    } catch (e) {
      setDarkAMT([0, 0, 0])
      setPoorAMT([0, 0, 0])
      // setTimeout(setOpen(false), 1000);
      alertify.error(String(e))
    }
  }

  useEffect(() => {
    if (walletAddress) {
      updatePotionAmount();
    } else {
      setDarkAMT([0, 0, 0])
      setPoorAMT([0, 0, 0])
      alertify.error("Please Connect Wallet")
    }
  }, [walletAddress]);

  return (
    <>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
        onClose={onClose}
      >
        <Box sx={style}>
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={onClose} />
          </Box>
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
          >
            <Grid
              item
              xs={12}
              sm={112}
              md={6}
              lg={4}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
              }}
            >
              <Paper
                sx={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  border: `2px solid red`,
                  margin: "auto",
                  "@media (max-width: 1200px)": {
                    width: "80%",
                    height: "80%",
                  },
                }}
              >
                <div className="card-imgs">
                  <img src={Dark} alt="" />
                </div>
              </Paper>
              <Box
                sx={{
                  paddingBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <DigitContainer>
                  <SingleDigit>{darkAMT[2]}</SingleDigit>
                  <SingleDigit>{darkAMT[1]}</SingleDigit>
                  <SingleDigit>{darkAMT[0]}</SingleDigit>
                </DigitContainer>
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
                DARK POTION
              </Box>
              <ExchangeBtn type={0} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={112}
              md={6}
              lg={4}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
              }}
            >
              <Paper
                sx={{
                  background: "transparent",
                  border: `2px solid red`,
                  margin: "auto",
                  "@media (max-width: 1200px)": {
                    width: "80%",
                    height: "80%",
                  },
                }}
              >
                <div className="card-imgs">
                  <img src={Poor} alt="" />
                </div>
              </Paper>
              <Box
                sx={{
                  paddingBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <DigitContainer>
                  <SingleDigit>{poorAMT[2]}</SingleDigit>
                  <SingleDigit>{poorAMT[1]}</SingleDigit>
                  <SingleDigit>{poorAMT[0]}</SingleDigit>
                </DigitContainer>
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
                POOR POTION
              </Box>
              <ExchangeBtn type={1} />
            </Grid>
          </Grid>
        </Box>

      </Modal>
      <ProgresModal
        openProgressModal={openProgressModal}
        progressCloseModal={progressCloseModal}
        title="Mint In Progress..."
      />
      <WinModal
        openWinModal={openWinModal}
        handleCloseWinModal={handleCloseWinModal}
        image={imageURI}
        type={mintType}
      />
      <WinPoorModal
        openWinModal={openWinPoorModal}
        handleCloseWinModal={handleCloseWinPoorModal}
      />
    </>
  );
}

export default ExchangeModal;
