import React from "react";
import { Layout, Row, Col } from "antd";
import "../css/Main.css";
import Navigation from "./Navigation";
import SideBar from "./SideBar";
import RSideBar from "./rSideBar";

const { Footer } = Layout;
const Main = (props) => {
  return (
    <div>
      <Navigation />
      <div className="layout pt-5">
        <Row>
          <Col span={6} className="left-sidebar d-none d-md-block">
            <SideBar/>
          </Col>
          <Col span={12} className="mainbar d-none d-sm-block">
            {props.children}
          </Col>
          <Col span={24} className="mainbar p-4 d-block d-sm-none">
            {props.children}
          </Col>
          <Col
            span={6}
            className="right-sidebar p-3 animated bounceInRight d-none d-sm-block"
          >
           <RSideBar/>
          </Col>
        </Row>
      </div>
      <Footer className="fixed-bottom" style={{ textAlign: "center" }}>
        Likee ©2020 Created by Hooks
      </Footer>
    </div>
  );
};

export default Main;
