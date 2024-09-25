import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import ButtonIcon from "../../assets/images/button-icon.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActivityGraph = () => {
  const [view, setView] = useState("week"); // default view is weekly
  const [activeTab, setActiveTab] = useState("patients");

  const data = {
    labels: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label:
          activeTab === "patients" ? "Total Patients" : "Total Embryo Graded",
        backgroundColor: "#F7F3FF",
        borderColor: "#F7F3FF",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(153, 102, 255, 0.8)",
        hoverBorderColor: "rgba(153, 102, 255, 1)",
        borderRadius: {
          topLeft: 5,
          topRight: 5,
          bottomLeft: 5,
          bottomRight: 5,
        },
        barThickness: 22,
        data:
          view === "week" ? [12, 19, 3, 5, 2, 3, 10] : [2, 3, 1, 4, 2, 1, 0],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="activity-graph">
      <div className="card-header">
        <h5 className="ant-typography">Activity</h5>
        <div style={{ marginBottom: "20px" }}>
          <select
            onChange={(e) => setView(e.target.value)}
            value={view}
            className="activity-dd"
          >
            <option value="day">Day</option>
            <option value="week">Week</option>
          </select>
        </div>
      </div>
      <div className="stacked-btn-cont">
        <button
          onClick={() => setActiveTab("patients")}
          className={`stacked-button ${
            activeTab === "patients" ? "active" : ""
          }`}
        >
          <span className="button-icon">
            <img src={ButtonIcon} alt="" />
          </span>
          Total Patients
        </button>
        <button
          onClick={() => setActiveTab("embryo")}
          className={`stacked-button ${activeTab === "embryo" ? "active" : ""}`}
        >
          <span className="button-icon">
            <img src={ButtonIcon} alt="" />
          </span>{" "}
          Total Embryo Graded
        </button>
      </div>

      <Bar data={data} options={options} height={255} />
    </div>
  );
};

export default ActivityGraph;
