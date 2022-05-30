import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import WalletIcon from "../../static/images/Picto-wallet.svg";
import MetaMaskIcon from "../../static/images/metamask.svg";
import Logo from "../../static/images/LOGO SOLO GIF DARK CLOVER.gif";
import LogOut from "../../static/images/PICTO-DISCONNECT.svg";

const LogoTitle = styled("span")({
  fontFamily: `Azonix`,
  fontSize: `20px`,
  textTransform: "uppercase",
  color: `white`
});

const ConnectButton = styled('button')`
  font-size: 20px;
  color: white;
  cursor: pointer;
  font-family: Maven Pro;
  text-transform: uppercase;
`;

const pathInfo = {
  MyNFT: [
      {
          title: "MY LAND",
          path: "/my-land"
      },
      {
          title: "MARKETPLACE",
          path: "/marketplace"
      }
  ],
  MyLand: [
      {
          title: "MY NFT",
          path: "/my-nft"
      },
      {
          title: "MARKETPLACE",
          path: "/marketplace"
      }
  ],
  Market: [
      {
          title: "MY NFT",
          path: "/my-nft"
      },
      {
          title: "MY LAND",
          path: "/my-land"
      }
  ]
}


const MobileMenu = (props) => {
  const location = useLocation();
  let locData = []

  if (location.pathname == '/my-nft') {
      locData = pathInfo.MyNFT
  } else if (location.pathname == '/my-land') {
      locData = pathInfo.MyLand
  } else if (location.pathname == '/marketplace') {
      locData = pathInfo.Market
  }

  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        paddingX: "10px",
        width: 310,
        backgroundColor: "#4e1212",
        height: "100%"
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingY: "40px",
        }}
      >
        <Link to="/">
          <img src={Logo} width={40} height={40} alt="" />
        </Link>
        <Box
          sx={{
            paddingLeft: "10px",
          }}
        >
          <Link to="/">
            <LogoTitle>Clover Seed$</LogoTitle>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "block",
          paddingY: "20px",
        }}
        onClick={toggleDrawer(anchor, false)}
      >
        <Link to="/">
          <Box
            sx={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Maven Pro",
              paddingY: "5px",
              textTransform: "uppercase",
              borderRadius: "6px",
              textAlign: "center",
              border: `2px solid red`,
              cursor: "pointer",
            }}
          >
            HOME
          </Box>
        </Link>
      </Box>

      {locData.map((itm, index) => {
        return (
          <Box
          sx={{
            display: "block",
            paddingY: "20px",
          }}
          onClick={toggleDrawer(anchor, false)}
          key={index}
        >
          <Link to={itm.path}>
            <Box
              sx={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Maven Pro",
                paddingY: "5px",
                textTransform: "uppercase",
                borderRadius: "6px",
                textAlign: "center",
                border: `2px solid red`,
                cursor: "pointer",
              }}
            >
              {itm.title}
            </Box>
          </Link>
          </Box>
        )
      })}

      <Box display="flex" alignItems="center">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flex: 1,
            backgroundColor: "#00AF5D",
            borderRadius: "10px",
            border: `2px solid red`,
            background: "linear-gradient(to right, red, #831717)",
            boxShadow: `0px 0px 7px red`,
            cursor: "pointer",
            position: 'relative'
          }}
        >
          <Box
            sx={{
              marginLeft: "30px"
            }}
          >
            {!props.connectStatus
              ? <img src={WalletIcon} width={25} height={25} alt="wallet icon" />
              : <img src={MetaMaskIcon} width={25} height={25} alt="metamask icon" />
            }
          </Box>
          <Box>
            {
              props.connectStatus && !props.correctNet && (
                <ButtonUnstyled onClick={props.switchNetwork} component={ConnectButton}>
                  Switch Network
                </ButtonUnstyled>
              )
            }
            {props.connectStatus && props.correctNet && (
              <ButtonUnstyled component={ConnectButton}>
                {props.walletAddress.substr(0, 5) + "....." + props.walletAddress.substr(-5)}
              </ButtonUnstyled>
            )
            }
            {
              !props.connectStatus && (
                <ButtonUnstyled onClick={props.handleConnection} component={ConnectButton}>
                  Connect Wallet
                </ButtonUnstyled>
              )
            }
          </Box>
        </Box>
        {
          props.connectStatus && props.correctNet && (
            <img src={LogOut} width={30} height={30} alt="" style={{
              marginLeft: 10
            }} onClick={props.handleConnection}/>
          )
        }
      </Box>
    </Box>
  );

  return (
    <div>
      <div>
        <React.Fragment>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              paddingY: "20px",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to="/">
                <img src={Logo} width={40} height={40} alt="" />
              </Link>
              <Box
                sx={{
                  paddingLeft: "10px",
                }}
              >
                <Link to="/">
                  <LogoTitle>Clover Seed$</LogoTitle>
                </Link>
              </Box>
            </Box>
            <Box
              onClick={toggleDrawer("left", true)}
              sx={{
                display: "flex",
                cursor: "pointer",
              }}
            >
              <MenuIcon
                sx={{
                  width: "30px",
                  height: "30px",
                  color: "#FFFFFF",
                }}
              />
            </Box>
          </Box>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    </div>
  );
};

export default MobileMenu;
