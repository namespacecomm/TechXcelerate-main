import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/techx-logo-blue.png";
import ProgressBar from "./progressBar/ProgressBar";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    // Update active link based on location.pathname
    const currentPath = location.pathname.toLowerCase();
    setActiveLink(currentPath === "/" ? "home" : currentPath.substr(1));
  }, [location.pathname]);

  const getLinkHref = (section) => {
    return location.pathname === "/" ? `/#${section}` : `/#${section}`;
  };

  return (
    <>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand className="nav-logo">
            <a href="/#home" alt="Logo">
              <img src={logo} alt="Logo" id="logo" style={{ width: '150px', height: 'auto' }} />
            </a>
          </Navbar.Brand>


          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href={getLinkHref("home")}
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("home")}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href={getLinkHref("schedule")}
                className={
                  activeLink === "schedule"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => setActiveLink("schedule")}
              >
                Schedule
              </Nav.Link>

              <Nav.Link
                href={getLinkHref("about")}
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("about")}
              >
                About
              </Nav.Link>


              <Nav.Link
                href={getLinkHref("tracks")}
                className={
                  activeLink === "tracks" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("tracks")}
              >
                Tracks
              </Nav.Link>

              <Nav.Link
                href={getLinkHref("speakers")}
                className={
                  activeLink === "speakers" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("speakers")}
              >
                Speakers
              </Nav.Link>

              <Nav.Link
                href={getLinkHref("archive")}
                className={
                  activeLink === "archive" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("archive")}
              >
                Archive
              </Nav.Link>

              <Nav.Link
                href={getLinkHref("faq")}
                className={
                  activeLink === "faq"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => setActiveLink("faq")}
              >
                FAQs
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
        <ProgressBar />
      </Navbar>
    </>
  );
};
