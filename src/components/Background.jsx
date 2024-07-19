import React from "react";
import backgroundVideoDesktop from "../assets/img/bg/TechX_Motion_Banner.mp4";
import "./Background.css";

const Background = (props) => {
  const isMobile = window.innerWidth < 450;

  const handleRegisterButtonClick = () => {
    window.open("", "_blank");
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
  <source
    src={backgroundVideoDesktop}
    type="video/mp4"
  />
</video>

      <div className="absolute top-0 left-0 right-0 background-video">
        {props.children}
      </div>
      <div className="left-0 right-0 flex justify-center">
        <button
          className="button-86 absolute top-[35rem] sm:top-[18rem] md:top-[24rem] lg:top-[30rem] xl:top-[36rem] 2xl:top-[45rem] "
          onClick={handleRegisterButtonClick}
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Register on Devfolio
        </button>
      </div>
    </>
  );
};

export default Background;
