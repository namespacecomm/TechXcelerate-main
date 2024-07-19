import React from "react";
import "./Speakers.css";
import { LinkedIn, YouTube } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import speakers from "./speakersData.js";

const Speakers = () => {
  return (
    <section id="speakers">
      <div className="speakers-container">
        <h1
          className="pink-red-text pb-4 pt-6 text-center text-[45px] sm:text-[25px] md:text-[35px] lg:text-[45px] capitalize cursor-pointer"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Featured Speakers
        </h1>
        <div className="speakers-list">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="speaker-card">
              <div className="speaker-image">
                <img src={speaker.photo} alt={speaker.fullName} />
                <div className="social-links">
                  <a
                    href={speaker.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <XIcon />
                  </a>
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn />
                  </a>
                  <a
                    href={speaker.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YouTube />
                  </a>
                </div>
              </div>
              <div className="speaker-details">
                <h3 className="text-[2.5rem]">{speaker.fullName}</h3>
                <h4 className="text-justify text-[1.5rem]">
                  {speaker.designation}
                </h4>
                <p className="mt-4">{speaker.note}</p>
                <p
                  className="orange-yellow-text"
                  style={{
                    position: "relative",
                    bottom: window.innerWidth <= 768 ? "0" : "-35px",
                    left: "0",
                    right: "0",
                    fontSize: "1.2rem",
                  }}
                >
                  <strong>Date and Time:</strong> {speaker.workshopDateTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
