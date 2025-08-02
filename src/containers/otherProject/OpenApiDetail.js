// AirflowDetail.js
import React from "react";
import Slider from "react-slick";
import openapiImage1 from "../../assets/images/openapi1.png";
import openapiImage2 from "../../assets/images/openapi2.png";
import openapiImage3 from "../../assets/images/openapi3.png";

const openapiImages = [openapiImage1, openapiImage2, openapiImage3];

const openApiDetails = [
  {
    title: "Currency Sync to Redis",
    dag: "dev_integrasi_sync_redis_currency",
    key: [
      "⁠Clear & Human-Centered: Wrote intuitive OpenAPI specs that allowed new team members or integrators to understand services without having to decode the backend.",
      "⁠Version-Controlled & Consistent: Maintained Swagger files in Git repos, ensuring every change was trackable, reviewable, and aligned with system versions.",
      "⁠Scalable Across Teams: Designed docs to support multiple services across departments: HR, Finance, Admin, making inter-team coordination faster and smoother.",
      "⁠Built for Integration: Enabled external vendors and internal stakeholders to plug into our services with minimal hand-holding."
    ],
    tech: [
      "API Specification: Swagger UI, OpenAPI v3",
      "⁠Tools: GitLab, Postman, Swagger Editor,",
      "⁠Microservices Pattern: Each service documented as its own module with defined endpoints, models, responses, and usage notes."
    ],
    role:[
      "⁠Daily Author of OpenAPI Specs: Wrote and maintained Swagger documentation for every new or updated microservice I built.",
      "⁠Integration Enabler: Collaborated with frontend, mobile, and QA teams to ensure APIs were not just functional but understandable and usable.",
      "⁠Code-to-Doc Synchronization: Ensured all docs were in sync with real code behavior, minimizing guesswork and debugging time.",
      "⁠Mentorship by Docs: Helped junior developers understand best practices through clean, readable API documentation examples."
    ]
  }
];

export default function OpenApiDetail() {
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
      <div style={{margin: "20px"}}>
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
      </div>
      <p>
        I designed and implemented RESTful APIs using Swagger (OpenAPI 3.0) to
        streamline API development, documentation, and cross-team integration.
        This approach ensures consistency across services, improves onboarding
        for frontend and QA, and aligns with internal API standards.
      </p>
      {openApiDetails.map((dag, index) => (
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
