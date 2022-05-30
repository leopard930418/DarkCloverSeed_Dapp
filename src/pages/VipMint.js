import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import SeedDaap from "../static/images/image-112.jpg";
import ProgresModal from "../components/Modals/ProgresModal";
import WinModal from "../components/Modals/WinModal";
import { setStakeStatus, setUnStakeData } from "../store/actions";
import { getMintedTokenURI } from "../functions/Utility";

const VipMint = () => {
  const {seeds_controller} = window
  const connectStatus = useSelector((state) => state.isWalletConnect);
  const coinbase = useSelector((state) => state.coinbaseAddress);
  const rewardData = useSelector((state) => state.REWARD_RATES)
  const [imageURI, setImageURI] = useState("");
  
  // Progress Modal Handlers
  const [openProgressModal, setOpen] = useState(false);
  // WinModal Modal Handlers
  const [openWinModal, setopenWinModal] = useState(false);
  const [tokenNum, setTokenNum] = useState("1");
  const dispatch = useDispatch()

  const updateTokenNum = (e) => {
    setTokenNum(e.target.value)
  }

  const handleVIPMint = async () => {
    if (connectStatus && coinbase) {
      const isVIPAddress = await seeds_controller.isVIPAddress(coinbase)
      if (isVIPAddress) {
        setOpen(true)
        try {
          const allowNum = await seeds_controller.availableTokenCanBuy(coinbase);
          if (parseInt(tokenNum) <= allowNum) {
            const tx = await seeds_controller.buyCloverFields(parseInt(tokenNum))
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
          } else {
            alertify.error(String('Exceed the allownce number!'))
          }
        } catch (e) {
          setTimeout(setOpen(false), 1000);
          alertify.error(String(e))
        }
      } else {
        alertify.error(String('Need to set up your vip address before you try to mint!'))
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
      <label
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
      </label>
    );
  };
  
  const Button = ({ color, title }) => {
    return (
      <label
        onClick={() => handleVIPMint()}
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
      </label>
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
        VIP <span style={{ color: "#FFFFFF" }}>MINT</span>
      </Box>
      <Box
        sx={{
          backgroundColor: "transparent",
          borderRadius: "8px",
          border: `3px solid #c1d117`,
          boxShadow: `0px 0px 16px #c1d117`,
          paddingY: "40px",
          paddingX: "20px",
          maxWidth: "380px",
          marginX: "auto",
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
          <PercentageButton percent={`${rewardData.fieldCarbon ? rewardData.fieldCarbon / 100 : 0}`}/>
          <PercentageButton percent={`${rewardData.fieldPearl ? rewardData.fieldPearl / 100 : 0}`} />
          <PercentageButton percent={`${rewardData.fieldRuby ? rewardData.fieldRuby / 100 : 0}`} />
          <PercentageButton percent={`${rewardData.fieldDiamond ? rewardData.fieldDiamond / 100 : 0}`} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignSelf: "center"
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignSelf: "center",
              marginRight:"10px"
            }}
          >
            <input type="number" value={tokenNum} onChange={updateTokenNum} className="input-number" />
          </Box>
          <Button title="VIP MINT" color="#c1d117" />
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
          paddingTop: "18rem"
        }}
      >
      </Box>
    </div>
  );
};

export default VipMint;

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

