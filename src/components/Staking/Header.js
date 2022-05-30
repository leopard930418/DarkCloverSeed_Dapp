import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Box from "@mui/material/Box";
import Tabs from "../Tabs/Tabs";
import Tab from "../Tabs/Tab";
import Stake from "./Stake";
import UnStake from "./UnStake";
import { getStakedNum, getUnStakedNum } from "../../functions/Utility";

const Header = () => {
  const [stakedCnt, setStakedCnt] = useState(0);
  const [unStakedCnt, setUnStakedCnt] = useState(0);
  const [btnState, setBtnState] = useState({});
  const walletAddress = useSelector((state) => state.coinbaseAddress);
  
  const getStakedState = (value = walletAddress) => {
    try {
      getStakedNum(value).then((res) => {
        setStakedCnt(res);
      })
      getUnStakedNum(value).then((res) => {
        setUnStakedCnt(res);
      })
    } catch (e) {
      console.log(String(e))
    }
  }

  const handleClick = (value) => {
    setBtnState((prev = {}) => ({
      ...(prev ?? {}),
      ...value
    }))
  }

  useEffect(() => {
    async function updateTabLabel () {
      getStakedState(walletAddress)
    }
    if (walletAddress) {
      updateTabLabel()
    }
  }, [walletAddress])

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        "@media (max-width: 520px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignSelf: "center",
          maxWidth: "100%"
        }}
      >
        <Tabs onClick={handleClick}>
          <Tab label={`STAKED - ${stakedCnt ?? 0}`} >
            <Stake onClickStakeState={() => getStakedState()} onClick={handleClick} selectAll={btnState?.selectAll ?? false} />
          </Tab>
          <Tab label={`UNSTAKED - ${unStakedCnt ?? 0}`} >
            <UnStake onClickStakeState={() => getStakedState()} onClick={handleClick} stakeNft={btnState?.stakeNft ?? false} />
          </Tab>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Header;
