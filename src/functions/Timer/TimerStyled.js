import React from "react";

import { styled } from "@mui/material/styles";
import Digit from "./Digit";

const TimerContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  marginBottom: "30px",
});

const SepartorContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0px 5px 24px 5px",
    alignSelf:"flex-end",

  });
  const Separtor = styled("div")({
    display: "inline-block",
    width: "6px",
    height: "6px",
    backgroundColor: "#FFFFFF",
    borderRadius:"6px",
    margin: "5px 0px",

  });



export default function TimerStyled({ seconds, minutes, hours }) {
  return (
    <TimerContainer>
      <Digit value={hours} title="HOURS" addSeparator />
      <SepartorContainer>
        <Separtor />
        <Separtor />
      </SepartorContainer>
      <Digit value={minutes} title="MINUTES" addSeparator />
      <SepartorContainer>
        <Separtor />
        <Separtor />
      </SepartorContainer>
      <Digit value={seconds} title="SECONDS" />
    </TimerContainer>
  );
}
