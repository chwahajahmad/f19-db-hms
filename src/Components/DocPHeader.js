import React, { useState } from "react";
import { Row, Col, Button, Modal } from "antd";
function DocPHeader({ message }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <Row gutter={16} justify="center">
      <Col span={16} xs={24} sm={16}>
        <h1>{message}</h1>
      </Col>
      <Col span={4} xs={24} sm={4}>
        <Button type="primary" danger onClick={showModal}>
          Edit Data
        </Button>
      </Col>
      <Modal title="Edit Data" visible={isModalVisible} footer={null}></Modal>
    </Row>
  );
}

export default DocPHeader;
