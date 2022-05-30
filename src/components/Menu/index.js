import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from '@mui/system';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import React, { useEffect } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import DropBox from './DropBox';
import { Link, useNavigate } from "react-router-dom";
import Web3 from 'web3';
import web3Modal from "../../functions/Utility/web3Modal";
import Logo from "../../static/images/LOGO SOLO GIF DARK CLOVER.gif";
import LogOut from "../../static/images/PICTO-DISCONNECT.svg";
import MetaMaskIcon from "../../static/images/metamask.svg";
import WalletIcon from "../../static/images/Picto-wallet.svg";
import { setCoinbaseAddressAction, setNetStatus, setStakeData, setStakeStatus, setUnStakeData, setWalletConnectStatusAction } from "../../store/actions";
import MobileMenu from "./MobileMenu";
import { initRateRewards } from '../../functions/Utility';
import Headimage from '../../../src/static/images/BACKGROUND-DARK-HEADER-CS.jpg';

const Menu = ({ title }) => {
  const NetID = 0x38
  const dispatch = useDispatch();
  const connectStatus = useSelector((state) => state.isWalletConnect);
  const walletAddress = useSelector((state) => state.coinbaseAddress);
  const correctNet = useSelector((state) => state.isCorrectNet);
  const { ethereum } = window
  const isMobile = useMediaQuery('(max-width:1000px)');

  const LogoTitle = styled("span")({
    fontFamily: `Azonix`,
    fontSize: `30px`,
    textTransform: "uppercase",
    letterSpacing: "5px",
    color: `#a6a6a6`
  });

  const ConnectButton = styled('button')({
    fontSize: "20px",
    color: "white",
    cursor: "pointer",
    fontFamily: "Maven Pro",
    textTransform: "uppercase",
  });

  const navigate = useNavigate();

  // Function to Connect Wallet
  const connectWallet = async () => {
    if (ethereum) {
      try {
        //  Web3Modal Connect
        const provider = await web3Modal.connect();
        //  Create Web3 instance
        const web3Object = new Web3(provider)

        const accounts = await web3Object.eth.getAccounts()
        const chainId = await web3Object.eth.net.getId()

        dispatch(setCoinbaseAddressAction(accounts[0]))
        dispatch(setWalletConnectStatusAction(true))
        dispatch(setNetStatus(chainId == NetID))
        provider.on("accountsChanged", (accounts) => {
          dispatch(setCoinbaseAddressAction(accounts[0]))
          dispatch(setStakeData([]))
          dispatch(setUnStakeData([]))
          dispatch(setStakeStatus([]))
          navigate("");
        });

        provider.on("chainChanged", async (chainId) => {
          dispatch(setNetStatus(chainId == NetID))
        });
      } catch (e) {
        console.error(e)
        throw new Error("User denied wallet connection!")
      }
    } else {
      throw new Error("No web3 detected!")
    }
  }

  useEffect(async () => {
    if (web3Modal.cachedProvider && !walletAddress) {
      await connectWallet()
    }
  }, [])

  useEffect(async () => {
    dispatch(setStakeData([]))
    dispatch(setUnStakeData([]))
  }, [walletAddress])

  useEffect(() => {
    if (walletAddress && correctNet) {
      initRateRewards(dispatch);
    }
  }, [correctNet])

  const handleConnection = async () => {
    try {
      if (!connectStatus) {
        await web3Modal.clearCachedProvider()
        await connectWallet()
        alertify.success(String("Wallet Connected Successfully!"))
      } else {
        dispatch(setWalletConnectStatusAction(false))
        dispatch(setCoinbaseAddressAction(""))
        dispatch(setNetStatus(false))
        localStorage.clear()
        alertify.success(String("Wallet Disconnected Successfully!"))
      }
    } catch (e) {
      alertify.error(String(e))
    }
  }


  const switchNetwork = async () => {
    try {
      await window.ethereum
        .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x38" }]
        })
    } catch (e) {
      alertify.error(String(e))
    }
  }

  return (
    <Box>
      {isMobile
        ? <MobileMenu
          connectWallet={connectWallet}
          handleConnection={handleConnection}
          switchNetwork={switchNetwork}
          connectStatus={connectStatus}
          correctNet={correctNet}
          walletAddress={walletAddress} />
        : <Box
          sx={{
            backgroundImage: `url(${Headimage})`
          }}
        >
          <Container maxWidth="100%">
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: "100px",
                paddingX: "40px"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link to="/">
                  <img src={Logo} width={80} height={80} alt="" />
                </Link>
                <Box
                  sx={{
                    paddingLeft: "20px",
                    whiteSpace: "nowrap"
                  }}
                >
                  <Link to="/">
                    <LogoTitle>DARK CLOVER</LogoTitle>
                  </Link>
                </Box>
              </Box>
              <DropBox />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  background: "linear-gradient(to right, red, #831717)",
                  borderRadius: "10px",
                  border: "2px solid red",
                  boxShadow: "0px 0px 30px red",
                  cursor: "pointer",
                  width: "300px",
                  position: "relative",
                  whiteSpace: "nowrap",
                  marginRight: "40px"
                }}
              >
                <Box
                  sx={{
                    marginLeft: "30px",
                    marginright: "0"
                  }}
                >
                  {!connectStatus
                    ? <img src={WalletIcon} width={30} height={25} alt="wallet icon" />
                    : <img src={MetaMaskIcon} width={30} height={25} alt="metamask icon" />
                  }
                </Box>
                <Box>
                  {connectStatus && !correctNet && (
                    <ButtonUnstyled onClick={switchNetwork} component={ConnectButton}>
                      Switch Network
                    </ButtonUnstyled>
                  )
                  }
                  {connectStatus && correctNet && (
                    <ButtonUnstyled component={ConnectButton}>
                      {walletAddress.substr(0, 5) + "........." + walletAddress.substr(-5)}
                    </ButtonUnstyled>
                  )
                  }
                  {
                    !connectStatus && (
                      <ButtonUnstyled onClick={handleConnection} component={ConnectButton}>
                        Connect Wallet
                      </ButtonUnstyled>
                    )
                  }
                </Box>
              </Box>
              {
                  connectStatus && correctNet && (
                    <img src={LogOut} width={30} height={30} alt="" style={{
                      position: "absolute",
                      right: "40px"
                    }} onClick={handleConnection}/>
                  )
              }
            </Box>
          </Container>
        </Box >
      }
    </Box >
  );
};

export default Menu;
