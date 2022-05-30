import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Dark from "../../static/images/DARK POTION.jpg";
import Poor from "../../static/images/POOR POTION.jpg";
import FieldRWD from "../../static/images/FIELD REWARDS.png";
import YardRWD from "../../static/images/YARD REWARDS.png";
import Joker  from "../../static/images/DEAR JOKER.svg";
import Concept from "../../static/images/TABLEAU-CONCEPT-DARK.jpg";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Img from "react-cool-img";

const useStyles = makeStyles((theme) => ({
  percent: {
    display: "flex",
    marginTop: "40px",
    "@media (max-width: 600px)": {
      marginTop: "0px",
    },
  },
}));

const DarkLand = () => {
  const [open, setOpen] = useState(1);
  const handleCollapse = (id) => {
    if (open === id) {
      setOpen(!id);
    } else {
      setOpen(id);
    }
  };

  const classes = useStyles();
  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <Title
          className="gradienttext"
          sx={{
            color: "#c9e5d8",
            fontSize: "36px",
            lineHeight: "44px",
            paddingBottom: "35px",
            textTransform: "none",
          }}
        >
          In DarkLand, there are 6 rules to master
        </Title>
        <Img style={{marginBottom: "30px"}} width="80%" src={Concept} alt=""/>
        <div>
          <div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(1)}>
              <label
                className={`${
                  open === 1 ? "question-open" : "question-close"
                } `}
              >
                How Dark are you?
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
                  While some zombies produce up to 2% of DSEED$, on their land per day, others earn 12%, 20% or more (Joker).
                  <br /><br />
                  Some of these zombie farmers are luckier than others... Each time a zombie gets a dark land.
                  it has 4 possible rewards:
                  <br /><br />
                  <div
                  style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "auto",
                      justifyContent: "space-between"
                  }}
                  >
                  <Img style={{
                      width: "48%",
                  }} 
                  src={FieldRWD}
                  alt=""
                  />
                  <Img style={{
                      width: "48%",
                  }} 
                  src={YardRWD}
                  alt=""
                  />
                  </div>
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(2)}>
              <label
                className={`${
                  open === 2 ? "question-open" : "question-close"
                } `}
              >
                My dear Joker!
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
                    marginTop: "10px",
                    "@media (max-width: 768px)": {
                      fontSize: "15px",
                      lineHeight: "24px"
                    }
                  }}
                >
                  Only Connor, who is at the origin of these experiments, knew the exact reward amount of the JOKER Leaf, but he is now a zombie himself...
                  <br />
                  <Box sx={{
                      display: "flex",
                      flexDirection: "row"
                  }}>
                      <Box sx={{
                          justifyContent: "flex-start"
                      }}>
                          We could only find some clues on a bloodied piece of paper:
                          <br />
                          <Box sx={{
                              marginLeft: "30px"
                          }}>
                          - The Joker is the biggest reward ever seen
                          <br />
                          - It exceeds anything that humans can imagine
                          <br />
                          - It is extremely rare and therefore only intended<br />
                          for an elite group of zombies.
                          <br />
                          <br />
                          </Box>
                          Many mysteries still remain around the Joker.
                      </Box>
                      <Box style={{ width: "25%" }}>
                          <Img style={{}} src={Joker} alt="" />
                      </Box>
                  </Box>
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(3)}>
              <label
                className={`${
                  open === 3 ? "question-open" : "question-close"
                } `}
              >
                Bleed and Feed
              </label>
              <div className="faq-icons">
                {open === 3 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 3 ? "open" : "collapse"
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
                  <span style={{ color: "red" }}>
                    {" "}
                    {"``"}  Blood is the soul of the earth  {"``"}
                  </span>
                  <br />
                  Any Zombie farmer understands how important it is to bleed and feed their land so that their DSEED$ continue to grow.
                  That's why it will be mandatory to come and blood your land every 48 hours at most to keep your lands growing and see your crop thrive.
                  <br />
                  <br />
                  Since the world became dark, your Land no longer feeds on water but on blood. So each zombie farmer will have to hunt at night to collect blood
                  and spill it on his land in order to collect more and more Dark SEED$.
                  <br />
                  <br />
                  Don't forget to click on the "Bleed" button to accumulate and "Feed" to collect your rewards every 48h before the timer hits 0. Otherwise you will STOP your rewards from the precious timer cycle.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(4)}>
              <label
                className={`${
                  open === 4 ? "question-open" : "question-close"
                } `}
              >
                The thief zombie
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
                  <span style={{ color: "red" }}>
                    {" "}
                    {"``"} What is a thief zombie? {"``"}
                  </span>
                  <br />
                  A thief zombie is a holder who gets a DARK LAND NFT with the Joker reward.
                  <br />
                  <br />
                  <span style={{ color: "red" }}>
                    {" "}
                    {"``"} How to become a thief zombie: own a Joker NFT. {"``"}
                  </span>
                  <br />
                  If you own a DARK LAND NFT with the Joker reward, you have a 5% chance of stealing free NFTs minted by other farmers (even while you are sleeping) and therefore generate even more daily rewards!
                  <br />
                  <br />
                  On the other hand, during a mint there is a 5% chance that a stakeholder of a Joker reward steals your NFT.
                  <br />
                  <br />
                  Hurry and get your Joker reward!
                  <br />
                  Be one of the first to own one; they are extremely limited! Chances are Joker owners won't let them go so easily.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(5)}>
              <label
                className={`${
                  open === 5 ? "question-open" : "question-close"
                } `}
              >
                Playing the alchemist?
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
                  <br />
                  The potions are the gateway between Clover (with the SEED$
                  tokens) and Dark Clover (with the DSEED$ tokens).
                  <br />
                  In practice, all the people who possess NFTs or SEED$ tokens on
                  Clover are able to buy potions to benefit from
                  the features of Dark Clover.
                  <br />
                  It is important to know that in Connor’s Alchemist lab, you
                  are able to concoct ( = to mint) two types of potions:
                  <br />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "65px",
                      marginX: "auto",
                      alignItems: "flex-start",
                      marginY: "20px",
                      justifyContent: "space-between"
                    }}
                  >
                    <img
                      src={Dark}
                      alt=""
                      style={{
                        width: "45%",
                      }}
                    />
                    <img
                      src={Poor}
                      alt=""
                      style={{
                        width: "45%",
                      }}
                    />
                  </Box>
                  - The <span style={{ color: "red" }}>Dark Potion</span> allows you to get an NFT in Dark Clover <span style={{ color: "red" }}>in a
                  random way</span>(a DarkPot even if not available to mint directly on MY NFT page, or a DarkYard or a DarkField). You have a high probability of getting a Dark
                  Potion.
                  <br />
                  - The <span style={{ color: "red" }}>Poor Potion</span> enables you to get <span style={{ color: "red" }}>a small bag of DSEED$</span>. 
                  You have a low probability of getting a Poor Potion. 
                  You have to understand that the objective is <span style={{ color: "red" }}>to get as much Dark
                  Potion as possible</span>, to benefit from the advantages of Dark
                  Clover. Only luck will tell.
                  <br />
                  Beware, there are <span style={{ color: "red" }}>different rules in Connor’s Alchemist lab:</span>
                  <br />
                  1/ <span style={{ color: "red" }}>Potions are limited in supply</span> and therefore will not be available on
                  certain days.
                  <br />
                  2/ The lab will sometimes <span style={{ color: "red" }}>be closed on certain days</span>.
                  <br />
                  3/ Potions require rare products. The price of potions 
                  <span style={{ color: "red" }}> fluctuates day after day</span>, depending on supply and demand.
                  <br />
                  4/ From one day to the next, the lab can close its doors, which will make it impossible to access the potion that allows you to go from Luckyland to Darkland. So don’t waste
                  any time!
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(6)}>
              <label
                className={`${
                  open === 6 ? "question-open" : "question-close"
                } `}
              >
                Burn me, I'm famous!
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
                  <br />
                  Unlike Clover SEED$, Dark Clover includes a new feature that automatically increase the value of your DSEED$ token: the Burn.
                  <br />
                  <br />
                  Indeed, in Dark Clover taxes, we have included a system that automatically destroy a part of the tokens sold.
                  <br />
                  <br />
                  <span style={{ color: "red" }}>
                    {" "}
                    {"``"} What is the upside of this system ? {"``"}
                  </span>
                  <br />
                  <br />
                  Systematically destroying a part of the sold tokens will over time decrease the number of available supply. Less available tokens means more rarity for the remaining ones.
                  <br />
                  <br />
                  In turn, your bag and your NFTs are mechanically increasing in value day after day without doing anything.
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

export default DarkLand;

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
  color: `#b9e7d6`,
});
