import React from "react";
import { useEffect, useState } from "react";
import logo from "../assets/img/techx-logo-blue.png";
import "./Footer.css";
import { GitHub, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X"; // Import XIcon

const Footer = () => {

  const [year, setYear] = useState(2023);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div>
          <div className="footer-logo">
            <a href="/#home" alt="Logo">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          <div className="footer-text">Follow us on:</div>
          <p>
            <a href="https://instagram.com/namespacecomm" target="_blank" rel="noreferrer">
              <Instagram className="icons instagram" fontSize="large" />
            </a>

            <a href="https://github.com/namespacecomm" target="_blank" rel="noreferrer">
              <GitHub className="icons twitter" fontSize="large" />
            </a>

            <a href="https://x.com/namespacecomm" target="_blank" rel="noreferrer">
              <XIcon className="icons twitter" fontSize="large" />
            </a>

            <a href="https://www.linkedin.com/company/namespacecomm/" target="_blank" rel="noreferrer">
              <LinkedIn className="icons linkedin" fontSize="large" />
            </a>

            <a href="https://youtube.com/@namespacecomm" target="_blank" rel="noreferrer">
              <YouTube className="icons twitter" fontSize="large" />
            </a>
          </p>

          <div className="footer-text mt-4 mb-4">© {year} The nameSpace Community</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
