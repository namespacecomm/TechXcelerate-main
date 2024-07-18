// import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import groupProgramming from "../assets/img/banner-illustration1.png";
import nameSpaceVideo from "../assets/img/namespace-intro-motion-picture.mp4";
import "./About.css";

const About = (props) => {
  return (
    <section id="about">
      <Container>
        <Row style={{ marginBottom: '50px'}}>
          <Col lg={6}>
            <img src={groupProgramming} alt="groupProgramming" />
          </Col>
          <Col lg={6}>
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                marginBottom: "20px",
              }}
            >
              What is TechXcelerate 3.0?
            </h1>
            <p className="techx-overview-text text-justify">
              TechX ka generic description
            </p>
            <div className="counters-grid">
              <div>
                <CountUp
                  start={0}
                  end={2000}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Registrations</p>
              </div>
              <div>
                <CountUp
                  start={0}
                  end={20}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Workshops</p>
              </div>
              <div>
                <CountUp
                  start={0}
                  end={8}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Tracks</p>
              </div>
              <div>
                <CountUp
                  start={0}
                  end={50}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Cities</p>
              </div>
              <div>
                <CountUp
                  start={0}
                  end={200}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Colleges</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                marginBottom: "20px",
              }}
            >
              About
            </h1>
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                marginBottom: "20px",
              }}
            >
              The nameSpace Community ❤️
            </h1>
            <p className="techx-overview-text text-justify">
              nameSpace ka generic description
            </p>
            <div className="counters-grid">
              <div>
                <CountUp
                  start={0}
                  end={4000}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Members</p>
              </div>
              <div>
                <CountUp
                  start={0}
                  end={100}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Events</p>
              </div>
              <div>
                <CountUp
                  start={0}
                  end={40}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Core Team</p>
              </div>
              <div>
                <CountUp
                  start={0}
                  end={5}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Flagship Events</p>
              </div>
              <div>
                <CountUp
                  start={0}
                  end={10}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p>Programmes</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
              <video
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                autoPlay
                loop
                muted
              >
                <source
                  src={nameSpaceVideo}
                  type="video/mp4"
                />
              </video>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default About;
