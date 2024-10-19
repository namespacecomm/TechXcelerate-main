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
            TechXcelerate, launched in April 2023, is a series of interactive sessions designed to empower first and second-year students with essential technical skills. These beginner-friendly sessions cover a wide range of topics, including Competitive Programming, web development, app development, data science, and more. Delivered by industry-leading professionals, TechXcelerate aims to provide students with the tips and tricks necessary to excel in various technical domains.
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
            The nameSpace Community is an organization of like-minded individuals who share a passion for technology and are committed to helping each other become the best developers they can be. Whether you're just starting out in your coding journey or a seasoned pro, our community is a place where you can connect with other tech enthusiasts, share your knowledge, and grow your skills. Founded in 2022, nameSpace has quickly grown to become one of the largest technical communities in Delhi-NCR and is racing towards further expansion and deeper penetration in its core segments.
            </p>
            <div className="counters-grid">
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={4}
                  duration={4}
                  suffix=""
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Flagship National Events</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={100}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Major and Minor Events</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={250}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Institutions Reached</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={50}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Community Partners</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={100}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Ambassadors and Evangelists</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={25}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Indian States and UTs</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={10}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Countries Reached</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={50}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Sponsors and Partners</p>
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
