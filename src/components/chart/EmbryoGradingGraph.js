import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Button, message, Tabs } from "antd";
import FilterIcon from "../../assets/images/icon-filter1.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const { TabPane } = Tabs;

const EmbryoGradingGraph = () => {
  const [activeTab, setActiveTab] = useState("count");

  const dataMap = {
    count: {
      labels: ["Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [
        {
          label: "5AA",
          data: [4, 2, 3, 1, 2],
          backgroundColor: "#F1EBFF",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "5AB",
          data: [2, 3, 5, 2, 3],
          backgroundColor: "#E4D7FF",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "5BB",
          data: [1, 2, 4, 3, 4],
          backgroundColor: "#C7B2F2",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 24,
        },
        {
          label: "4AA",
          data: [3, 4, 2, 5, 1],
          backgroundColor: "#9E7FE1",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "4AB",
          data: [2, 1, 3, 4, 3],
          backgroundColor: "#7C67A8",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          marginRight: 5,
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
      ],
    },
    day: {
      labels: ["Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [
        {
          label: "5AA",
          data: [5, 4, 3, 2, 1],
          backgroundColor: "#F1EBFF",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "5AB",
          data: [3, 2, 5, 4, 2],
          backgroundColor: "#E4D7FF",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "5BB",
          data: [2, 1, 4, 3, 5],
          backgroundColor: "#C7B2F2",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "4AA",
          data: [4, 5, 2, 3, 1],
          backgroundColor: "#9E7FE1",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "4AB",
          data: [1, 3, 4, 5, 2],
          backgroundColor: "#7C67A8",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
      ],
    },
    age: {
      labels: ["Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [
        {
          label: "5AA",
          data: [3, 4, 1, 5, 2],
          backgroundColor: "#F1EBFF",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "5AB",
          data: [5, 2, 3, 1, 4],
          backgroundColor: "#E4D7FF",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "5BB",
          data: [4, 3, 2, 5, 1],
          backgroundColor: "#C7B2F2",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "4AA",
          data: [2, 5, 4, 3, 1],
          backgroundColor: "#9E7FE1",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "4AB",
          data: [1, 3, 5, 2, 4],
          backgroundColor: "#7C67A8",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
      ],
    },
    // Add more tabs as needed
    source: {
      labels: ["Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [
        {
          label: "5AA",
          data: [2, 3, 4, 5, 1],
          backgroundColor: "#F1EBFF",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "5AB",
          data: [1, 4, 3, 2, 5],
          backgroundColor: "#E4D7FF",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "5BB",
          data: [3, 5, 1, 4, 2],
          backgroundColor: "#C7B2F2",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "4AA",
          data: [4, 2, 5, 1, 3],
          backgroundColor: "#9E7FE1",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "4AB",
          data: [5, 1, 2, 3, 4],
          backgroundColor: "#7C67A8",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
      ],
    },
    fertilization: {
      labels: ["Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [
        {
          label: "5AA",
          data: [1, 5, 4, 3, 2],
          backgroundColor: "#F1EBFF",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "5AB",
          data: [2, 1, 5, 4, 3],
          backgroundColor: "#E4D7FF",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "5BB",
          data: [3, 2, 1, 5, 4],
          backgroundColor: "#C7B2F2",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "4AA",
          data: [4, 3, 2, 1, 5],
          backgroundColor: "#9E7FE1",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "4AB",
          data: [5, 4, 3, 2, 1],
          backgroundColor: "#7C67A8",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
      ],
    },
    protocol: {
      labels: ["Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [
        {
          label: "5AA",
          data: [3, 2, 4, 1, 5],
          backgroundColor: "#F1EBFF",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "5AB",
          data: [1, 3, 2, 5, 4],
          backgroundColor: "#E4D7FF",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "5BB",
          data: [5, 1, 3, 2, 4],
          backgroundColor: "#C7B2F2",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "4AA",
          data: [4, 5, 1, 3, 2],
          backgroundColor: "#9E7FE1",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
        {
          label: "4AB",
          data: [2, 4, 5, 1, 3],
          backgroundColor: "#7C67A8",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          },
          barThickness: 26,
          borderWidth: 2,
          borderColor: "#fff",
        },
      ],
    },
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        beginAtZero: true,
        stacked: true,
      },
      y: {
        grid: {
          display: false,
        },
        title: {
          display: true,  
          text: "Days",  
          color: "#a4a7aa",  
          font: {
            family: "Poppins",
            size: 12,  
            weight: "400", 
            color: "#a4a7aa",  
          },
        },
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
    elements: {
      bar: {
        borderSkipped: false, // Ensure rounded corners are applied to all sides
      },
    },
    categoryPercentage: 0.8, // Controls the width of the bars relative to the category width
    barPercentage: 0.9, // Controls the width of the bars themselves
  };
  const CustomLegend = () => {
    return (
      <div className="custom-legend">
        {dataMap[activeTab].datasets.map((dataset, index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", margin: "4px" }}
          >
            <div
              style={{
                width: "13px",
                height: "13px",
                backgroundColor: dataset.backgroundColor,
                borderRadius: "50%",
                marginRight: "8px",
              }}
            ></div>
            <span>{dataset.label}</span>
          </div>
        ))}
      </div>
    );
  };
  const handleFilterClick = () => {
    message.info("Filter button clicked!");
  };
  return (
    <div>
      <div className="embGrad card-header">
        <h5 className="ant-typography">Embryo Grading</h5>
        <div className="tabs-filter">
          <Tabs activeKey={activeTab} onChange={setActiveTab} centered>
            <TabPane tab="Count" key="count" />
            <TabPane tab="Day" key="day" />
            <TabPane tab="Age" key="age" />
            <TabPane tab="Source" key="source" />
            <TabPane tab="Fertilization" key="fertilization" />
            <TabPane tab="Protocol" key="protocol" />
          </Tabs>
          <Button type="default" onClick={handleFilterClick}>
            <img src={FilterIcon} alt="Filter" />
          </Button>
        </div>
      </div>
      <CustomLegend />
      <Bar data={dataMap[activeTab]} options={options} height={80} />
    </div>
  );
};

export default EmbryoGradingGraph;
