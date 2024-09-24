import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to get current route

import { Row, Col, Badge, Button, Input, Drawer, Typography } from "antd";

import { SearchOutlined } from "@ant-design/icons";

import Message from "../../assets/images/icon-messages.svg";
import Notification from "../../assets/images/icon-notification.svg";
import AimbryoLogo from "../../assets/images/logo-aimbryo.png";
import AisaLogo from "../../assets/images/logo-aisa.png";
import AiooLogo from "../../assets/images/logo-aioo.png";
import AlikeLogo from "../../assets/images/logo-alike.png";
import EraiLogo from "../../assets/images/logo-erai.png";
import Profile from "../../assets/images/profile-img.png";

const bell = (
  <img src={Notification} alt="message icon" width="20" height="21" />
);

const messages = (
  <img src={Message} alt="message icon" width="20" height="21" />
);

function Header({ placement, subName }) {
  const { Title, Text } = Typography;
  const location = useLocation(); // Get current location

  const [visible, setVisible] = useState(false);
  const [visibleNotifications, setVisibleNotifications] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState("aimbryo");

  useEffect(() => window.scrollTo(0, 0), []);

  const showDrawer = () => setVisible(true);
  const hideDrawer = () => setVisible(false);

  const showNotifyDrawer = () => setVisibleNotifications(true);
  const hideNotifyDrawer = () => setVisibleNotifications(false);

  const logosList = [
    { src: AimbryoLogo, alt: "Aimbryo Logo", key: "aimbryo" },
    { src: AisaLogo, alt: "Aisa Logo", key: "aisa" },
    { src: AiooLogo, alt: "Aioo Logo", key: "aioo" },
    { src: AlikeLogo, alt: "Alike Logo", key: "alike" },
    { src: EraiLogo, alt: "Erai Logo", key: "erai" },
  ];

  return (
    <Row gutter={[24, 0]}>
      <Col span={24} md={6}>
        <div className="ant-page-header-heading">
          <span
            className="ant-page-header-heading-title"
            style={{ textTransform: "capitalize" }}
          >
            {subName.replace("/", "")}
          </span>
        </div>
      </Col>
      <Col span={24} md={18} className="header-control">
        <div className="header-icons profile-img">
          <img src={Profile} alt={Profile}/>
        </div>
        <div className="header-icons">
          <Badge size="small">
            <Button type="link" onClick={showNotifyDrawer}>
              {bell}
            </Button>
            <Drawer
              className="settings-drawer"
              mask={true}
              width={360}
              onClose={hideNotifyDrawer}
              placement={placement}
              visible={visibleNotifications}
            >
              <div layout="vertical">
                <div className="header-top">
                  <Title level={4}>
                    Notifications
                    <Text className="subtitle">See our dashboard options.</Text>
                  </Title>
                </div>
              </div>
            </Drawer>
          </Badge>
        </div>
        <div className="header-icons">
          <Button type="link" onClick={showDrawer}>
            {messages}
          </Button>
          <Drawer
            className="settings-drawer"
            mask={true}
            width={360}
            onClose={hideDrawer}
            placement={placement}
            visible={visible}
          >
            <div layout="vertical">
              <div className="header-top">
                <Title level={4}>
                  Messages
                  <Text className="subtitle">See our dashboard options.</Text>
                </Title>
              </div>
            </div>
          </Drawer>
        </div>
        {location.pathname === "/dashboard" ? ( // Check if on dashboard page
          <>
            <span className="divider"></span>
            <ul className="logo-cont">
              {logosList.map((logo) => (
                <li
                  key={logo.key}
                  onClick={() => setSelectedLogo(logo.key)}
                  className={`logos ${
                    selectedLogo === logo.key ? "selected" : ""
                  }`}
                >
                  <img src={logo.src} alt={logo.alt} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
          />
        )}
      </Col>
    </Row>
  );
}

export default Header;
