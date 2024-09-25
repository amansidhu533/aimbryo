import { useState } from "react";

import { Card, Col, Row, Typography } from "antd";
import totalPaitents from "../assets/images/icon-2users.svg";
import totalEmb from "../assets/images/icon-embryobank.svg";
import avgEmb from "../assets/images/icon-embavg.svg";
import avgTime from "../assets/images/icon-clock.svg";
import Main from "../components/layout/Main";
import DonutChart from "../components/chart/DonutChart";
import Overview from "../components/sections/Overview";
import AgeDistributionChart from "../components/chart/AgeDistributionChart";
import ActivityGraph from "../components/chart/ActivityGraph";
import EmbryoGradingGraph from "../components/chart/EmbryoGradingGraph";
function Home() {
  const { Title, Text } = Typography;

  const count = [
    {
      desc: "Total Patients",
      title: "1000",
      icon: totalPaitents,
      bnb: "bnb2",
    },
    {
      desc: "Total Embryo Graded",
      title: "3000",
      icon: totalEmb,
      bnb: "bnb2",
    },
    {
      desc: "Avg #Emb Graded/Patient",
      title: "06",
      icon: avgEmb,
      bnb: "redtext",
    },
    {
      desc: "Avg Turnaround Time",
      title: "123 Hrs",
      icon: avgTime,
      bnb: "bnb2",
    },
  ];

  return (
    <Main>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[8, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className="mb-8"
            >
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[16, 0]}>
                    <Col xs={4}>
                      <div className="icon-box">
                        <img src={c.icon} alt={c.title} />
                      </div>
                    </Col>
                    <Col xs={20}>
                      <Title level={3}>{c.title}</Title>
                      <span>{c.desc}</span>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[8, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={7} className="mb-8">
            <Card bordered={false} className="mb-8">
              <Title level={5}>Overview</Title>
              <Overview />
            </Card>
            <Card bordered={false} className="h-full">
              <Title level={5}>Activity</Title>
              <ActivityGraph />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={17} className="mb-8">
            <Row gutter={[8, 0]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={13} className="mb-8">
                <Card bordered={false} className="h-full">
                  <Title level={5}>Age Distribution</Title>
                  <AgeDistributionChart />
                </Card>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={11} className="mb-8">
                <Card bordered={false} className="h-full">
                  <Title level={5}>Source</Title>
                  <DonutChart />
                </Card>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={24} className="mb-8">
                <Card bordered={false} className="h-full">
                  <Title level={5}>Embryo Grading</Title>
                  <EmbryoGradingGraph />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Main>
  );
}

export default Home;
