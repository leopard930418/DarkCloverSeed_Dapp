import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useLocation } from "react-router-dom";
const DropBox = () => {
    const [open, setOpen] = useState(false)
    const manageBox = () => {
        setOpen(!open)
    }

    const location = useLocation();
    let locData = []
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
    if (location.pathname == '/my-nft') {
        locData = pathInfo.MyNFT
    } else if (location.pathname == '/my-land') {
        locData = pathInfo.MyLand
    } else if (location.pathname == '/marketplace') {
        locData = pathInfo.Market
    }

    return (
        <>
            {
                !isEmpty(locData) && !open && (
                    <Box
                        sx={{
                            color: "#fff",
                            justifyContent: "center",
                            display: "flex",
                            fontSize: "23px",
                            fontWeight: "bold",
                        }}
                    >
                        <div
                            style={{
                                marginRight: "15px",
                                marginLeft: "13px",
                                marginTop: "6px",
                            }}
                        >
                            <Link to="/"><div style={{ color: "#fff" }}>HOME</div></Link>
                        </div>
                        <div style={{ marginTop: "3px" }}><ArrowDropDownIcon fontSize="large" onClick={manageBox} /></div>
                    </Box>
                )
            }
            {
                !isEmpty(locData) && open && (
                    <Box
                        sx={{
                            background: "#4e0101",
                            color: "#fff",
                            fontSize: "23px",
                            fontWeight: "bold",
                            fontFamily: "Maven Pro",
                            width: "250px",
                            textTransform: "uppercase",
                            lineHeight: "30px",
                            textAlign: "center",
                            cursor: "pointer",
                            borderRadius: "5px",
                            position: "absolute",
                            left: "42%",
                            top: "23%",
                            zIndex: "1000"
                        }}
                    >
                        <Box
                            sx={{
                                borderTopLeftRadius: "5px",
                                borderTopRightRadius: "5px",
                                padding: "12px 0px 2px 45px",
                                borderBottom: "1px solid red",
                                justifyContent: "center",
                                display: "flex"
                            }}
                        >
                            <div style={{ marginRight: "15px" }} >
                                <Link onClick={manageBox} to="/"><div style={{ color: "#fff" }}>HOME</div></Link>
                            </div>
                            <div><ArrowDropUpIcon fontSize="large" onClick={manageBox} /></div>
                        </Box>
                        <Box
                            sx={{
                                paddingY: "12px",
                                borderBottom: "1px solid red"
                            }}
                        >
                            <Link onClick={manageBox} to={locData[0].path}>
                                <div style={{ color: "#fff" }}>
                                    {locData[0].title}
                                </div>
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                paddingY: "12px",
                                borderBottomLeftRadius: "5px",
                                borderBottomRightRadius: "5px",
                            }}
                        >
                            <Link onClick={manageBox} to={locData[1].path}>
                                <div style={{ color: "#fff" }}>
                                    {locData[1].title}
                                </div>
                            </Link>
                        </Box>
                    </Box>
                )
            }
        </>

    );
};

export default DropBox;

