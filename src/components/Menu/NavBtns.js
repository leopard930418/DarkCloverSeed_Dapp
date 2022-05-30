import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const NavBtns = () => {
    const location = useLocation();
    let locData = []
    const pathInfo = {
        MyNFT: [
            {
                title: "HOME",
                path: "/"
            },
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
                title: "HOME",
                path: "/"
            },
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
                title: "HOME",
                path: "/"
            },
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
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }} justifyContent="center" alignItems="center">
            {locData.map((itm, index) => {
                return (
                    <Grid item key={index}>
                        <Box key={index}>
                            <Link to={itm.path}>
                                <Box
                                    sx={{
                                        color: "#fff",
                                        fontSize: "25px",
                                        fontWeight: "bold",
                                        fontFamily: "Maven Pro",
                                        textTransform: "uppercase",
                                        lineHeight: "30px",
                                        width: "160px",
                                        textAlign: "center",
                                        cursor: "pointer", 
                                    }}
                                >
                                    {itm.title}
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                    
                )
            })}
        </Grid>
    );
};

export default NavBtns;

