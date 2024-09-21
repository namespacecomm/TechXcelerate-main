import "animate.css";
import "./Schedule.css";
import classes from "./Schedule.module.css";
import { useEffect, useState } from "react";

export const Schedule = () => {
  const [path, setPath] = useState("offline");

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <section className="schedule" id="schedule">
      <div className="container">
        <div className="row" style={{ marginTop: "40px" }}>
          <h1
            className="yellow-green-text text-center text-[45px] sm:text-[25px] md:text-[35px] lg:text-[45px] capitalize cursor-pointer"
            style={{
              fontFamily: "Poppins,sans-serif",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Key Dates
          </h1> 
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={`${classes.keyDatesCards} my-5`} >
              <div className="row">
                <div
                  className="col-5 blue-cyan-text"
                  style={{ padding: "2rem" }}
                >
                  <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>21st</h1>
                  <h3 style={{ fontSize: "20px" }}>September</h3>
                  <h3 style={{ fontSize: "25px", marginTop:"1rem" }}>To</h3>
                  <h1 style={{ fontWeight: "bold", fontSize: "40px" , marginTop:"1rem"}}>23rd</h1>
                  <h3 style={{ fontSize: "20px" }}>October</h3>
                </div>
                <div className="col-7" style={{ padding: "2rem" }}>
                  <h1 style={{ fontSize: "40px" }}>Registration Period</h1>
                  <h5 style={{ fontSize: "18px" }}>Register yourself on Devfolio and join the fun</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={`${classes.keyDatesCards} my-5`}>
              <div className="row">
                <div
                  className="col-5 purple-pink-text"
                  style={{ padding: "2rem" }}
                >
                  <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>14th</h1>
                  <h3 style={{ fontSize: "20px" }}>October</h3>
                  <h3 style={{ fontSize: "25px", marginTop:"1rem" }}>To</h3>
                  <h1 style={{ fontWeight: "bold", fontSize: "40px" , marginTop:"1rem"}}>23rd</h1>
                  <h3 style={{ fontSize: "20px" }}>October</h3>
                </div>
                <div className="col-7" style={{ padding: "2rem" }}>
                  <h1 style={{ fontSize: "40px" }}>Online Sessions</h1>
                  <h5 style={{ fontSize: "18px" }}>
                    Join us as we deep dive into the various tracks along with renowned experts
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={`${classes.keyDatesCards} my-5`}>
              <div className="row">
                <div
                  className="col-5 green-yellow-text"
                  style={{ padding: "2rem" }}
                >
                  <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>24th</h1>
                  <h3 style={{ fontSize: "20px" }}>October</h3>
                  <h3 style={{ fontSize: "25px", marginTop:"1rem" }}>To</h3>
                  <h1 style={{ fontWeight: "bold", fontSize: "40px" , marginTop:"1rem"}}>20th</h1>
                  <h3 style={{ fontSize: "20px" }}>November</h3>
                </div>
                <div className="col-7" style={{ padding: "2rem" }}>
                  <h1 style={{ fontSize: "40px" }}>Coding Period</h1>
                  <h5 style={{ fontSize: "18px" }}>
                    Code your specific projects by following the documentation provided by us and apply knowledge gained during the workshops.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={`${classes.keyDatesCards} my-5`}>
              <div className="row">
                <div
                  className="col-5 orange-pink-text"
                  style={{ padding: "2rem" }}
                >
                  <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>10th</h1>
                  <h3 style={{ fontSize: "20px" }}>November</h3>
                  <h3 style={{ fontSize: "25px", marginTop:"1rem" }}>To</h3>
                  <h1 style={{ fontWeight: "bold", fontSize: "40px" , marginTop:"1rem"}}>20th</h1>
                  <h3 style={{ fontSize: "20px" }}>November</h3>
                </div>
                <div className="col-7" style={{ padding: "2rem" }}>
                  <h1 style={{ fontSize: "40px" }}>Submission Period</h1>
                  <h5 style={{ fontSize: "18px" }}>
                    Start pushing your code to our github and update project status on Devfolio to finish your assignment. 
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <Stack>
            <button>Add to Calendar</button>
          </Stack>
        </div> */}
      </div>
    </section>
  );
};
