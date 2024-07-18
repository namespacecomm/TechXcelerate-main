import React from "react";
import styled from "styled-components";

const Section2 = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const YoutubeFrame = styled.iframe`
  width: 90%;

  @media (max-width: 768px) {
    height: 240px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Archive = () => {
  return (
    <section className="mt-8 pt-14 pb-14" id="archive">
      <h1
        className="red-orange-text text-center text-[45px] sm:text-[25px] md:text-[35px] lg:text-[45px] capitalize cursor-pointer"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Past glimpses of TechXcelerate
      </h1>

      <Section2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
          <YoutubeFrame src="https://www.youtube.com/embed/yw_5wT0OTfE?si=dLhthxsHjwVNt0AR" />
          <YoutubeFrame src="https://www.youtube.com/embed/3P836wOGiJM?si=1ytAtyA-py_NJ7dU" />
          <YoutubeFrame src="https://www.youtube.com/embed/GtFKD7S2DGY?si=Ibo54vY63ewepwa_" />
          <YoutubeFrame src="https://www.youtube.com/embed/hP5s45CRFP8?si=D7-R3NmNZYmKV0_1" />
          <YoutubeFrame src="https://www.youtube.com/embed/0S7-9D5emFM?si=81uAyTDD7SfmrBk4" />
          <YoutubeFrame src="https://www.youtube.com/embed/0E-tI0M9eXY?si=0FC5N6inUazL5sZE" />
          <YoutubeFrame src="https://www.youtube.com/embed/1DaSopBmZAk?si=1fZWAN8tqEQCcU21" />
          <YoutubeFrame src="https://www.youtube.com/embed/jJScsZOrdzw?si=ODK4_oIOHlH6G13O" />
          <YoutubeFrame src="https://www.youtube.com/embed/eWc6eVcaLyw?si=QA9_CUfmkNKABWT0" />
          <YoutubeFrame src="https://www.youtube.com/embed/aezbGftYJhA?si=8JrrimqBNSNcmiaW" />
          <YoutubeFrame src="https://www.youtube.com/embed/M6ZLkN-Hvww?si=8CZSs0VrLxFtSYlE" />
          <YoutubeFrame src="https://www.youtube.com/embed/qS8K2hVPfm0?si=-az_q1omrXTmO5vJ" />
          <YoutubeFrame src="https://www.youtube.com/embed/I2AvuoJVpIo?si=SfEHF17CkvlcOoxn" />
          <YoutubeFrame src="https://www.youtube.com/embed/Lu5l4THO5GM?si=MtrbhG8czkmBFMSi" />
          <YoutubeFrame src="https://www.youtube.com/embed/MWXZCJJbdk4?si=qacDkoxUnLPo_G5G" />
          <YoutubeFrame src="https://www.youtube.com/embed/SLT30RUO-2I?si=2EsMnq-vwz9hSRvl" />
          <YoutubeFrame src="https://www.youtube.com/embed/36cxpDBBHlU?si=n_T_kW6Hk49qyxSx" />
          <YoutubeFrame src="https://www.youtube.com/embed/PzAiSJdDO7o?si=vgyQslC7TS0vQh1I" />
          <YoutubeFrame src="https://www.youtube.com/embed/hXA1l1by-vE?si=Fnw8tcAuj85TetR2" />
          <YoutubeFrame src="https://www.youtube.com/embed/ZPc-MAv-6Kk?si=qpWXMKQAJ-mu7ACS" />
          <YoutubeFrame src="https://www.youtube.com/embed/dnSgiQffc6o?si=jvnDkPUgx_jRXpWK" />
        </div>
      </Section2>
    </section>
  );
};

export default Archive;
