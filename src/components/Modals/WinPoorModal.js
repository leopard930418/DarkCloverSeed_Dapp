import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import winy from "../../static/images/YOU WIN DARK BAG.svg";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Img from "react-cool-img";
import Modalimage from "../../static/images/BACKGROUND POP-UP LUCKY DARK.svg";

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

const WinPoorModal = ({ openWinModal, handleCloseWinModal }) => {
  return (
    <div>
      <BootstrapDialog
        onClose={handleCloseWinModal}
        aria-labelledby="customized-dialog-title"
        open={openWinModal}
        fullWidth={true}
        maxWidth="sm"
      >
        <div
          style={{
            backgroundImage: `url("${Modalimage}")`,
            backgroundSize: "cover",
            backgroundColor: "currentcolor",
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
                  display: "flex",
                  justifyContent: "center",
                  width: "90%"
                }}
                src={winy}
                alt=""
              />
            </Box>
          </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
};

export default WinPoorModal;
