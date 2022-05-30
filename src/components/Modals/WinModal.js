import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import loadingFieldImage from "../../static/images/GIF DARKFIELD.gif";
import loadingYardImage from "../../static/images/GIF DARKYARD.gif";
import loadingPotImage from "../../static/images/GIF DARKPOT.gif";
import loadingPotionMintImage from "../../static/images/GIFPOTIONMINT.gif";
// import winy from "../../static/images/YOU WIN DARK.svg";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Img from "react-cool-img";
import Modalimage from "../../static/images/YOU_WIN_DARK_DSEED_BACKGROUND.svg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const WinModal = ({ openWinModal, handleCloseWinModal, image, type }) => {
  return (
    <div>
      <BootstrapDialog
        onClose={handleCloseWinModal}
        aria-labelledby="customized-dialog-title"
        open={openWinModal}
        fullWidth={true}
        maxWidth="sm"
        height="450px"
      >
        <div
          style={{
            backgroundImage: `url("${Modalimage}")`,
            backgroundSize: "cover",
            backgroundColor: "currentcolor",
            height: "450px",
            width: "100%"
          }}
        >
          <BootstrapDialogTitle onClose={handleCloseWinModal} />

          <DialogContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                marginBottom: "40px",
              }}
            >
              <Img
                style={{
                  backgroundColor: "lightskyblue",
                  width: 170,
                  height: 170,
                  maxWidth: 280,
                  marginTop: "50px",
                  borderRadius: "8px",
                  border: `4px solid red`,
                  boxShadow: `0px 0px 16px red`,
                  position: "absolute",
                }}
                placeholder={
                  type == 0
                    ? loadingFieldImage
                    : type == 1
                    ? loadingYardImage
                    : type == 2
                    ? loadingPotImage
                    : type == 3
                    ? loadingPotionMintImage
                    : null
                }
                src={image}
                alt="REACT COOL IMG"
              />
              {/* <Img
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "90%",
                }}
                src={winy}
                alt=""
              /> */}
            </Box>
          </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
};

export default WinModal;
