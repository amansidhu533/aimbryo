import React, { useState } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const Overview = () => {
  const [selectedTab, setSelectedTab] = useState("1");

  const handleTabChange = (key) => {
    setSelectedTab(key);
  };

  // Dummy data for each tab
  const fertilizationData = [
    { name: "Intracytoplasmic Sperm Injection", percentage: 35, color: "blue" },
    { name: "In-Vitro Fertilization", percentage: 65, color: "green" },
  ];

  const protocolData = [
    { name: "Fresh Cycle", percentage: 50, color: "red" },
    { name: "Frozen Cycle", percentage: 50, color: "purple" },
  ];

  const diagnosisData = [
    { name: "Male Factor", percentage: 40, color: "orange" },
    { name: "Female Factor", percentage: 60, color: "teal" },
  ];

  const getGraphData = () => {
    switch (selectedTab) {
      case "1":
        return fertilizationData;
      case "2":
        return protocolData;
      case "3":
        return diagnosisData;
      default:
        return [];
    }
  };

  const graphData = getGraphData();

  return (
    <div className="overview">
      <Tabs activeKey={selectedTab} onChange={handleTabChange} centered>
        {/* Fertilization Tab */}
        <TabPane tab="Fertilization" key="1">
          <div className="graph-container">
            <div className="lines-wrap">
              <div className="graph-lines">
                <div className="line">
                  {graphData.map((data, index) => (
                    <div
                      key={index}
                      className={`line-segment ${data.color}-line`}
                      style={{
                        width: `${
                          data.percentage - (graphData.length - 1) * 2
                        }%`,
                        marginRight: "4px",
                        borderRadius: "4px",
                      }}
                    ></div>
                  ))}
                </div>
                <div className="line-labels">
                  {graphData.map((data, index) => (
                    <div
                      key={index}
                      className="line-label"
                      style={{
                        width: `${
                          data.percentage - (graphData.length - 1) * 2
                        }%`,
                        marginRight: "4px",
                      }}
                    >
                      {`${data.percentage}%`}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Legend for Fertilization */}
            <div className="legend">
              <div className="legend-item">
                <span className="legend-color blue-line"></span>Intracytoplasmic Sperm Injection
              </div>
              <div className="legend-item">
                <span className="legend-color green-line"></span>In-Vitro
                Fertilization
              </div>
            </div>
          </div>
        </TabPane>

        {/* Protocol Tab */}
        <TabPane tab="Protocol" key="2">
          <div className="graph-container">
            <div className="lines-wrap">
              <div className="graph-lines">
                <div className="line">
                  {graphData.map((data, index) => (
                    <div
                      key={index}
                      className={`line-segment ${data.color}-line`}
                      style={{
                        width: `${
                          data.percentage - (graphData.length - 1) * 2
                        }%`, // Adjust width for gaps
                        marginRight: "4px",
                        borderRadius: "4px",
                      }}
                    ></div>
                  ))}
                </div>
                <div className="line-labels">
                  {graphData.map((data, index) => (
                    <div
                      key={index}
                      className="line-label"
                      style={{
                        width: `${
                          data.percentage - (graphData.length - 1) * 2
                        }%`,
                        marginRight: "4px",
                      }}
                    >
                      {`${data.percentage}%`}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Legend for Protocol */}
            <div className="legend">
              <div className="legend-item">
                <span className="legend-color red-line"></span>Fresh Cycle
              </div>
              <div className="legend-item">
                <span className="legend-color purple-line"></span>Frozen
                Cycle
              </div>
            </div>
          </div>
        </TabPane>

        {/* Diagnosis Tab */}
        <TabPane tab="Diagnosis" key="3">
          <div className="graph-container">
            <div className="lines-wrap">
              <div className="graph-lines">
                <div className="line">
                  {graphData.map((data, index) => (
                    <div
                      key={index}
                      className={`line-segment ${data.color}-line`}
                      style={{
                        width: `${
                          data.percentage - (graphData.length - 1) * 2
                        }%`, // Adjust width for gaps
                        marginRight: "4px",
                        borderRadius: "4px",
                      }}
                    ></div>
                  ))}
                </div>
                <div className="line-labels">
                  {graphData.map((data, index) => (
                    <div
                      key={index}
                      className="line-label"
                      style={{
                        width: `${
                          data.percentage - (graphData.length - 1) * 2
                        }%`,
                        marginRight: "4px",
                      }}
                    >
                      {`${data.percentage}%`}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Legend for Diagnosis */}
            <div className="legend">
              <div className="legend-item">
                <span className="legend-color orange-line"></span>Male
                Factor
              </div>
              <div className="legend-item">
                <span className="legend-color teal-line"></span>Female Factor
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Overview;
