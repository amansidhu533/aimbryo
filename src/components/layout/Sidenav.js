// import { useState } from "react";
import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Lamp from "../../assets/images/lamp-on.svg";
function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  const dashboard = [
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.89163 18.8333C8.21663 18.8333 8.74996 18.3333 8.74996 17.0833V3.91666C8.74996 2.66666 8.21663 2.16666 6.89163 2.16666H3.52496C2.19996 2.16666 1.66663 2.66666 1.66663 3.91666V17.0833C1.66663 18.3333 2.19996 18.8333 3.52496 18.8333"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.1083 2.16666C11.7833 2.16666 11.25 2.64166 11.25 3.81666V7.59166C11.25 8.77499 11.7833 9.24166 13.1083 9.24166H16.475C17.8 9.24166 18.3333 8.76666 18.3333 7.59166V3.81666C18.3333 2.64166 17.8 2.16666 16.475 2.16666"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3333 16.975V13.6083C18.3333 12.2833 17.8 11.75 16.475 11.75H13.1083C11.7833 11.75 11.25 12.2833 11.25 13.6083V16.975C11.25 18.3 11.7833 18.8333 13.1083 18.8333H16.475C17.8 18.8333 18.3333 18.3 18.3333 16.975Z"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
  ];

  const patients = [
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0667 3.79999C13.4667 4.39166 13.7 5.09999 13.7 5.86666C13.6917 7.86666 12.1167 9.49166 10.1333 9.55832C10.05 9.54999 9.95 9.54999 9.85834 9.55832C8.01667 9.49999 6.525 8.09166 6.325 6.29166C6.08334 4.14999 7.84167 2.16666 9.99167 2.16666"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M5.825 12.6333C3.80833 13.9833 3.80833 16.1833 5.825 17.525C8.11667 19.0583 11.875 19.0583 14.1667 17.525C16.1833 16.175 16.1833 13.975 14.1667 12.6333C11.8917 11.1083 8.13333 11.1083 5.825 12.6333Z"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </svg>,
  ];
  const resources = [
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none" // Applies to the entire SVG unless overridden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3083 7.89999H14.6834"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M5.31665 7.89999L5.94165 8.52499L7.81665 6.64999"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M10.3083 13.7333H14.6834"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M5.31665 13.7333L5.94165 14.3583L7.81665 12.4833"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M1.66669 11.2917V13C1.66669 17.1667 3.33335 18.8333 7.50002 18.8333H12.5C16.6667 18.8333 18.3334 17.1667 18.3334 13V7.99999C18.3334 3.83332 16.6667 2.16666 12.5 2.16666H7.50002C3.33335 2.16666 1.66669 3.83332 1.66669 7.99999"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </svg>,
  ];

  const configuration = [
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 10.5C12.5 9.11667 11.3833 8 10 8C8.61667 8 7.5 9.11667 7.5 10.5C7.5 11.8833 8.61667 13 10 13C10.3417 13 10.675 12.9333 10.975 12.8"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.73334 17.65L6.64167 18.175C7.3 18.5667 8.15 18.3333 8.54167 17.675L8.63334 17.5167C9.38334 16.2083 10.6167 16.2083 11.375 17.5167L11.4667 17.675C11.8583 18.3333 12.7083 18.5667 13.3667 18.175L14.8083 17.35C15.5667 16.9167 15.825 15.9417 15.3917 15.1917C14.6333 13.8833 15.25 12.8167 16.7583 12.8167C17.625 12.8167 18.3417 12.1083 18.3417 11.2333V9.76666C18.3417 8.9 17.6333 8.18333 16.7583 8.18333C15.9167 8.18333 15.35 7.85 15.15 7.325C14.9917 6.91666 15.0583 6.38333 15.3917 5.80833C15.825 5.05 15.5667 4.08333 14.8083 3.65L14.1333 3.26666"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.3667 3.48333C10.6167 4.79166 9.38335 4.79166 8.62502 3.48333L8.53335 3.325C8.15002 2.66666 7.30002 2.43333 6.64169 2.825L5.20002 3.65C4.44169 4.08333 4.18335 5.05833 4.61669 5.81666C5.37502 7.11666 4.75835 8.18333 3.25002 8.18333C2.38335 8.18333 1.66669 8.89166 1.66669 9.76666V11.2333C1.66669 12.1 2.37502 12.8167 3.25002 12.8167C4.75835 12.8167 5.37502 13.8833 4.61669 15.1917"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
  ];
  const support = [
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66665 10.6833C1.57498 6.00001 5.27498 2.20834 9.95831 2.20834C14.6416 2.20834 18.3333 6.00001 18.3333 10.5917V15.725C18.3333 17.35 16.9833 18.7 15.3583 18.7C13.7333 18.7 12.3833 17.35 12.3833 15.725V13.3833C12.3833 12.575 13.0166 11.85 13.9166 11.85C14.725 11.85 15.45 12.4833 15.45 13.3833V15.9083"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.55002 15.9083V13.475C4.55002 12.6667 5.18335 11.9417 6.08335 11.9417C6.89169 11.9417 7.61669 12.575 7.61669 13.475V15.8167C7.61669 17.4417 6.26669 18.7917 4.64169 18.7917C3.01669 18.7917 1.66669 17.4333 1.66669 15.8167V13.8333"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
  ];
  const logout = [
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9167 11.3333V13.2166C17.9167 16.9416 16.425 18.4333 12.7 18.4333H12.5917C9.24165 18.4333 7.69999 17.225 7.42499 14.275"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.41669 6.80001C7.67502 3.80001 9.21669 2.57501 12.5917 2.57501H12.7C16.425 2.57501 17.9167 4.06668 17.9167 7.79168"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 10.5H3.01666"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.87498 7.70831L2.08331 10.5L4.87498 13.2916"
        stroke="#4A5157"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
  ];
  return (
    <>
      <div className="logo-menu scrollbar">
        <div className="brand">
          <img src={logo} alt="" />
        </div>

        <Menu theme="light" mode="inline">
          <Menu.Item key="1">
            <NavLink to="/dashboard">
              <span className="icon">{dashboard}</span>
              <span className="label">Dashboard</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/patients">
              <span className="icon">{patients}</span>
              <span className="label">Patients</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="3">
            <NavLink to="/resources">
              <span className="icon">{resources}</span>
              <span className="label">Resources</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/configuration">
              <span className="icon">{configuration}</span>
              <span className="label">Configuration</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/support">
              <span className="icon">{support}</span>
              <span className="label">Support</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
      <div className="aside-footer">
        <Menu theme="light" mode="inline">
          <Menu.Item key="4">
            <NavLink to="/">
              <span className="icon">{logout}</span>
              <span className="label">Logout</span>
            </NavLink>
          </Menu.Item>
        </Menu>
        <div className="footer-box">
          <span className="icon" style={{ color }}>
            <img src={Lamp} alt="" />
          </span>
          <h6>Thoughts Time</h6>
          <p>
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <Button type="primary" className="ant-btn-sm ant-btn-block">
            Write a message
          </Button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
