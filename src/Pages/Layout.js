import React from "react";
import { Layout, Row } from "antd";
import SideBar from "../Components/SideBar.js";
import "../App.css";
import Dashboard from "./Dashboard.js";
import BookAppointment from "./BookAppointment";
import Doctors from "./Doctors.js";
import Patients from "./Patients.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const { Header, Content, Footer } = Layout;

export default class Layouts extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Router>
          <SideBar />

          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{ textAlign: "center" }}
            >
              <Row getter={16} justify="center">
                <h2 className="hmsTitle">Hospital Management System</h2>
              </Row>
            </Header>
            <Content style={{ margin: "10px 16px" }}>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route
                  exact
                  path="/BookAppointment"
                  component={BookAppointment}
                />
                <Route exact path="/Doctors" component={Doctors} />
                <Route exact path="/Patients" component={Patients} />
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              DBMS Project by Ahmad Wahaj - Ahsan - Asad - Nosherwan
            </Footer>
          </Layout>
        </Router>
      </Layout>
    );
  }
}
