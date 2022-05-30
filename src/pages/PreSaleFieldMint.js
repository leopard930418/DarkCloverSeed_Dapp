import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import SeedDaap from "../static/images/image-112.jpg";
import ProgresModal from "../components/Modals/ProgresModal";
import WinModal from "../components/Modals/WinModal";
import BigNumber from "bignumber.js";/*  */
import { getMintedTokenURI } from "../functions/Utility";
import { setStakeStatus, setUnStakeData } from "../store/actions";

const PreSaleFieldMint = () => {

  const { seeds_controller } = window
  const connectStatus = useSelector((state) => state.isWalletConnect);
  const coinbase = useSelector((state) => state.coinbaseAddress);
  const rewardData = useSelector((state) => state.REWARD_RATES)
  // Progress Modal Handlers
  const [openProgressModal, setOpen] = useState(false);
  // WinModal Modal Handlers
  const [openWinModal, setopenWinModal] = useState(false);
  const [tokenNum, setTokenNum] = useState(1);
  const [imageURI, setImageURI] = useState("");
  const dispatch = useDispatch()

  const updateTokenNum = (num) => {
    setTokenNum(num)
  }

  const handlePresaleFieldMint = async () => {
    if (connectStatus && coinbase) {
      const isWhitelistedForFieldPresell = await seeds_controller.isWhitelistedForFieldPresell(coinbase)
      if (isWhitelistedForFieldPresell) {
        setOpen(true)
        try {
          let value = new BigNumber(`${tokenNum * 1.5 * 10 ** 18}`);
          const tx = await seeds_controller.buyFieldUsingBNB(value)
          if (tx?.status) {
            const uri = await getMintedTokenURI()
            dispatch(setUnStakeData([]))
            dispatch(setStakeStatus([]))
            setImageURI(uri)
            setTimeout(progressCloseModal, 2000);
          } else {
            setTimeout(setOpen(false), 1000);
            alertify.error(String('User denied transaction signature.!'))
          }
        } catch (e) {
          setTimeout(setOpen(false), 1000);
          alertify.error(String(e))
        }
      } else {
        alertify.error(String('Need to whitelist for presell your address before you try to mint!'))
      }
    } else {
      alertify.error(String('You need to connect your wallet before you try to mint!'))
    }
  };

  const progressCloseModal = () => {
    setOpen(false);
    handleClickWinModal();
    alertify.success(String('Transaction to mint Succeed!'))
  };

  const handleClickWinModal = () => {
    setopenWinModal(true);
  };

  const handleCloseWinModal = () => {
    setopenWinModal(false);
  };

  const PercentageButton = ({ percent }) => {
    return (
      <span
        style={{
          backgroundColor: "#c1d117",
          padding: "4px 10px",
          color: "#FFFFFF",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "5px",
          margin: "0 4px",
          cursor: "pointer"
        }}
      >
        {percent}%
      </span>
    );
  };

  const Button = ({ color, title }) => {
    return (
      <span
        onClick={() => handlePresaleFieldMint()}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "55px",
          color: color,
          border: `3px solid ${color}`,
          boxShadow: `0px 0px 18px ${color}`,
          borderRadius: "6px",
          fontSize: "20px",
          cursor: "pointer",
          textTransform: "uppercase",
          fontWeight: "700",
          fontFamily: `Maven Pro, sans-serif`,
          textDecoration: "none",
        }}
      >
        {title}
      </span>
    );
  };

  return (
    <div>
      <Box
        sx={{
          fontFamily: `Maven Pro, sans-serif`,
          fontStyle: `normal`,
          fontWeight: `700`,
          fontSize: `40px`,
          textAlign: "center",
          textTransform: "uppercase",
          paddingY: "60px",
          color: `#B9D43B`,
        }}
      >
        PRESALE <span style={{ color: "#FFFFFF" }}>MINT</span>
      </Box>
      <Box
        sx={{
          backgroundColor: "transparent",
          borderRadius: "8px",
          border: `3px solid #00a65a`,
          boxShadow: `0px 0px 16px #00a65a`,
          paddingY: "40px",
          paddingX: "20px",
          maxWidth: "380px",
          marginX: "auto",
          marginBottom: "100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "120px",
            height: "120px",
            marginX: "auto",
            marginBottom: "20px",
          }}
        >
          <img src={SeedDaap} alt="" />
        </Box>
        <Box>
          <Title>Seed$ daily rewards </Title>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <PercentageButton percent={`${rewardData.fieldCarbon ? rewardData.fieldCarbon / 100 : 0}`} />
          <PercentageButton percent={`${rewardData.fieldPearl ? rewardData.fieldPearl / 100 : 0}`} />
          <PercentageButton percent={`${rewardData.fieldRuby ? rewardData.fieldRuby / 100 : 0}`} />
          <PercentageButton percent={`${rewardData.fieldDiamond ? rewardData.fieldDiamond / 100 : 0}`} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignSelf: "center",
              marginRight: "10px"
            }}
          >
            {tokenIdBtn.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    fontSize: "20px",
                    color: tokenNum === item.btnId ? "#FFFFFF" : "#6D9D89",
                    fontWeight: "600",
                    paddingY: "12px",
                    paddingX: "14px",
                    marginX: "3px",
                    borderRadius: "4px",
                    backgroundColor: tokenNum === item.btnId ? "#35A760" : "#023B17",
                    cursor: "pointer"
                  }}
                  onClick={() => updateTokenNum(item.btnId)}
                >
                  {item.btnId}
                </Box>
              );
            })}
          </Box>
          <Button title="MINT CLOVERFIELD" color="#00a65a" />
        </Box>
        <Box>
          <Title
            sx={{
              textTransform: "none",
            }}
          >
            Whitelist Offer: {tokenNum * 1.5} BNB / Mint{" "}
          </Title>
        </Box>
      </Box>
      <ProgresModal
        openProgressModal={openProgressModal}
        progressCloseModal={progressCloseModal}
      />
      <WinModal
        openWinModal={openWinModal}
        handleCloseWinModal={handleCloseWinModal}
        title="Mint In Progress..."
        image={imageURI}
        type={0}
      />
      <Box
        sx={{
          paddingTop: "9rem"
        }}
      >
      </Box>
    </div>
  );
};

export default PreSaleFieldMint;

const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `18px`,
  lineHeight: `24px`,
  textAlign: "center",
  textTransform: "uppercase",
  paddingBottom: "10px",
  color: `#FFFFFF`,
});

const tokenIdBtn = [
  {
    btnId: 1,
  },
  {
    btnId: 2,
  },
];
