import React, { useState, useEffect } from "react";
import { Statistic, Row, Col } from "antd";
import axios from "axios";
import TableComp from "../Components/TableComp";
import fetchUrl from "../fetchURL.js";
const columns = [
  {
    title: "Patient",
    dataIndex: "pName",
  },
  {
    title: "Doctor",
    dataIndex: "dName",
  },
  {
    title: "Time",
    dataIndex: "appTime",
  },
];
function Dashboard() {
  const [dashboardStats, setDashboardStats] = useState([]);
  const [appointmentData, setappointmentData] = useState([]);
  useEffect(() => {
    getDashboardData();
  }, []);
  const getDashboardData = () => {
    axios.get(`${fetchUrl}/dashboardStats`).then(res => {
      setDashboardStats({ ...res.data });
    });
    axios.get(`${fetchUrl}/todaysAppointments`).then(res => {
      setappointmentData(res.data);
    });
  };

  return (
    <Row gutter={16} style={{ margin: "20px 0px" }}>
      <Col span={6} xs={24} md={12} lg={6}>
        <Row gutter={16} style={{ marginLeft: "2px" }}>
          <Statistic
            title="Total Patients"
            value={dashboardStats.pCount}
            loading={dashboardStats.length === 0 ? true : false}
          />
        </Row>
        <Row gutter={16} style={{ margin: "20px 0px" }}>
          <Statistic
            title="General Ward"
            value={dashboardStats.generalWard}
            loading={dashboardStats.length === 0 ? true : false}
          />
        </Row>
        <Row gutter={16} style={{ margin: "20px 0px" }}>
          <Statistic
            title="Private Ward"
            value={dashboardStats.privateWard}
            loading={dashboardStats.length === 0 ? true : false}
          />
        </Row>
      </Col>
      <Col span={6} xs={24} md={12} lg={6}>
        <Row gutter={16} style={{ marginLeft: "2px" }}>
          <Statistic
            title="Total Revenue"
            value={dashboardStats.totalRevenue}
            loading={dashboardStats.length === 0 ? true : false}
          />
        </Row>
        <Row gutter={16} style={{ margin: "20px 0px" }}>
          <Statistic
            title="Total Doctors"
            value={dashboardStats.dCount}
            loading={dashboardStats.length === 0 ? true : false}
          />
        </Row>
        <Row gutter={16} style={{ margin: "20px 0px" }}>
          <Statistic
            title="Blood Donors"
            value={dashboardStats.donorCount}
            loading={dashboardStats.length === 0 ? true : false}
          />
        </Row>
      </Col>
      <Col span={12} xs={24} lg={12}>
        <h2>Today's Appointments</h2>
        <TableComp
          columns={columns}
          data={appointmentData}
          loading={appointmentData.length === 0 ? true : false}
        />
      </Col>
    </Row>
  );
}

export default Dashboard;
