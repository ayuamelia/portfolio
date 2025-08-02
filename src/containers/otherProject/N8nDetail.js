// AirflowDetail.js
import React from "react";
import Slider from "react-slick";
import openapiImage1 from "../../assets/images/openapi1.png";
import openapiImage2 from "../../assets/images/openapi2.png";
import openapiImage3 from "../../assets/images/openapi3.png";

const openapiImages = [openapiImage1, openapiImage2, openapiImage3];

const n8nDetails = [
  {
    title: "Currency Sync to Redis",
    dag: "dev_integrasi_sync_redis_currency",
    key: [
      "AI-Assisted Decision Making: Utilizes Ollama for natural language reasoning to interpret and prioritize ITCR details."
    ],
    tech: [
      "Workflow Engine: Built using n8n, a self-hosted no-code automation platform, for orchestrating task flows, ITCR scoring, and internal notifications.",
      "AI Integration: Integrated with Ollama, a lightweight local LLM engine, to enable reasoning, prompt handling, and AI-driven decision-making without relying on external cloud APIs.",
      "API Communication: Connected to internal RESTful APIs with standardized OpenAPI schemas, enabling seamless data retrieval from ITCR logs and planning tools.",
      "Chatbot Layer (In Progress): Developing a custom chatbot interface directly within the n8n ecosystem to allow conversational interaction and dynamic prioritization requests.",
      "Data Sources: Pulls and processes data from internal ITCR logs and spreadsheets (Google Sheets) in real time for up-to-date insights.",
      "Automation Triggers: Supports both webhook-based and scheduled executions, allowing the system to run autonomously or on demand.",
      "Hosting & Security: Entirely self-hosted on PT PELNI’s internal servers, ensuring full data control, restricted access, and compliance with internal security policies."
    ],
    role: [
      " Project Initiation & Concept Design: Initiated and proposed the idea of using AI-powered no-code automation to support the prioritization of IT Change Requests (ITCR) within the IT division, addressing recurring bottlenecks in team decision-making and planning."
    ]
  }
];

export default function N8nDetail() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  };
  return (
    <>
      {/* <div style={{margin: "20px"}}>
        <Slider {...sliderSettings} className="openapi-slider">
          {openapiImages.map((img, i) => (
            <div key={i}>
              <img
                src={img}
                className="w-full h-auto object-contain"
                style={{
                  width: "100%",
                  height: "700px",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          ))}
        </Slider>
      </div> */}
      {n8nDetails.map((dag, index) => (
        <div key={index}>
          <div className="dag-content">
            <p className="dag-tools">
              <strong>🔑 Key Highlights: </strong>
            </p>
            <ul className="dag-description">
              {dag.key.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
            <br />
            <p className="dag-tools">
              <strong>🛠️ Technologies and Stack: </strong>
            </p>
            <ul className="dag-description">
              {dag.tech.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
            <br />
            <p className="dag-tools">
              <strong>💼 My Role and Responsibilities: </strong>
            </p>
            <ul className="dag-description">
              {dag.role.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
