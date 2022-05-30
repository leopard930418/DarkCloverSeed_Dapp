import useMediaQuery from '@mui/material/useMediaQuery';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { styled } from "@mui/styles";
import { ReactComponent as PictoRM } from "../../static/images/ROADMAP DARK CLOVER.svg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";

const Roadmap = () => {
  const isMobile = useMediaQuery('(max-width:580px)');
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
      <div style={{ marginBottom: "50px" }}>
        <div>
          <div>
            <div className="faq-q-big-wrap" onClick={() => handleCollapse(1)}>
              <label
                sytle={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "36px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                  paddingBottom: "30px",
                  paddingTop: "30px",
                }}
                className={`${
                  open === 1
                    ? "question-open-roadmap"
                    : "question-close-roadmap"
                }`}
              >
                <span style={{ margin: "auto", color: "white" }}>Roadmap</span>
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
              <div className="roadmap">
                <Timeline position="right" sx={{ marginBottom: "30px" }}>
                  <TimelineItem position={isMobile ? 'right' : 'left'} sx={{ minHeight: 300 }}>
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{
                          bgcolor: "transparent",
                          m: 0,
                          p: 0,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <PictoRM />
                      </TimelineDot>
                      <TimelineConnector
                        sx={{ width: 10, bgcolor: "red", marginLeft: "-3px" }}
                      />
                    </TimelineSeparator>
                    <TimelineContent sx={{ textAlign: "left", paddingTop: 4 }}>
                      <p
                        style={{
                          color: "red",
                          fontSize: "22px",
                          fontWeight: "500",
                        }}
                      >
                        1] Preparation
                      </p>
                      <p style={{ color: "white" }}>[Q4 2021 - Q1 2022]</p>
                      <br />
                      <span style={{ color: "white" }}>
                        - Development of the project's ecosysteme
                      </span>
                      <br />
                      <span style={{ color: "white" }}>
                        - Creation of social networks/web page
                      </span>
                      <br />
                      <p style={{ color: "white" }}>
                        - Community Creation
                      </p>{" "}
                      <p style={{ color: "white" }}>- Private sales</p>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem position="right" sx={{ minHeight: 300 }}>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "transparent", m: 0, p: 0 }}>
                        <PictoRM />
                      </TimelineDot>
                      <TimelineConnector
                        sx={{ width: 10, bgcolor: "red", marginLeft: "-3px" }}
                      />
                    </TimelineSeparator>
                    <TimelineContent sx={{ textAlign: "left", paddingTop: 4 }}>
                      <p
                        style={{
                          color: "red",
                          fontSize: "22px",
                          fontWeight: "500",
                        }}
                      >
                        2] Launch Phase 1:
                      </p>
                      <span style={{ color: "white" }}>
                        Clover SEED$ [Q1 2022]
                      </span>
                      <br />
                      <br />
                      <span style={{ color: "white" }}>
                        - Testing and correcting the contracts
                      </span>
                      <br />
                      <span style={{ color: "white" }}>
                        - Audit of the 5 contracts by Dessert Finance
                      </span>
                      <br />
                      <span style={{ color: "white" }}>- AMAs</span>
                      <br />
                      <span style={{ color: "white" }}>
                        - Launch of Clover SEED$
                      </span>
                      <br />
                      <span style={{ color: "white" }}>
                        - Major milestone achieved
                      </span>
                      <br />
                      <span style={{ color: "white" }}>- Project paused</span>
                      <br />
                      <span style={{ color: "white" }}>
                        - Phase 2 implementation in the ecosystem
                      </span>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem position={isMobile ? 'right' : 'left'} sx={{ minHeight: 300 }}>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "transparent", m: 0, p: 0 }}>
                        <PictoRM />
                      </TimelineDot>
                      <TimelineConnector
                        sx={{ width: 10, bgcolor: "red", marginLeft: "-3px" }}
                      />
                    </TimelineSeparator>
                    <TimelineContent sx={{ textAlign: "left", paddingTop: 4 }}>
                      <p
                        style={{
                          color: "red",
                          fontSize: "22px",
                          fontWeight: "500",
                        }}
                      >
                        3] Launch Phase 2:
                      </p>
                      <span style={{ color: "white" }}>
                        Dark Clover [Q2 2022]
                      </span>
                      <br />
                      <br />
                      <span style={{ color: "white" }}>
                        - Testing and correcting the contracts
                      </span>
                      <br />
                      <span style={{ color: "white" }}>
                        - Audit of the 5 contracts by Dessert Finance
                      </span>
                      <br />
                      <span style={{ color: "white" }}>- AMAs</span>
                      <br />
                      <span style={{ color: "white" }}>
                        - Launch of Dark SEED$
                      </span>
                      <br />
                      <span style={{ color: "white" }}>
                        - Activation of the inter-phase gateway
                      </span>
                      <br />
                      <span style={{ color: "white" }}>
                        - Activation of various features (Affiliation, Bundling,
                        ...)
                      </span>
                      <br />
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem position="right" sx={{ minHeight: 300 }}>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: "transparent", m: 0, p: 0 }}>
                        <PictoRM />
                      </TimelineDot>
                      <TimelineConnector
                        sx={{ width: 10, bgcolor: "red", marginLeft: "-3px" }}
                      />
                    </TimelineSeparator>
                    <TimelineContent sx={{ textAlign: "left", paddingTop: 4 }}>
                      <p
                        style={{
                          color: "red",
                          fontSize: "22px",
                          fontWeight: "500",
                        }}
                      >
                        4] Consolidation of the ecosystem
                      </p>
                      <span style={{ color: "white" }}>[Q3 - Q4 2022]</span>
                      <br />
                      <br />
                      <span style={{ color: "white" }}>
                        - Addition of pending features
                      </span>
                      <br />
                      <span style={{ color: "white" }}>- Custom Merch</span>
                      <br />
                      <span style={{ color: "white" }}>
                        - Announcement of strategic partnerships
                      </span>
                      <br />
                      <span style={{ color: "white" }}>
                        - Private business Club for holders
                      </span>
                      <br />
                      <span style={{ color: "white" }}>
                        - Exclusive training courses
                      </span>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
