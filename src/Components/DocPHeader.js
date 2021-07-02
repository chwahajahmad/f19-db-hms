import React, { useState } from "react";
import { Row, Col, Button, Modal, Tabs } from "antd";
import {
  InsertRowBelowOutlined,
  DeleteOutlined,
  FormOutlined,
} from "@ant-design/icons";
import DeleteData from "../Components/DeleteData";
const { TabPane } = Tabs;
function DocPHeader({ message, deleteData }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
      <Modal
        title="Edit Data"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
      >
        <Tabs tabPosition="bottom">
          <TabPane
            tab={
              <span>
                <InsertRowBelowOutlined />
                Insert Record
              </span>
            }
            key="1"
          >
            Content of Tab 1
          </TabPane>
          <TabPane
            tab={
              <span>
                <FormOutlined /> Update Record
              </span>
            }
            key="2"
          ></TabPane>
          <TabPane
            tab={
              <span>
                <DeleteOutlined /> Delete Record
              </span>
            }
            key="3"
          >
            <DeleteData deleteData={deleteData} />
          </TabPane>
        </Tabs>
      </Modal>
    </Row>
  );
}

export default DocPHeader;
