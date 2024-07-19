import React, { useState } from "react";
import "./FAQs.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      title: "Generic Question",
      text: "Generic Answer",
    },
    {
      title: "Generic Question",
      text: "Generic Answer",
    },
    {
      title: "Generic Question",
      text: "Generic Answer",
    },
    {
      title: "Generic Question",
      text: "Generic Answer",
    },
    {
      title: "Generic Question",
      text: "Generic Answer",
    },
    {
      title: "Generic Question",
      text: "Generic Answer",
    },
    {
      title: "Generic Question",
      text: "Generic Answer",
    },
    {
      title: "Generic Question",
      text: "Generic Answer",
    },
    {
      title: "Generic Question",
      text: "Generic Answer",
    },
    {
      title: "Generic Question",
      text: "Generic Answer",
    },
    {
      title: "Generic Question",
      text: "Generic Answer",
    },
    {
      title: "Generic Question",
      text: "Generic Answer",
    },
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
