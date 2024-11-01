import "./Tracks.css";
import ThemesCard from "../ThemesCard/ThemesCard";
import webDevLogo from "../../assets/img/themes/web-development (1).svg";
import mobileDevLogo from "../../assets/img/themes/mobile-development (1).svg";
import aiMlLogo from "../../assets/img/themes/artificial-intelligence.svg";
import blockchainLogo from "../../assets/img/themes/blockchain.svg";
import cyberSecurityLogo from "../../assets/img/themes/cyber-security.svg";
import cloudDevOpsLogo from "../../assets/img/themes/cloud-computing.svg";
import trackPageGraphic from "../../assets/img/themes/trackPageGraphic.png";

import { Tilt } from 'react-tilt';

const Tracks = () => {
  return (
    <div className="container pt-10 pb-10" id="tracks">
      <h1
        className="text-center green-blue-text"
        style={{ fontFamily: "Poppins,sans-serif", fontWeight: 700 }}
      >
        Assignments - Choose one, multiple or all
      </h1>

      <section className="pt-4 pb-10">
        <div className="">
          <div className="md:py-6 pb-8 px-2 lg:px-10 flex flex-col lg:flex-row justify-center items-center gap-4">
            <div className="lg:w-1/2 xl:w-[50%] p-6 lg:py-12 flex flex-col items-center justify-center md:items-start">
              <h2 className="about-us-h2 pink-red-text mb-4" style={{ fontSize: "3rem" }}>
                The assignments under TechXcelerate 3.0
              </h2>
              <p
                className="about-us-p text-justify mb-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                  fontSize: "1.3rem",
                  margin: "0",
                }}
              >
                Under TechX 3.0, you are free to choose as many assignments as you want. For each chosen assignment, you have a workshop as well as a full-fledged project to be built. The project will be in the form of a guided tutorial and is separate for each assignment.
              </p>
              <p
                className="about-us-p text-justify"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                  fontSize: "1.3rem",
                  margin: "0",
                }}
              >
                For each assignment that you choose, you will have to build the related project and publish it to your GitHub and DevFolio and also share it on social media.
              </p>
            </div>
            <div className="lg:w-1/2 p-4 lg:p-16">
              <img
                className="CommunityImage object-cover rounded-md transition-shadow"
                src={trackPageGraphic} 
                alt="Assignment Graphic"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mb-8 mt-2 ">
        {/* <Tilt options={{ max: 25 }}>
          <h1 className="gradient-text animate-text-entry text-center">
            Assignments Launching Soon!
          </h1>
        </Tilt> */}

        {/* Flex container for the ThemesCards */}
        <div className="themes-container">
          <ThemesCard
            title={"Web Development"}
            image={webDevLogo}
            description={""}
            gradientColor={"purple-pink"}
            gradientColorText={"purple-pink-text"}
            assignmentLink={['/assignments/webDev1.pdf','/assignments/webDev2.pdf']}
          />

          <ThemesCard
            title={"Mobile App Development"}
            image={mobileDevLogo}
            description={""}
            gradientColor={"green-yellow"}
            gradientColorText={"green-yellow-text"}
            assignmentLink={['/assignments/app1.pdf','/assignments/app2.pdf']}
          />

          <ThemesCard
            title={"AI & ML"}
            image={aiMlLogo}
            description={""}
            gradientColor={"orange-pink"}
            gradientColorText={"orange-pink-text"}
            assignmentLink={['/assignments/ml.pdf']}
          />

          <ThemesCard
            title={"Blockchain & Web3"}
            image={blockchainLogo}
            description={""}
            gradientColor={"yellow-green"}
            gradientColorText={"yellow-green-text"}
            assignmentLink={['/assignments/blockChain.pdf']}
          />

       <ThemesCard
          title={"Cloud DevOps"}
          image={cloudDevOpsLogo} 
          description={""}
          gradientColor={"blue-purple"}
          gradientColorText={"blue-purple-text"}
          assignmentLink={['/assignments/docker.pdf']}
        />


          <ThemesCard
            title={"Cyber Security"}
            image={cyberSecurityLogo}
            description={""}
            gradientColor={"pink-red"}
            gradientColorText={"pink-red-text"}
            assignmentLink={['/assignments/Cybersecurity.pdf']}
          />
        </div>
      </div>

      <div className="left-0 right-0 flex justify-center mt-4">
        <button
          className="button-76"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 700,
            textAlign: "center",
          }}
          onClick={()=>{
            window.open('https://lush-bugle-f9b.notion.site/TechXcelerate-3-0-The-Participants-Guide-10896f9c8792804b8e23fb0a57fa65f7', '_blank');
          }}
        >
          View Rules
        </button>
      </div>
    </div>
  );
};

export default Tracks;
