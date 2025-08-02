// AirflowDetail.js
import React from "react";
import airflowImage1 from "../../assets/images/airflow1.png";
import airflowImage2 from "../../assets/images/airflow2.png";
import airflowImage3 from "../../assets/images/airflow3.png";

const airflowDags = [
  {
    title: "Currency Sync to Redis",
    dag: "dev_integrasi_sync_redis_currency",
    image: airflowImage1,
    description: [
      "Syncs currency metadata from external source to Redis using RediSearch indexing.",
      "Handles schema setup, data validation, and safe updates to Redis.",
      "Uses modular Python with retry mechanisms and logging."
    ],
    tools: ["Python", "Redis", "RediSearch", "Airflow"],
    focus:
      "Data availability, fast retrieval via Redis, automated sync every day."
  },
  {
    title: "ClickUp Task Priority Updater",
    dag: "clickup_update_prioritas",
    image: airflowImage2,
    description: [
      "Integrates with ClickUp API to fetch and update task priorities across multiple teams.",
      "Handles cursor-based pagination, parameterized runs, and real-time updates.",
      "Built to support both manual and scheduled executions."
    ],
    tools: ["Python", "ClickUp API", "Airflow"],
    focus: "Team productivity automation, external system integration."
  },
  {
    title: "DWH Ship Coordinates",
    dag: "dwh-get-ship-cordinate",
    image: airflowImage3,
    description: [
      "Pulls live vessel tracking data from Sailink API and stores it in the data warehouse.",
      "Includes custom time-based filters, coordinate transformation, and ingestion validation.",
      "Orchestrated every 5 minutes to ensure near real-time updates."
    ],
    tools: ["Python", "Sailink API", "PostgreSQL/Oracle", "Airflow"],
    focus: "Real-time analytics, maritime data visibility, and alerting."
  }
];

export default function AirflowDetail() {
  return (
    <>
      {airflowDags.map((dag, index) => (
        <div key={index} className="dag-item">
          <img
            src={dag.image}
            alt={`Screenshot of ${dag.title}`}
            className="dag-image"
          />
          <div className="dag-content">
            <h3>{dag.title}</h3>
            <p className="dag-id">
              <strong>DAG:</strong> {dag.dag}
            </p>
            <ul className="dag-description">
              {dag.description.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
            <p className="dag-tools">
              <strong>🧰 Tools:</strong> {dag.tools.join(", ")}
            </p>
            <p className="dag-focus">
              <strong>📈 Focus:</strong> {dag.focus}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
