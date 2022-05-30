import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import BTax from "../../static/images/BUY TAX DARK.svg";
import STax from "../../static/images/SELL TAX.svg";
import NoNFTSTax from "../../static/images/NO NFT SELL TAX.svg";
import LandCreate from "../../static/images/LAND IS CREATED.svg";
import Img from "react-cool-img";
import React, { useState } from "react";
const Faq = () => {
  const [open, setOpen] = useState(1);
  const handleCollapse = (id) => {
    if (open === id) {
      setOpen(!id);
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Title
          className="gradienttext"
          sx={{
            color: "white",
            fontSize: "36px",
            lineHeight: "44px",
            paddingBottom: "35px",
            textTransform: "none",
          }}
        >
          Frequently Asked Questions
        </Title>

        <div>
          <div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(1)}>
              <label
                className={`${
                  open === 1 ? "question-open" : "question-close"
                } `}
              >
                What Is DeFi?
              </label>
              <div className="faq-icons">
                {open === 1 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 1 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  DeFi stands for «
                  <span style={{ color: "red" }}>decentralized finance</span>».
                  The goal is to recreate traditional financial systems, such as
                  banks and exchanges, but with{" "}
                  <span style={{ color: "red" }}>crypto-currencies</span>.
                  The difference is that DeFi applications work without a
                  central service exercising control over the whole system.
                  <br />
                  <br /> For example, if we make a comparison between DeFi and
                  traditional finance: in DeFi, you hold your money and you
                  control where your money goes and how it is spent. Whereas in
                  traditional finance, your money is held by the banks and you
                  have to trust them not to mismanage your money, like lending
                  to risky borrowers.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(2)}>
              <label
                className={`${
                  open === 2 ? "question-open" : "question-close"
                } `}
              >
                What is the Dark SEED$ token?
              </label>
              <div className="faq-icons">
                {open === 2 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 2 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",
                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    paddingY: "20px",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  The <span style={{ color: "red" }}>DSEED$ token</span> is the
                  currency of the{" "}
                  <span style={{ color: "red" }}>Dark SEED$ game</span>.
                  <br />
                  It is used to buy NFT that will allow you to grow Clovers and
                  harvest more DSEED$.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(4)}>
              <label
                className={`${
                  open === 4 ? "question-open" : "question-close"
                } `}
              >
                Where can I buy DSEED$ and where can I create my Clover Land?
              </label>
              <div className="faq-icons">
                {open === 4 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 4 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  1/ Buy DSEED$ on{" "}
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=0x359a83F4B65f5671e9aE2456FebF11c47ec8B678/"
                    target={"_blank"}
                    style={{ color: "red" }}
                  >
                    PancakeSwap
                  </a> or{" "}
                  <a
                    href="https://poocoin.app/tokens/0x359a83F4B65f5671e9aE2456FebF11c47ec8B678"
                    target={"_blank"}
                    style={{ color: "red" }}
                  >
                    Poocoin
                  </a>.
                  <br />
                  2/ Buy land with 100 DSEED$ (for 1 DARK CLOVER FIELD) on our{" "}
                  <a
                    href="https://dark.clover-seeds.com/my-nft"
                    target={"_blank"}
                    style={{ color: "red" }}
                  >
                    web app
                  </a>.
                  <br />
                  3/ Harvest* rewards in Dark SEED$ (:DSEED$) generated by your lands.
                  <br />
                  4/ Buy more NFT lands or swap your tokens.
                  <br />
                  You can also trade your land on{" "}
                  <a
                    href="https://nftrade.com/assets/bsc/0xa754e37f3905f863438baae3E944C8a8FdD69B72 "
                    target={"_blank"}
                    style={{ color: "white" }}
                  >
                    https://nftrade.com/
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://tofunft.com/collection/dark-clover-nft/items"
                    target={"_blank"}
                    style={{ color: "white" }}
                  >
                    https://tofunft.com/
                  </a>
                  <br />
                  <br />
                  *a 10% tax can be applied at the time of claim (can be
                  activated/deactivated at any time).
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(5)}>
              <label
                className={`${
                  open === 5 ? "question-open" : "question-close"
                } `}
              >
                How much does a ground NFT cost?
              </label>
              <div className="faq-icons">
                {open === 5 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 5 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  DARKFIELD: NFT limited to 1,000 copies.
                  <br />
                  Price: 100 DSEED$ tokens
                  <br />
                  Reward (depending on how lucky you are) :{" "}
                  <span style={{ color: "red" }}>
                    1.5% / 3% / 20% / Joker face per day
                  </span>
                  <br /> <br />
                  DARKYARD: NFT limited to 10,000 copies.
                  <br />
                  Price: 10 DSEED$ tokens
                  <br />
                  Reward :{" "}
                  <span style={{ color: "red" }}>
                    1% / 2% / 12% / Joker face per day
                  </span>
                  <br />
                  <br />
                  <br />
                  <br />
                  *The different % rewards are likely to change at any time
                  upwards or downwards in order to support the project.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(6)}>
              <label
                className={`${
                  open === 6 ? "question-open" : "question-close"
                } `}
              >
                When is the game over?
              </label>
              <div className="faq-icons">
                {open === 6 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 6 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  End of phase 1 Clover: 700 Cloverfield Minted on Clover dApp
                  <br />
                  End of phase 2 Dark: 666 Darkfield Minted on Dark dApp
                  <br />
                  Note that at the end of the phase, the game can be paused
                  while the next phase is deployed to ensure the synergy and
                  sustainability of the project.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(7)}>
              <label
                className={`${
                  open === 7 ? "question-open" : "question-close"
                } `}
              >
                Do I need to keep my computer running for my Clover Lands to be
                active?
              </label>
              <div className="faq-icons">
                {open === 7 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 7 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  No, you don’t.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(8)}>
              <label
                className={`${
                  open === 8 ? "question-open" : "question-close"
                } `}
              >
                Where can I buy land?
              </label>
              <div className="faq-icons">
                {open === 8 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 8 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  Directly on our 
                  <a
                      href="https://dark.clover-seeds.com/my-nft"
                      target={"_blank"}
                      style={{ color: "red" }}
                    >
                      app
                    </a> or
                  on{" "}
                  <span>
                    <a
                      href="https://nftrade.com/assets/bsc/0xa754e37f3905f863438baae3E944C8a8FdD69B72"
                      target={"_blank"}
                      style={{ color: "red" }}
                    >
                      https://nftrade.com/
                    </a>
                  </span>{" "}
                  and
                  <span>
                    {" "}
                    <a
                      href="https://tofunft.com/collection/dark-clover-nft/items"
                      target={"_blank"}
                      style={{ color: "red" }}
                    >
                      https://tofunft.com/
                    </a>
                  </span>
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(9)}>
              <label
                className={`${
                  open === 9 ? "question-open" : "question-close"
                } `}
              >
                Does the team earn royalties when I trade my DARK LAND NFT?
              </label>
              <div className="faq-icons">
                {open === 9 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 9 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  Yes, the team will earn 5% royalties when you trade NFT on Marketplaces.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(18)}>
              <label
                className={`${
                  open === 18 ? "question-open" : "question-close"
                } `}
              >
                Do you have big team wallets with DSEED$ tokens at launch?
              </label>
              <div className="faq-icons">
                {open === 18 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 18 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  No, the team doesn't have any DSEED$ from the launch.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(10)}>
              <label
                className={`${
                  open === 10 ? "question-open" : "question-close"
                } `}
              >
                How often should I bleed and feed my NFT?
              </label>
              <div className="faq-icons">
                {open === 10 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 10 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  Every 48h maximum at most, you will have to BLEED & FEED your land.
                  <br />
                  Missing it will dry your NFT Land and stop your staked NFT
                  from earning rewards!
                  <br /> <br />
                  Any farmer will understand how important it is to irrigate his
                  land so that their Dark SEED$ continues to grow. That's why it's
                  mandatory to come and water/bleed your fields every 48 hours to keep
                  your farms growing and see your crops thrive (and earn more Dark
                  SEED$)
                  <br />
                  Of course, you can bleed more often if you wish. Specifically, if you don't bleed, you won't be able to collect your rewards, but you are not able to stake or unstake your NFTs either before watering/bleeding again.
                  <br />
                  If you don't bleed and feed properly, it could also cause a mismatch between the DSEED$ counter on the "My Land" page and the cumulative reality on the Blockchain (for example, on your Metamask Wallet after claim).
                  <br />
                  Please note that the team is not responsible for any discrepancy at this level or for a delay in rewards.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(12)}>
              <label
                className={`${
                  open === 12 ? "question-open" : "question-close"
                } `}
              >
                Can I buy as much Lands as I want?
              </label>
              <div className="faq-icons">
                {open === 12 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 12 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  Yes, but Lands will be limited.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(13)}>
              <label
                className={`${
                  open === 13 ? "question-open" : "question-close"
                } `}
              >
                What happens when I Buy or I sell DSEED$?
              </label>
              <div className="faq-icons">
                {open === 13 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 13 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Img
                  src={BTax}
                  style={{ marginTop: "20px", marginBottom: "30px" }}
                />
                <Img
                  src={STax}
                  style={{ marginTop: "20px", marginBottom: "30px" }}
                />
                <Img
                  src={NoNFTSTax}
                  style={{ marginTop: "20px", marginBottom: "30px" }}
                />
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",
                    marginTop: "35px",
                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  In order to protect the project, the team reserves the right
                  to increase the sell tax at any time to avoid a big drop in the
                  price. Note that in this case, 100% of the additional tax will
                  be reinjected into the purchase of tokens in order to favor
                  our holders.
                  <br />
                  <br />
                  *This No NFT sell tax can be enable/disable during the project
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(14)}>
              <label
                className={`${
                  open === 14 ? "question-open" : "question-close"
                } `}
              >
                What happens when a Land is created?
              </label>
              <div className="faq-icons">
                {open === 14 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 14 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  <Img
                    src={LandCreate}
                    style={{ marginBottom: "20px", marginTop: "20px" }}
                  />
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(15)}>
              <label
                className={`${
                  open === 15 ? "question-open" : "question-close"
                } `}
              >
                Why is DSEED$ on the Binance Smart Chain?
              </label>
              <div className="faq-icons">
                {open === 15 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 15 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  DSEED$ is on the Binance Smart Chain for 3 reasons:
                  <br />
                  <br />
                  <span>
                    - This is the Blockchain that is most accessible to
                    everyone. Unlike the Ethereum network where high gas fees
                    make it impossible for most people to access.
                  </span>
                  <br />
                  <br />
                  <span>
                    - It is the SmartChain that is widely recognized, and has a
                    very good image and a positive reputation.
                  </span>
                  <br />
                  <br />
                  <span>
                    - The BSC is our mother in DeFi, With Dark Clover, we want
                    to restore its image and reputation.
                  </span>
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(17)}>
              <label
                className={`${
                  open === 17 ? "question-open" : "question-close"
                } `}
                style={{ placeContent: "center" }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "30px",
                    textTransform: "none",
                  }}
                >
                  Disclaimer
                </span>
              </label>
              <div className="faq-icons">
                {open === 17 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 17 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "26px",
                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  You are solely responsible for your own actions and decisions,
                  and the evaluation and use of our products and services must
                  be based on your due diligence.
                  <br />
                  <br />
                  The purchase of DSEED$ tokens constitutes an investment, so it
                  is inherently risky.
                  <br />
                  <br />
                  This Whitepaper and our website described in our present plans
                  could be modified, depending on many factors outside of Dark
                  Clover control.
                  <br />
                  <br />
                  This document does not provide financial investment
                  recommendations or any advice. The Dark Clover team advises
                  you to consult a financial advisor before investing in the
                  project.
                  <br />
                  <br />
                  The token DSEED$ may be volatile. When buying DSEED$, you are
                  accepting that you are not buying security or investment. By
                  this means, you agree that the Dark Clover team is not liable
                  for any losses or taxes you may incur. You agree there is no
                  guarantee about the duration of the project, which could be
                  stopped by different external factors.
                  <br />
                  <br />
                  As such, there is no guarantee that the price of a DSEED$
                  token will not fall, nor can it be guaranteed that the
                  protocol money will be spent to keep the price of the DSEED$
                  token at a minimum.
                  <br />
                  <br />
                  You should be aware that the current Dark Clover parameters
                  may vary and are estimated; the reward rate per day is an
                  estimate and may change, and the frequency of reward payments
                  is estimated and may be delayed. The APY that the protocol can
                  bring you is an estimate and not a guarantee.
                  <br />
                  <br />
                  Please note that the following factors can hinder the
                  development of Dark Clover: the development of the crypto
                  market and the beginning of the long term bear market, the
                  instability of the Blockchain, the possibility of congestion,
                  the possibility of error and hack, legal obstacles, and
                  regulatory changes that prevent the Dark Clover team from
                  completing the project, and ultimately the technical nature of
                  the DeFi revenue log.
                  These situations are beyond the control of Dark Clover and
                  there is no guarantee that they will not occur in the future.
                  <br />
                  <span style={{color: "red"}}> Therefore, you are and remain 100% responsible for your investments and choices.</span>
                  <br />
                  <br />
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `72px`,
  lineHeight: `80px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#FFFFFF`,
});
const Paragraph = styled("span")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `28px`,
  lineHeight: `56px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `white`,
});
