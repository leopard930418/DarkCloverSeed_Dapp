import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import reward from "../../static/images/LUCKY DARK CLOVER GIF.gif";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
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

const MinTitle = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `30px`,
  lineHeight: `38px`,
  textAlign: "center",
  textTransform: "uppercase",
  paddingBottom: "20px",
  color: `#FFFFFF`,
});
const LuckyImage = styled("img")({
  width: "480px",
  "@media (max-width: 450px)": {
    width: "300px",
  },
});
const ProgresModal = ({ progressCloseModal, openProgressModal, title }) => {
  return (
    <div>
      <BootstrapDialog
        onClose={progressCloseModal}
        aria-labelledby="customized-dialog-title"
        open={openProgressModal}
        fullWidth={true}
        maxWidth="sm"
      >
        <div style={{ backgroundImage: `url("${Modalimage}")`, backgroundSize: "cover", backgroundColor: "currentcolor" }}>
          <BootstrapDialogTitle onClose={progressCloseModal} />
          <DialogContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginY: "30px",
              }}
            >
              <LuckyImage src={reward} alt="" />
            </Box>
            <MinTitle>{title}</MinTitle>
          </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
};

export default ProgresModal;
