import React from "react";
import Box from "@mui/material/Box";
import Telegram from "../../static/images/Picto DARK Telegram CS.svg";
import Discord from "../../static/images/Picto DARK Discord CS.svg";
import Twitter from "../../static/images/Picto DARK Twitter CS.svg";
import Youtube from "../../static/images/Picto DARK Youtube.svg";
import Github from "../../static/images/Picto DARK Github.svg";
import Medium from "../../static/images/Picto DARK Medium..svg";
import { styled } from "@mui/material/styles";

const SocialLogo = styled("img")({
  width: "40px",
  height: "40px",
  marginLeft: "10px",
  marginRight: "20px",
  cursor: "pointer",
});
const Social = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingY: "10px",
      }}
    >
      <Box>
        {socialLinks.map((item, index) => {
          return (
            <a href={item.url} target="_blank" key={index} rel="noreferrer">
              <SocialLogo src={item.icon} alt="" />
            </a>
          );
        })}
      </Box>
    </Box>
  );
};

export default Social;

const socialLinks = [
  {
    icon: Telegram,
    url: "https://t.me/CloverSeedsOfficial",
  },
  {
    icon: Discord,
    url: "https://discord.gg/cloverseedsbsc",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/CloverSeedsBSC",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/channel/UCwEynYNCIe69WSMj0qimPgg",
  },
  {
    icon: Github,
    url: "https://clover-seed.gitbook.io/informations/",
  },
  {
    icon: Medium,
    url: "https://clover-seeds.medium.com/",
  },
];
