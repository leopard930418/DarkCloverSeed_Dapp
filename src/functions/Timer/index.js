import alertify from 'alertifyjs';
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPassedTime } from "../../functions/Utility";
import WateringTimer from "./WateringTimer";

function Timer() {
  const days2 = 48 * 3600;
  const expiryTimestamp = useSelector(state => state.TIERM || new Date());
  const walletAddress = useSelector(state => state.coinbaseAddress)
  useEffect(() => {
    async function initTimer() {
      if(!expiryTimestamp) return;
      expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + days2);
      try {
        let time = await getPassedTime(walletAddress);
        if (time > 0) {
          expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() - time)
        } else if (+time === 0) {
          expiryTimestamp.setSeconds(0)
        }
      } catch (e) {
        console.log(e)
        alertify.error(String(e))
      }
    }
    if (walletAddress) {
      initTimer();
    }
//eslint-disable-next-line
  }, [expiryTimestamp])

  return (
    <WateringTimer expiryTimestamp={expiryTimestamp} />
  );
}

export default Timer;

