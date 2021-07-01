import React, { useState } from "react";
import { Layout, Menu } from "antd";
import logo from "../static/images/logo.png";
import {
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
function SideBar() {
  const [collapsed, setcollapsed] = useState(false);

  const onCollapse = () => {
    setcollapsed(!collapsed);
  };
  const { Sider } = Layout;
  return (
    <Sider
      collapsible={true}
      collapsed={collapsed}
      onCollapse={() => onCollapse()}
    >
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>

      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CalendarOutlined />}>
          <Link to="/bookAppointment">Book Appointment</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          <Link to="/Doctors">Doctors</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<TeamOutlined />}>
          <Link to="/Patients">Patients</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideBar;
