import { Table } from "antd";
import React from "react";

export default function TableComp({ columns, data, loading = true }) {
  return (
    <div>
      <h2>Today's Appointments</h2>
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        loading={loading}
        rowKey={data.patientId}
        pagination={{ pageSize: "6" }}
      />
    </div>
  );
}
