import React, { useEffect, useState } from "react";
import backgroundVideoDesktop from "../assets/img/bg/TechX_Motion_Banner.mp4";
import "./Background.css";

const Background = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450);
    };
    window.addEventListener("resize", handleResize);

    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.removeChild(script);
    };
  }, []);

  const handleRegisterButtonClick = () => {
    window.open("https://techx24.devfolio.co", "_blank");
  };

  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="relative bg-video"
        id="home"
        style={{
          objectFit: "contain",
          width: "100%",
          height: "auto",
          maxHeight: "100vh",
          ...(isMobile && { objectPosition: "center center" }),
        }}
      >
        <source src={backgroundVideoDesktop} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 right-0 background-video">
        {props.children}
      </div>

      <div className="left-0 right-0 flex justify-center">
        {/* <button
          className="button-86 absolute top-[35rem] sm:top-[18rem] md:top-[24rem] lg:top-[30rem] xl:top-[36rem] 2xl:top-[45rem]"
          onClick={handleRegisterButtonClick}
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Register on Devfolio
        </button> */}
      </div>
      <div
              class="apply-button"
              data-hackathon-slug="techx24"
              data-button-theme="dark-inverted"
              style={{ height: "96px", width: "340px", margin: "20px auto 0", display: "block", textAlign: "center" }}
      ></div>
    </>
  );
};

export default Background;
