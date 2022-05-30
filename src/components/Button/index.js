import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60px",
    color: "black",
    backgroundColor: props => props.backgroundColor,
    borderRadius: "6px",
    fontSize: "32px",
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: "900",
    fontFamily: `Maven Pro, sans-serif`,
    textDecoration: "none",
    wordBreak: "break-all",
    "@media (max-width: 1300px)": {
      fontSize: "26px"
    },
    "@media (max-width: 1200px)": {
      fontSize: "32px"
    },
    "@media (max-width: 950px)": {
      fontSize: "29px"
    },
    "@media (max-width: 420px)": {
      fontSize: "24px"
    },
    "@media (max-width: 290px)": {
      fontSize: "20px"
    }
  }
}));

const Button = ({ title, backgroundColor, url }) => {
  const classes = useStyles({ backgroundColor });

  return (
    <Box>
      <Link
        to={url}
        className={classes.button}
      >
        {title}
      </Link>
    </Box>
  );
};

export default Button;
