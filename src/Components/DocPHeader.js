import React from "react";
import { Row, Col, Button } from "antd";
function DocPHeader({ message }) {
  return (
    <Row gutter={16} justify="center">
      <Col span={16} xs={24} sm={16}>
        <h1>{message}</h1>
      </Col>
      <Col span={4} xs={24} sm={4}>
        <Button type="primary" danger>
          Edit Data
        </Button>
      </Col>
    </Row>
  );
}

export default DocPHeader;
