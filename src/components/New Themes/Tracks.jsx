import "./Tracks.css";
import ThemesCard from "../ThemesCard/ThemesCard";
import trackCardGraphic from "../../assets/img/themes/programing.png"
import trackPageGraphic from "../../assets/img/themes/trackPageGraphic.png";
import {Tilt} from 'react-tilt';


const Tracks = () => {
  return (
    <div className="container pt-10 pb-10" id="tracks">
      <h1
        className="text-center green-blue-text"
        style={{ fontFamily: "Poppins,sans-serif", fontWeight: 700 }}
      >
        Tracks - Choose one, multiple or all
      </h1>

      <section className="pt-4 pb-10">
        <div className="">
          <div className="md:py-6 pb-8 px-2 lg:px-10 flex flex-col lg:flex-row justify-center items-center gap-4">
            <div className="lg:w-1/2 xl:w-[50%] p-6 lg:py-12 flex flex-col items-center justify-center md:items-start">
              <h2 className="about-us-h2 pink-red-text mb-4" style={{ fontSize: "3rem" }}>
                The tracks under TechXcelerate 3.0
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
                Under TechX 3.0, you are free to choose as many tracks as you want. For each chosen track you have a workshop as well as a full-fledged project to be built. The project will be in the form of a guided tutorial and is seperate for each track.
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
                For each track that you choose, you will have to build the related project and publish it to your GitHub and DevFolio and also share it on social media.
              </p>
            </div>
            <div className="lg:w-1/2 p-4 lg:p-16">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="CommunityImage object-cover rounded-md transition-shadow"
                  src={trackPageGraphic}
                  alt="sdg"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="cards-grid grid grid-cols-1 gap-4 place-items-center md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-2 lg:gap-12 xl:grid xl:grid-cols-3 xl:gap-64 mb-8 mt-2"> */}
      <div className="mb-8 mt-2 ">
      <Tilt options={{ max: 25 }}>
          <h1 className="gradient-text animate-text-entry text-center" >
            Tracks Launching Soon!
          </h1>
        </Tilt>


        {/* <ThemesCard
          title={"DSA & CP"}
          image={trackCardGraphic}
          description={
            "Random Text Goes Here"
          }
          gradientColor="blue-cyan"
          gradientColorText={"blue-cyan-text"}
          assignmentLink={""}
        />

        <ThemesCard
          title={"Web Development"}
          image={trackCardGraphic}
          description={
            "Random Text Goes Here"
          }
          gradientColor={"purple-pink"}
          gradientColorText={"purple-pink-text"}
          assignmentLink={""}
        />

        <ThemesCard
          title={"Mobile App Development"}
          image={trackCardGraphic}
          description={
            "Random Text Goes Here"
          }
          gradientColor={"green-yellow"}
          gradientColorText={"green-yellow-text"}
          assignmentLink={""}
        />

        <ThemesCard
          title={"AI & ML"}
          image={trackCardGraphic}
          description={
            "Random Text Goes Here"
          }
          gradientColor={"orange-pink"}
          gradientColorText={"orange-pink-text"}
          assignmentLink={""}
        />

        <ThemesCard
          title={"Data Science"}
          image={trackCardGraphic}
          description={
            "Random Text Goes Here"
          }
          gradientColor={"red-orange"}
          gradientColorText={"red-orange-text"}
          assignmentLink={""}
        />

        <ThemesCard
          title={"Cloud DevOps"}
          image={trackCardGraphic}
          description={
            "Random Text Goes Here"
          }
          gradientColor={"blue-purple"}
          gradientColorText={"blue-purple-text"}
          assignmentLink={""}
        />

        <ThemesCard
          title={"Blockchain & Web3"}
          image={trackCardGraphic}
          description={
            "Random Text Goes Here"
          }
          gradientColor={"yellow-green"}
          gradientColorText={"yellow-green-text"}
          assignmentLink={""}
        />

        <ThemesCard
          title={"Cyber Security"}
          image={trackCardGraphic}
          description={
            "Random Text Goes Here"
          }
          gradientColor={"pink-red"}
          gradientColorText={"pink-red-text"}
          assignmentLink={""}
        />

        <ThemesCard
          title={"Open Source"}
          image={trackCardGraphic}
          description={
            "Random Text Goes Here"
          }
          gradientColor={"green-blue"}
          gradientColorText={"green-blue-text"}
          assignmentLink={""}
        />

        <ThemesCard
          title={"UI & UX Design"}
          image={trackCardGraphic}
          description={
            "Random Text Goes Here"
          }
          gradientColor={"teal-lime"}
          gradientColorText={"teal-lime-text"}
          assignmentLink={""}
        />

        <ThemesCard
          title={"Extra"}
          image={trackCardGraphic}
          description={
            "Random Text Goes Here"
          }
          gradientColor={"magenta-violet"}
          gradientColorText={"magenta-violet-text"}
          assignmentLink={""}
        />

        <ThemesCard
          title={"Extra"}
          image={trackCardGraphic}
          description={
            "Random Text Goes Here"
          }
          gradientColor={"orange-yellow"}
          gradientColorText={"orange-yellow-text"}
          assignmentLink={""}
        /> */}
      </div>

      {/* <div className="left-0 right-0 flex justify-center mt-4">
        <button
          className="button-76 absolute top-[35rem] sm:top-[18rem] md:top-[24rem] lg:top-[30rem] xl:top-[36rem] 2xl:top-[45rem] "
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          View Rules
        </button>
      </div> */}
    </div>
  );
};

export default Tracks;
