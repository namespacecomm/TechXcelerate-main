import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Footer from "./components/Footer";
import { Schedule } from "./components/Schedule/Schedule";
import About from "./components/About";
import { Fragment, useEffect, useState } from "react";
import Tracks from "./components/New Themes/Tracks";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import ScrollToTop from "react-scroll-to-top";
import FAQs from "./components/FAQ/FAQs";
import Speakers from "./components/Speakers/Speakers";
import Archive from "./components/Archive/Archive";
import Badge from "./components/Badge/Badge";
import PdfPreview from "./components/ThemesCard/reactPdf";

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [loading, setLoading] = useState(true); // State variable for loading status

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 13000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <ScrollToTop
                className="scroll-to-top"
                smooth
                color="#fff"
                style={{
                  backgroundColor: "#42a7f5",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  right: "35px",
                  bottom: "100px",
                  // boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)'
                }}
              />
              <NavBar />
              <Banner />
              <Schedule />
              <About />
              <Tracks />
              <Speakers />
              <Archive />
              <Badge />
              <FAQs />
              <Footer />
              {windowSize[0] < 600 && <MobileNavbar />}
            </Fragment>
            
          }
        />
        <Route path="/pdf-preview" element={<PdfPreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
