import React, { useState } from "react";
import "./FAQs.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      title: "What is TechXcelerate?",
      text: "TechXcelerate is a series of sessions across different tech domains, designed for freshers, led by expert speakers. After the sessions conclude, participants will be given assignments (projects) to choose from, which they must complete and submit within the given deadline.",
    },
    {
      title: "Who can participate in TechXcelerate?  ",
      text: "TechXcelerate is open to anyone interested in technology, including students, professionals, and tech enthusiasts. It is especially designed for first and second-year students to help them explore different tech domains, understand various roadmaps, and make informed decisions about which area to focus on.",
    },
    {
      title: "Is it free?*",
      text: "Yes, attendance for TechXcelerate is free of charge.",
    },
    {
      title: "When will it happen?",
      text: "The TechXcelerate sessions will take place from 14th October 2024 to 23rd October 2024.",
    },
    {
      title: "What will be covered in the sessions?",
      text: "The TechXcelerate sessions will cover domain guidance and roadmaps, with insights provided by expert speakers from the industry. These sessions will help participants gain a deeper understanding of different tech domains and the paths they can follow to succeed in their chosen field.",
    },
    {
      title: "Who will be the speakers?",
      text: "The speakers will include industry experts, thought leaders, and experienced professionals from various tech fields.",
    },
    {
      title: "How many domains will be covered?",
      text: "TechXcelerate will cover 10 domains: web development, app development, AI/ML, data science, DSA/competitive programming, cybersecurity, AR/VR, cloud/devops, open source, and blockchain.",
    },
    {
      title: "Will we get a certificate for attending?",
      text: "Yes, participants will receive a certificate of attendance after completing the sessions.",
    },
    {
      title: "What kind of assignments will be given?",
      text: "On 24th October 2024, assignment projects will be launched, and participants will have the opportunity to choose one. These assignments will be mini, complete, and beginner-friendly projects with a detailed roadmap. All necessary resources and steps will be provided, making it easy for participants, even beginners, to follow along and build a fully functional project. Completing these projects will add value to their resumes by showcasing hands-on experience.",
    },
    {
      title: "Will participants receive a certificate for completing the assignment?",
      text: "Yes, participants will receive a certificate upon successfully completing the assignment.",
    },
    {
      title: "Deadline for assignment?",
      text: "The deadline for TechXcelerate assignment submissions is 20th November 2024.",
    }
  ];

  return (
    <section id="faq">
      <div className="p-4 faq-container">
        <div className="relative p-4 lg:py-10 w-full">
          <h1
            className="teal-lime-text text-center text-[45px] sm:text-[25px] md:text-[35px] lg:text-[45px] capitalize cursor-pointer"
            style={{
              fontFamily: "Poppins,sans-serif",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h1>
        </div>
        {faqData.map((faq, index) => (
          <div
            onClick={() => handleToggle(index)}
            key={index}
            className={`cursor-pointer faq ${activeIndex === index ? "active" : ""
              }`}
          >
            <h3 className="faq-title">{faq.title}</h3>
            <p className="faq-text">{faq.text}</p>
            <button className="faq-toggle" onClick={() => handleToggle(index)}>
              <svg
                className={`chevron w-6 h-6 text-gray-800 dark:text-white ${activeIndex === index ? "hidden" : ""
                  }`}
                onClick={() => handleToggle(index)}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
              <svg
                className={`close w-6 h-6 text-gray-800 dark:text-white ${activeIndex === index ? "" : "hidden"
                  }`}
                onClick={() => handleToggle(index)}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>

  );
};

export default FAQs;
