import React, { useState } from "react";
import { Layout, Menu } from "antd";
import logo from "../static/images/logo.png";
import {
  DashboardOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
function SideBar() {
  const [collapsed, setcollapsed] = useState(false);
  const { SubMenu } = Menu;

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
        <SubMenu key="sub1" icon={<UserOutlined />} title="Doctors">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Patients">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideBar;
