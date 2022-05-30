import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import TimerStyled from "./TimerStyled";

function WateringTimer({ expiryTimestamp = null }) {
  const isStop = !expiryTimestamp || expiryTimestamp.getSeconds() === 0

  const { seconds, minutes, hours, days, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  useEffect(() => {
    restart(expiryTimestamp);
  }, [expiryTimestamp]);

  
  return (
    <div>
      <Box>
        <Title>BLEEDING TIMER LIMIT</Title>
        <TimerStyled
          seconds={isStop ? 0 : (seconds)}
          minutes={isStop ? 0 : (minutes)}
          hours={isStop ? 48 : (hours + days * 24)}
        />
      </Box>
    </div>
  );
}

export default WateringTimer;

const Title = styled("h3")({
  fontSize: "12px",
  fontWeight: "700",
  color: "red",
  textAlign: "center",
  paddingBottom: "4px"
});
