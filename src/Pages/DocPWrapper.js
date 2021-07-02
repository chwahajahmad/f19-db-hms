import React from "react";
import { Row, Col } from "antd";
import Header from "../Components/DocPHeader";
import Table from "../Components/TableComp";
function DocPWrapper({ message, tableData, deleteData, InsertComp }) {
  return (
    <div style={{ padding: "40px 20px" }}>
      <Header
        message={message}
        deleteData={deleteData}
        InsertComp={InsertComp}
      />
      <Row gutter={16} style={{ margin: "30px 00px" }} justify="center">
        <Col span={24} xs={0} sm={24}>
          <Table
            data={tableData.data}
            columns={tableData.columns}
            loading={tableData.loading}
            paginationSize={tableData.paginationSize}
          ></Table>
        </Col>
      </Row>
    </div>
  );
}

export default DocPWrapper;
