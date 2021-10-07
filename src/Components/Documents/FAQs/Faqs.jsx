import React, { useState } from "react";
import "./faqs.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Search from "@material-ui/icons/Search";
import { faqs } from "./data";
function Faqs() {
  const [searchTerm, setsearchTerm] = useState("");
  return (
    <div className="Faqs">
      <div className="FaqsTop">
        <div className="FaqsTopLeft">
          <p>FAQs</p>
        </div>
        <div className="FaqsTopRight">
          <Search />{" "}
          <input
            type="text"
            placeholder="How could we help you?"
            onChange={(e) => {
              setsearchTerm(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="FaqsBottom">
        <div className="FaqsBottomMiddle">
          {faqs
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.details.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((data) => {
              return (
                <div className="FaqsBottomMiddleItems" key={Math.random()}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{data.heading}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{data.details}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
